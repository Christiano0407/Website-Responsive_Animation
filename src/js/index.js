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

          /*     Animate Scroll */
gsap.registerPlugin(ScrollTrigger)

gsap.from(`.animate__hero`, {
    duration: 5.5, 
    opacity: 0, 
    y: -150, 
    stagger: 0.9
})