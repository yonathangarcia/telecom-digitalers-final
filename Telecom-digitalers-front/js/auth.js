window.onload = function () {
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    const isAuthenticated = document.cookie.split(';').some((item) => item.trim().startsWith('tokenyonathangarcia='));

    if (isAuthenticated) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
};