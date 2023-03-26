const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-button');
const registerLink = document.querySelector('.register-button');
const btnLoginPopup = document.querySelector('.btnLoginPopup');
const btnLoginClose = document.querySelector('.close');


registerLink.addEventListener('click', ()=>{
	wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
	wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', ()=>{
	wrapper.classList.add('btnLoginPopup');
});

btnLoginClose.addEventListener('click', ()=>{
	wrapper.classList.remove('btnLoginPopup');
});