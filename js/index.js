const burgerBtn = document.querySelector('.burger__icon');
const burgerMenu = document.querySelector('.burger__menu');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('_active');
    burgerBtn.classList.toggle('_active');
})