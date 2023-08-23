const burger = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.nav-menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('change')
    navMenu.classList.toggle('change')
})
