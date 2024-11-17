const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#passwordField');

togglePassword.addEventListener('click', function () {
    // Toggle tipe input
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Toggle ikon
    this.classList.toggle('bx-hide');
    this.classList.toggle('bx-show');
});