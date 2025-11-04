(() => {
  // Utility: Simple demo hash (not secure!)
  function hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    return h.toString();
  }

  // Get existing users or initialize empty
  let users = JSON.parse(localStorage.getItem('users') || '{}');

  document.getElementById('signupBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();
    const msg = document.getElementById('msg');

    if (!name || !email || !password) {
      msg.textContent = 'All fields are required!';
      return;
    }

    if (users[email]) {
      msg.textContent = 'User already exists. Please log in.';
      return;
    }

    users[email] = {
      name,
      email,
      password: hash(password),
      cart: {},
      orders: [],
      wishlist: []
    };

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', email);

    msg.classList.replace('text-danger', 'text-success');
    msg.textContent = 'Signup successful! Redirecting...';

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });

  document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();
    const msg = document.getElementById('msg');

    if (!email || !password) {
      msg.textContent = 'Enter email and password!';
      return;
    }

    const user = users[email];
    if (!user) {
      msg.textContent = 'No account found. Please sign up first.';
      return;
    }

    if (user.password !== hash(password)) {
      msg.textContent = 'Incorrect password.';
      return;
    }

    localStorage.setItem('currentUser', email);

    msg.classList.replace('text-danger', 'text-success');
    msg.textContent = 'Login successful! Redirecting...';

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });
})();
