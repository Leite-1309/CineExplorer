const botaoLogin = document.getElementById('button_login');
const modalLogin = document.querySelector('.modal__login');
const botaoFechar = document.querySelector('.modal__close');

botaoLogin.addEventListener('click', () => {
    modalLogin.showModal();
});

botaoFechar.addEventListener('click', () => {
    modalLogin.close();
});

