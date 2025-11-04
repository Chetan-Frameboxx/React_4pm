// navbar.js

function updateNavbar() {
  const userNav = document.getElementById('userNav');
  const currentEmail = localStorage.getItem('currentUser');
  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (currentEmail && users[currentEmail]) {
    const user = users[currentEmail];

    userNav.innerHTML = `Hi, ${user.name.split(' ')[0]} 👋 | <span id="logoutBtn" style="cursor:pointer;">Logout</span>`;
    userNav.href = "#"; // disable link navigation

    // Add logout handler
    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'login.html';
    });
  } else {
    userNav.textContent = 'Login';
    userNav.href = 'login.html';
  }
}

// Call when page loads
document.addEventListener('DOMContentLoaded', updateNavbar);
