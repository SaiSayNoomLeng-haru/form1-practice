const btn = document.querySelector('.btn');
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    body.classList.add('jump');
    
});