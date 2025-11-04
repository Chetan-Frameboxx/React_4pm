/* app.js - Shared logic for ShopEase demo (client-only)
   Notes:
   - Data stored in localStorage under keys: 'se_users' and 'se_current'
   - users: object keyed by email with {name,email,passwordHash,cart,orders,wishlist,settings}
   - currentUser: email string
   - For demo hashing we use a simple (not-secure) hash; do NOT use this in production.
*/

// -------------- Storage helpers ----------------
const STORAGE_USERS = 'se_users';
const STORAGE_CURRENT = 'se_current';
const STORAGE_PRODUCT_CACHE = 'se_products_cache';
const FALLBACK_JSON = 'data/fallback-products.json';
const FAKESTORE_API = 'https://fakestoreapi.com/products';

// Basic demo hash (not secure) - for learning only
function demoHash(pw){ 
  // simple reversible-ish mix - DO NOT use in real apps
  return btoa(pw.split('').reverse().join('') + '-se-demo');
}

// Users object: {email: userObj}
function getAllUsers(){ return JSON.parse(localStorage.getItem(STORAGE_USERS) || '{}'); }
function saveAllUsers(obj){ localStorage.setItem(STORAGE_USERS, JSON.stringify(obj)); }
function getCurrentUserEmail(){ return localStorage.getItem(STORAGE_CURRENT); }
function setCurrentUserEmail(email){ if(email) localStorage.setItem(STORAGE_CURRENT, email); else localStorage.removeItem(STORAGE_CURRENT); }
function getCurrentUser(){ const e = getCurrentUserEmail(); if(!e) return null; const u = getAllUsers()[e]; return u || null; }
function saveUser(user){ const users = getAllUsers(); users[user.email] = user; saveAllUsers(users); }
function ensureUserStructure(u){
  u.cart = u.cart || {};
  u.orders = u.orders || [];
  u.wishlist = u.wishlist || {};
  u.settings = u.settings || {theme:'light', autoLogoutMinutes:0};
  return u;
}

// Signup/login
function signupUser({name,email,password}){
  const users = getAllUsers();
  if(users[email]) return false;
  const user = { name, email, passwordHash: demoHash(password) };
  ensureUserStructure(user);
  users[email] = user;
  saveAllUsers(users);
  setCurrentUserEmail(email);
  return true;
}
function loginUser(email,password){
  const users = getAllUsers();
  const u = users[email];
  if(!u) return false;
  if(u.passwordHash === demoHash(password)){
    setCurrentUserEmail(email);
    return true;
  }
  return false;
}
function logoutUser(){
  setCurrentUserEmail(null);
  showToast('Logged out','info');
  updateNavbarUI();
}

