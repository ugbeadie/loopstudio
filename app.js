const burger = document.getElementsByClassName('burger')[0];
const navUl = document.getElementsByClassName('nav-items')[0];
const navMenu = document.querySelector('nav')
const close = document.querySelector('close')


burger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    navMenu.classList.toggle('active')
    burger.classList.toggle('active');
    document.body.classList.toggle('hidden')
    
    // document.body.classList.toggle('hidden')
})

// window.addEventListener ('scroll', function() {
//     let navBar = document.querySelector('nav');
//     let windowPosition =  window.scrollY > 400;
//     navBar.classList.toggle('scrolling-active', windowPosition);
// })

// close.addEventListener('click', () => {
//     navUl.classList.toggle('active');
//     navMenu.classList.toggle('navmenu')
//     close.classList.toggle('active');

//     // document.body.classList.toggle('hidden')
// })

