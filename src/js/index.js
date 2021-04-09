const menu = document.getElementById(`mobile-menu`); 
const menuLinks = document.querySelector(`.navBar__menu`); 
const navLogo = document.getElementById(`navBar-Logo`); 
const body = document.querySelector(`body`); 
         /* Display Mobile Menu */

const mobileMenu = () => {
    menu.classList.toggle(`is-active`); 
    menuLinks.classList.toggle(`active`); 
    body.classList.toggle(`active`); 
}

menu.addEventListener(`click`, mobileMenu); 