// -------------- Products loader -------------
/* loadProducts: fetch from API; if fails, load fallback from local file */
async function loadProducts(){
  // If cached and recent, use cache
  const cached = JSON.parse(localStorage.getItem(STORAGE_PRODUCT_CACHE) || 'null');
  if(cached && cached.ts && (Date.now() - cached.ts) < 1000*60*60){ // 1 hour cache
    window.SE_PRODUCTS = cached.data;
    return window.SE_PRODUCTS;
  }
  try{
    const res = await fetch(FAKESTORE_API);
    if(!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    window.SE_PRODUCTS = normalizeProducts(data);
    localStorage.setItem(STORAGE_PRODUCT_CACHE, JSON.stringify({ts:Date.now(),data:window.SE_PRODUCTS}));
    return window.SE_PRODUCTS;
  }catch(e){
    // fallback local
    try{
      const res2 = await fetch(FALLBACK_JSON);
      const data2 = await res2.json();
      window.SE_PRODUCTS = normalizeProducts(data2);
      localStorage.setItem(STORAGE_PRODUCT_CACHE, JSON.stringify({ts:Date.now(),data:window.SE_PRODUCTS}));
      return window.SE_PRODUCTS;
    }catch(e2){
      window.SE_PRODUCTS = [];
      return window.SE_PRODUCTS;
    }
  }
}
function normalizeProducts(arr){
  // Ensure each product has numeric id and category
  return arr.map(p=>{
    return {
      id: (p.id || p._id || Math.random().toString(36).slice(2,9)).toString(),
      title: p.title || p.name || 'Product',
      description: p.description || '',
      price: Number(p.price) || 0,
      category: p.category || (p.category ? p.category : 'general'),
      image: p.image || p.imageUrl || '',
      rating: p.rating || {rate: (p.rating||{}).rate || Math.round(3+Math.random()*2), count: (p.rating||{}).count || 10}
    };
  });
}

// Utility: get product by id
function getProductById(id){
  if(!window.SE_PRODUCTS) return null;
  return window.SE_PRODUCTS.find(p => p.id.toString() === id.toString()) || null;
}

// -------------- Navbar & UI helpers -------------
function buildNavbar(){
  const navHtml = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">ShopEase</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item">
          <a class="nav-link" href="products.html">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cart.html">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="orders.html">Orders</a>
        </li>
        <li class="nav-item">
          <!-- Placeholder for user greeting or login -->
          <a id="userNav" class="nav-link fw-semibold text-warning" href="login.html">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
  document.getElementById('navbar-placeholder').innerHTML = navHtml;
  // attach logout if clicked when showing profile
  const userNav = document.getElementById('userNav');
  userNav.addEventListener('click', (e)=>{
    const user = getCurrentUser();
    if(user){ // show dropdown actions
      e.preventDefault();
      // simple: navigate to profile
      location.href = 'profile.html';
    }
  });
}

function updateNavbarUI(){
  const user = getCurrentUser();
  const btn = document.getElementById('userNav');
  const cartCountSpan = document.getElementById('navCartCount');
  if(btn){
    if(user){
      btn.textContent = user.name;
      btn.className = 'btn btn-outline-primary ms-3';
      btn.href = 'profile.html';
    } else {
      btn.textContent = 'Login';
      btn.className = 'btn btn-outline-primary ms-3';
      btn.href = 'login.html';
    }
  }
  if(cartCountSpan){
    const u = getCurrentUser();
    const count = u ? Object.values(u.cart || {}).reduce((s,i)=>s + (i.qty||0),0) : 0;
    cartCountSpan.textContent = count;
  }
}

// -------------- Toast helper -------------
function showToast(msg, type='primary', delay=2000){
  const id = 't'+Date.now();
  const container = document.getElementById('toast-container');
  if(!container) return;
  const div = document.createElement('div');
  div.className = `toast align-items-center text-bg-${type} border-0`;
  div.id = id;
  div.setAttribute('role','alert');
  div.setAttribute('aria-live','assertive');
  div.setAttribute('aria-atomic','true');
  div.innerHTML = `<div class="d-flex">
    <div class="toast-body">${msg}</div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>`;
  container.appendChild(div);
  const t = new bootstrap.Toast(div, {delay});
  t.show();
  setTimeout(()=> { try{ div.remove(); }catch(e){} }, delay+800);
}

// -------------- Products rendering / listing -------------
const PAGE_SIZE = 6;
function renderProductsPage(page=1){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  const all = window.SE_PRODUCTS || [];
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const cat = document.getElementById('catFilter')?.value || '';
  const sort = document.getElementById('sortSelect')?.value || '';
  let filtered = all.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  if(cat) filtered = filtered.filter(p=>p.category===cat);
  if(sort==='price-asc') filtered.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') filtered.sort((a,b)=>b.price-a.price);
  if(sort==='rating-desc') filtered.sort((a,b)=> (b.rating?.rate||0) - (a.rating?.rate||0));

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  page = Math.min(page, pages);

  // pagination UI
  const pagUl = document.getElementById('pagination');
  if(pagUl){
    pagUl.innerHTML = '';
    for(let i=1;i<=pages;i++){
      const li = document.createElement('li');
      li.className = `page-item ${i===page?'active':''}`;
      li.innerHTML = `<a class="page-link" href="javascript:void(0)">${i}</a>`;
      li.querySelector('a').addEventListener('click', ()=> renderProductsPage(i));
      pagUl.appendChild(li);
    }
  }

  const start = (page-1)*PAGE_SIZE;
  const pageItems = filtered.slice(start, start+PAGE_SIZE);
  grid.innerHTML = pageItems.map(p=>productCardHtml(p)).join('');
  attachProductEvents();
}

function productCardHtml(p){
  return `
  <div class="col-md-4">
    <div class="card h-100">
      <img src="${p.image}" onerror="this.style.visibility='hidden'" class="card-img-top" style="height:220px;object-fit:cover" alt="${escapeHtml(p.title)}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${escapeHtml(p.title)}</h5>
        <p class="card-text text-muted mb-2">₹${p.price.toFixed(2)}</p>
        <div class="mt-auto d-flex gap-2">
          <a href="product.html?id=${p.id}" class="btn btn-outline-secondary">View</a>
          <button class="btn btn-primary flex-grow-1" data-add="${p.id}"><i class="bi bi-cart-plus"></i> Add</button>
          <button class="btn btn-outline-warning" data-wish="${p.id}"><i class="bi bi-heart"></i></button>
        </div>
      </div>
    </div>
  </div>`;
}

function attachProductEvents(){
  document.querySelectorAll('[data-add]').forEach(btn=>{
    btn.onclick = function(){
      const id = this.getAttribute('data-add');
      addToCart(id,1);
    };
  });
  document.querySelectorAll('[data-wish]').forEach(btn=>{
    btn.onclick = function(){
      const id = this.getAttribute('data-wish');
      toggleWishlist(id);
    };
  });
}

function populateCategories(){
  const cats = [...new Set((window.SE_PRODUCTS||[]).map(p=>p.category||'general'))];
  const sel = document.getElementById('catFilter');
  if(!sel) return;
  sel.innerHTML = '<option value="">All categories</option>' + cats.map(c=>`<option value="${c}">${capitalize(c)}</option>`).join('');
}
function renderCategories(){
  const container = document.getElementById('categories');
  if(!container) return;
  const cats = [...new Set((window.SE_PRODUCTS||[]).map(p=>p.category||'general'))];
  container.innerHTML = cats.map(c => `<button class="btn btn-outline-secondary btn-sm" onclick="filterByCategory('${c}')">${capitalize(c)}</button>`).join(' ');
}
function filterByCategory(c){ location.href = 'products.html'; setTimeout(()=>{ document.getElementById('catFilter').value = c; renderProductsPage(); }, 100); }

// -------------- Product detail --------------
function renderProductDetail(id){
  const p = getProductById(id);
  const container = document.getElementById('productDetail');
  if(!p || !container){ container.innerHTML = '<div class="alert alert-warning">Product not found</div>'; return; }
  container.innerHTML = `
    <div class="row g-3">
      <div class="col-md-5">
        <img src="${p.image}" onerror="this.style.visibility='hidden'" class="img-fluid rounded" alt="${escapeHtml(p.title)}">
      </div>
      <div class="col-md-7">
        <h3>${escapeHtml(p.title)}</h3>
        <div class="mb-2"><strong>₹${p.price.toFixed(2)}</strong> • <small class="text-muted">${p.category}</small></div>
        <p>${escapeHtml(p.description)}</p>
        <p>Rating: ${p.rating?.rate || 'N/A'} (${p.rating?.count || 0})</p>
        <div class="d-flex gap-2">
          <button class="btn btn-primary" id="addSingle">Add to Cart</button>
          <button class="btn btn-outline-warning" id="wishToggle">Wishlist</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('addSingle').addEventListener('click', ()=> addToCart(id,1));
  document.getElementById('wishToggle').addEventListener('click', ()=> toggleWishlist(id));
  // reviews area
  renderReviews(id);
}

// -------------- Reviews (local) --------------
function getReviewsForProduct(pid){
  const key = 'se_reviews';
  const all = JSON.parse(localStorage.getItem(key) || '{}');
  return all[pid] || [];
}
function saveReview(pid, review){
  const key = 'se_reviews';
  const all = JSON.parse(localStorage.getItem(key) || '{}');
  all[pid] = all[pid] || [];
  all[pid].push(review);
  localStorage.setItem(key, JSON.stringify(all));
}
function renderReviews(pid){
  const reviews = getReviewsForProduct(pid);
  const el = document.getElementById('reviews');
  el.innerHTML = `
    <h5>Reviews</h5>
    <div id="reviewList">${reviews.map(r=>`<div class="border p-2 mb-2"><strong>${escapeHtml(r.user)}</strong> <small class="text-muted">${r.date}</small><div>${escapeHtml(r.text)}</div></div>`).join('') || '<div class="text-muted">No reviews yet</div>'}</div>
    <div class="mt-3">
      <h6>Add a review</h6>
      <textarea id="revText" class="form-control mb-2" rows="3"></textarea>
      <button class="btn btn-sm btn-primary" id="revBtn">Submit</button>
    </div>
  `;
  document.getElementById('revBtn').addEventListener('click', ()=>{
    const t = document.getElementById('revText').value.trim();
    const user = getCurrentUser();
    if(!user){ showToast('Please login to review','warning'); location.href='login.html'; return; }
    if(!t) { showToast('Enter review text','warning'); return; }
    saveReview(pid, { user:user.name, text:t, date: new Date().toLocaleString() });
    showToast('Review added','success');
    renderReviews(pid);
  });
}

// -------------- Cart functions --------------
function addToCart(pid, qty=1){
  const user = getCurrentUser();
  if(!user){ showToast('Login required','warning'); setTimeout(()=> location.href='login.html',700); return; }
  const users = getAllUsers();
  const u = users[user.email];
  u.cart = u.cart || {};
  if(u.cart[pid]) u.cart[pid].qty += qty;
  else {
    const p = getProductById(pid);
    u.cart[pid] = { id: pid, title: p.title, price: p.price, qty: qty, image: p.image };
  }
  saveAllUsers(users);
  saveUser(u);
  showToast('Added to cart','success');
  updateNavbarUI();
}
function changeCartQty(pid, delta){
  const user = getCurrentUser();
  if(!user) return;
  const users = getAllUsers();
  const u = users[user.email];
  if(!u.cart || !u.cart[pid]) return;
  u.cart[pid].qty += delta;
  if(u.cart[pid].qty <= 0) delete u.cart[pid];
  saveAllUsers(users);
  saveUser(u);
  renderCartPage();
  updateNavbarUI();
}
function removeFromCart(pid){
  const user = getCurrentUser();
  if(!user) return;
  const users = getAllUsers();
  const u = users[user.email];
  if(u.cart && u.cart[pid]) delete u.cart[pid];
  saveAllUsers(users);
  saveUser(u);
  renderCartPage();
  updateNavbarUI();
}
function renderCartPage(){
  const area = document.getElementById('cartArea');
  const user = getCurrentUser();
  if(!area) return;
  if(!user){
    area.innerHTML = `<div class="alert alert-warning">Please <a href="login.html">login</a> to see your cart.</div>`;
    return;
  }
  const cart = user.cart || {};
  const items = Object.values(cart || []);
  if(items.length === 0){
    area.innerHTML = '<div class="text-muted">Your cart is empty.</div>';
    updateNavbarUI();
    return;
  }
  let html = '<div class="list-group">';
  items.forEach(it=>{
    html += `<div class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>${escapeHtml(it.title)}</strong><br><small>₹${it.price} × ${it.qty}</small>
      </div>
      <div class="d-flex gap-2 align-items-center">
        <button class="btn btn-sm btn-outline-secondary" onclick="changeCartQty('${it.id}',-1)">−</button>
        <span>${it.qty}</span>
        <button class="btn btn-sm btn-outline-secondary" onclick="changeCartQty('${it.id}',1)">+</button>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart('${it.id}')">Remove</button>
      </div>
    </div>`;
  });
  html += '</div>';
  const subtotal = items.reduce((s,i)=>s + i.qty * i.price, 0);
  // coupons & shipping & tax
  html += `<div class="mt-3 p-3 border rounded">
    <div class="mb-2"><strong>Subtotal:</strong> ₹${subtotal.toFixed(2)}</div>
    <div class="mb-2">
      <input id="couponCode" class="form-control form-control-sm" placeholder="Coupon code (e.g. SAVE10)">
    </div>
    <div class="d-flex gap-2">
      <button class="btn btn-sm btn-outline-primary" onclick="applyCoupon()">Apply Coupon</button>
      <button class="btn btn-success ms-auto" onclick="proceedCheckout()">Checkout</button>
    </div>
  </div>`;
  area.innerHTML = html;
  updateNavbarUI();
}

const COUPONS = {
  'SAVE10': {type:'percent', value:10},
  'FLAT100': {type:'flat', value:100}
};
function applyCoupon(){
  const code = (document.getElementById('couponCode')?.value || '').trim().toUpperCase();
  if(!code) { showToast('Enter coupon code','warning'); return; }
  if(!COUPONS[code]) { showToast('Invalid coupon','danger'); return; }
  // Save into user's settings temporarily
  const user = getCurrentUser();
  if(!user){ showToast('Login first','warning'); return; }
  const users = getAllUsers();
  users[user.email].settings = users[user.email].settings || {};
  users[user.email].settings.appliedCoupon = code;
  saveAllUsers(users);
  showToast('Coupon applied: '+code,'success');
  renderCartPage();
}

function computeTotalsForUser(u){
  const items = Object.values(u.cart || {});
  const subtotal = items.reduce((s,i)=>s + i.price * i.qty, 0);
  const shipping = subtotal > 1000 ? 0 : 49;
  const tax = subtotal * 0.12; // 12% tax
  let discount = 0;
  const code = u.settings?.appliedCoupon;
  if(code && COUPONS[code]){
    const c = COUPONS[code];
    if(c.type === 'percent') discount = subtotal * (c.value/100);
    else discount = c.value;
  }
  const total = Math.max(0, subtotal + shipping + tax - discount);
  return {subtotal, shipping, tax, discount, total, coupon: code || null};
}

function proceedCheckout(){
  const user = getCurrentUser();
  if(!user){ showToast('Please login','warning'); location.href='login.html'; return; }
  const totals = computeTotalsForUser(user);
  if(Object.values(user.cart || {}).length===0){ showToast('Cart empty','warning'); return; }

  // create order object
  const order = {
    id: 'ORD' + Date.now(),
    date: new Date().toLocaleString(),
    items: Object.values(user.cart),
    totals,
    status: 'Processing'
  };
  // save into user's orders
  const users = getAllUsers();
  users[user.email].orders = users[user.email].orders || [];
  users[user.email].orders.unshift(order); // most recent first
  // clear cart & coupon
  users[user.email].cart = {};
  users[user.email].settings.appliedCoupon = null;
  saveAllUsers(users);
  showToast('Order placed: ' + order.id, 'success');
  // simulate status progression (local only)
  setTimeout(()=> updateOrderStatus(user.email, order.id, 'Shipped'), 5000);
  setTimeout(()=> updateOrderStatus(user.email, order.id, 'Delivered'), 15000);
  // redirect to orders
  setTimeout(()=> location.href='orders.html', 800);
  updateNavbarUI();
}

function updateOrderStatus(email, orderId, status){
  const users = getAllUsers();
  if(!users[email]) return;
  const orders = users[email].orders || [];
  const o = orders.find(x=>x.id===orderId);
  if(o){ o.status = status; saveAllUsers(users); if(getCurrentUserEmail()===email) showToast(`Order ${orderId} is now ${status}`, 'info'); }
}

// -------------- Orders rendering --------------
function renderOrdersPage(){
  const container = document.getElementById('ordersArea');
  const user = getCurrentUser();
  if(!container) return;
  if(!user){ container.innerHTML = '<div class="alert alert-warning">Please login to see orders.</div>'; return; }
  const orders = user.orders || [];
  if(orders.length === 0){ container.innerHTML = '<div class="text-muted">No orders yet.</div>'; return; }
  container.innerHTML = orders.map(o=>{
    return `<div class="card mb-3">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div><strong>${o.id}</strong><div class="text-muted">${o.date}</div></div>
          <div><span class="badge bg-secondary">${o.status}</span></div>
        </div>
        <div class="mt-3">${o.items.map(it=>`<div>${escapeHtml(it.title)} × ${it.qty} — ₹${(it.price*it.qty).toFixed(2)}</div>`).join('')}</div>
        <div class="mt-3 d-flex justify-content-between">
          <div><strong>Total: ₹${o.totals.total.toFixed(2)}</strong></div>
          <div>
            <button class="btn btn-sm btn-outline-primary" onclick="reorder('${o.id}')">Reorder</button>
            <button class="btn btn-sm btn-outline-secondary" onclick="printInvoice('${o.id}')">Invoice</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function reorder(orderId){
  const user = getCurrentUser();
  if(!user) return;
  const users = getAllUsers();
  const u = users[user.email];
  const order = u.orders.find(o => o.id === orderId);
  if(!order) return;
  u.cart = u.cart || {};
  order.items.forEach(it => {
    if(u.cart[it.id]) u.cart[it.id].qty += it.qty;
    else u.cart[it.id] = { id: it.id, title: it.title, price: it.price, qty: it.qty, image: it.image };
  });
  saveAllUsers(users);
  showToast('Order added to cart','success');
  location.href = 'cart.html';
}

function printInvoice(orderId){
  const user = getCurrentUser();
  if(!user) return;
  const order = (user.orders || []).find(o=>o.id===orderId);
  if(!order) return;
  const html = `
    <html><head><title>Invoice ${order.id}</title></head>
    <body>
      <h2>ShopEase — Invoice</h2>
      <p><strong>Order:</strong> ${order.id}</p>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>User:</strong> ${escapeHtml(user.name)} (${escapeHtml(user.email)})</p>
      <hr>
      ${order.items.map(it=>`<div>${escapeHtml(it.title)} × ${it.qty} — ₹${(it.price*it.qty).toFixed(2)}</div>`).join('')}
      <hr>
      <p><strong>Total:</strong> ₹${order.totals.total.toFixed(2)}</p>
    </body></html>
  `;
  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  w.print();
}

// -------------- Wishlist --------------
function toggleWishlist(pid){
  const user = getCurrentUser();
  if(!user){ showToast('Login required','warning'); location.href='login.html'; return; }
  const users = getAllUsers();
  const u = users[user.email];
  u.wishlist = u.wishlist || {};
  if(u.wishlist[pid]) { delete u.wishlist[pid]; showToast('Removed from wishlist','info'); }
  else { 
    const p = getProductById(pid);
    u.wishlist[pid] = { id: pid, title: p.title, price: p.price, image: p.image };
    showToast('Added to wishlist','success');
  }
  saveAllUsers(users);
  saveUser(u);
  updateNavbarUI();
}

// -------------- Profile --------------
function renderProfile(){
  const user = getCurrentUser();
  const area = document.getElementById('profileArea');
  if(!area) return;
  if(!user){ area.innerHTML = '<div class="alert alert-warning">Please login</div>'; return; }
  area.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5>${escapeHtml(user.name)}</h5>
        <p>${escapeHtml(user.email)}</p>
        <hr>
        <h6>Edit</h6>
        <div class="mb-2"><label class="form-label">Name</label><input id="ppName" class="form-control" value="${escapeHtml(user.name)}"></div>
        <div class="mb-2"><label class="form-label">New password</label><input id="ppPass" class="form-control" type="password" placeholder="Leave blank to keep"></div>
        <div class="d-flex gap-2">
          <button class="btn btn-primary" onclick="saveProfile()">Save</button>
          <button class="btn btn-outline-danger" onclick="doLogout()">Logout</button>
        </div>
      </div>
    </div>
  `;
}
function saveProfile(){
  const name = document.getElementById('ppName').value.trim();
  const pass = document.getElementById('ppPass').value;
  if(!name){ showToast('Name required','warning'); return; }
  const user = getCurrentUser();
  const users = getAllUsers();
  users[user.email].name = name;
  if(pass) users[user.email].passwordHash = demoHash(pass);
  saveAllUsers(users);
  showToast('Profile updated','success');
  updateNavbarUI();
}
function doLogout(){ logoutUser(); location.href = 'index.html'; }

// -------------- Admin --------------
function renderAdmin(){
  const area = document.getElementById('adminArea');
  const users = getAllUsers();
  const allUsers = Object.values(users);
  // total orders, top products
  const orders = [];
  allUsers.forEach(u=> (u.orders||[]).forEach(o => orders.push({user:u.email, ...o})));
  const totalOrders = orders.length;
  const sales = {};
  orders.forEach(o => o.items.forEach(it => { sales[it.id] = (sales[it.id]||0) + it.qty; }));
  const top = Object.entries(sales).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([id,q]) => ({id,qty:q, title: getProductById(id)?.title || id}));
  area.innerHTML = `
    <div class="mb-3"><strong>Total users:</strong> ${allUsers.length}</div>
    <div class="mb-3"><strong>Total orders:</strong> ${totalOrders}</div>
    <h5>Top products</h5>
    <ul>${top.map(t=>`<li>${escapeHtml(t.title || t.id)} — ${t.qty}</li>`).join('')}</ul>
    <hr>
    <h5>Manage users</h5>
    <div>${allUsers.map(u=>`<div class="d-flex justify-content-between align-items-center border p-2 mb-1">
      <div><strong>${escapeHtml(u.name)}</strong><br><small>${escapeHtml(u.email)}</small></div>
      <div><button class="btn btn-sm btn-danger" onclick="adminDeleteUser('${u.email}')">Delete</button></div>
    </div>`).join('')}</div>
  `;
}
function adminDeleteUser(email){
  if(!confirm('Delete user '+email+'?')) return;
  const users = getAllUsers();
  delete users[email];
  saveAllUsers(users);
  showToast('User deleted','info');
  renderAdmin();
}

// -------------- Misc helpers --------------
function requireLogin(){
  if(!getCurrentUser()){
    location.href = 'login.html';
    return false;
  }
  return true;
}
function escapeHtml(s){
  if(!s) return '';
  return String(s).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; });
}
function capitalize(s){ return s && s[0].toUpperCase() + s.slice(1); }

// -------------- Recommended & recent views --------------
function renderRecommended(){
  const area = document.getElementById('recommended');
  if(!area) return;
  const sample = (window.SE_PRODUCTS || []).slice(0,3);
  area.innerHTML = sample.map(p=>`<div class="col-md-4"><div class="card h-100">
    <img src="${p.image}" onerror="this.style.visibility='hidden'" class="card-img-top" style="height:160px;object-fit:cover">
    <div class="card-body"><h6>${escapeHtml(p.title)}</h6><div class="small text-muted">₹${p.price}</div><a href="product.html?id=${p.id}" class="stretched-link"></a></div>
  </div></div>`).join('');
}

// -------------- Misc UI & flow --------------
function updateNavbarCounts(){
  updateNavbarUI();
}
function escapeQS(s){ return encodeURIComponent(s); }

// -------------- Sign-up/Login helpers (exposed for login.html) --------------
window.signupUser = signupUser;
window.loginUser = loginUser;

// -------------- Expose many functions to global for simple inline usage --------------
window.buildNavbar = buildNavbar;
window.updateNavbarUI = updateNavbarUI;
window.showToast = showToast;
window.loadProducts = loadProducts;
window.renderProductsPage = renderProductsPage;
window.populateCategories = populateCategories;
window.renderProductDetail = renderProductDetail;
window.addToCart = addToCart;
window.renderCartPage = renderCartPage;
window.changeCartQty = changeCartQty;
window.removeFromCart = removeFromCart;
window.proceedCheckout = proceedCheckout;
window.renderOrdersPage = renderOrdersPage;
window.reorder = reorder;
window.printInvoice = printInvoice;
window.toggleWishlist = toggleWishlist;
window.renderProfile = renderProfile;
window.doLogout = doLogout;
window.renderAdmin = renderAdmin;
window.requireLogin = requireLogin;
window.getCurrentUser = getCurrentUser;
window.getCurrentUserEmail = getCurrentUserEmail;
window.applyCoupon = applyCoupon;
window.renderReviews = renderReviews;
window.demohash = demoHash;

// attach small helpers for category list and product view pages
window.populateCategories = populateCategories;
window.attachProductEvents = attachProductEvents;

// -------------- Theme (dark/light) --------------
function initThemeToggle(){
  const btn = document.getElementById('themeToggle');
  if(btn) btn.addEventListener('click', toggleTheme);
  const user = getCurrentUser();
  const theme = (user && user.settings && user.settings.theme) || localStorage.getItem('se_theme') || 'light';
  applyTheme(theme);
}
function toggleTheme(){
  const user = getCurrentUser();
  let theme;
  if(document.body.classList.contains('dark')) theme = 'light'; else theme = 'dark';
  applyTheme(theme);
  if(user){ const users = getAllUsers(); users[user.email].settings = users[user.email].settings || {}; users[user.email].settings.theme = theme; saveAllUsers(users); }
  else localStorage.setItem('se_theme', theme);
}
function applyTheme(theme){
  if(theme === 'dark') document.body.classList.add('dark'); else document.body.classList.remove('dark');
}

// -------------- Auto logout (simple) --------------
let idleTimer = null;
function setupAutoLogout(){
  const user = getCurrentUser();
  if(!user) return;
  const mins = (user.settings && user.settings.autoLogoutMinutes) || 0;
  if(mins <= 0) return;
  const ms = mins * 60 * 1000;
  function reset(){ if(idleTimer) clearTimeout(idleTimer); idleTimer = setTimeout(()=>{ logoutUser(); location.href='login.html'; }, ms); }
  ['mousemove','keydown','click','touchstart'].forEach(evt => window.addEventListener(evt, reset));
  reset();
}

// Init minimal on load
(function(){
  // try to set navbar placeholder if exists
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    try{ if(document.getElementById('navbar-placeholder')) buildNavbar(); }catch(e){}
  } else {
    document.addEventListener('DOMContentLoaded', ()=>{ if(document.getElementById('navbar-placeholder')) buildNavbar(); });
  }
})();
