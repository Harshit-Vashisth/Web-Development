/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')

// menu show 
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink=document.querySelectorAll('.nav__link')
const listAction=()=>{
    const navMenu =document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navClose.forEach(n=> n.addEventListener('click',linkAction))


/*=============== ADD BLUR HEADER ===============*/

const blurHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY>=50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')
const scrollActive=()=>{
    const scrollDown=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
            sectionTop=current.offsetTop-58,
            sectionId=current.getAttribute('id'),
            sectionClass=document.querySelector('.nav__menu a[href*='+sectionId+']')
        if(scrollDown>sectionTop&&scrollDown<=sectionTop+sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400
})
sr.reveal(`.home__data, .experience, .skills`)

sr.reveal(`.home__img`,{delay:600})
sr.reveal(`.home__scroll`,{delay:800})
sr.reveal(`.work__card,.services_card`,{interval:100})

sr.reveal(`.about__content`,{origin:'right'})
sr.reveal(`.about__img`,{origin:'left'})

document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.animated-list li');

    function checkVisibility() {
        var triggerBottom = window.innerHeight * 0.8;

        listItems.forEach(function(item) {
            var itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run it initially in case elements are already in view
});
document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.animated-list1 li');

    function checkVisibility() {
        var triggerBottom = window.innerHeight * 0.8;

        listItems.forEach(function(item) {
            var itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run it initially in case elements are already in view
});

