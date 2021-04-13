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
    duration: 1.6, 
    opacity: 0, 
    y: -150, 
    stagger: 0.9
}); 

gsap.from(`.animate-services`, {
    scrollTrigger: `.animate-services`,
    duration: 0.5, 
    opacity: 0, 
    y: -150, 
    stagger: 0.6
}); 

gsap.from(`.animate-img`, {
    scrollTrigger: `.animate-img`,
    duration: 1.2, 
    opacity: 0, 
    x: -200, 
}); 

gsap.from(`.animate-membership`,{
   scrollTrigger: `.animate-membership`, 
   duration: 1, 
   opacity: 0, 
   y: -150, 
   stagger: 0.3, 
   delay: 0.5
}); 
gsap.from(`.animate-card`,{
    scrollTrigger: `.animate-card`, 
    duration: 1, 
    opacity: 0, 
    y: -150, 
    stagger: 0.1, 
    delay: 0.2
 }); 
 gsap.from(`.animate-team`, {
     scrollTrigger: `.animate-team`, 
     duration: 1.5, 
     opacity: 0, 
     y: -150,
     stagger: 0.3, 
     delay: 0.2
 }); 
 gsap.from(`.animate-email`, {
    scrollTrigger: `.animate-email`, 
    duration: 1, 
    opacity: 0, 
    y: -150,
    stagger: 0.3, 
    delay: 0.2
}); 