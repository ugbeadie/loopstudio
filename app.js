const burger = document.getElementsByClassName('burger')[0];
const navUl = document.getElementsByClassName('nav-items')[0];
const navMenu = document.querySelector('nav')
const close = document.querySelector('close')

burger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    navMenu.classList.toggle('active')
    burger.classList.toggle('scrolling-active');
    document.body.classList.toggle('hidden')
     document.body.classList.toggle("black");
    //  document.body.classList.toggle("cross");
})
window.addEventListener('scroll',  function() {
    if (window.scrollY > 600) {
        navMenu.style.position = 'fixed';
        navMenu.style.backgroundColor = 'black'; 
    }else{
        navMenu.style.position = 'absolute';
        navMenu.style.backgroundColor = "var(--nav-bg)";
    }
});
// function hideUl() {
//     document.body.classList.toggle("cross");
//     navMenu.classList.toggle('active');
//     document.body.classList.toggle("black");
// }   

function hideUl() {
    // document.body.classList.toggle('close');
    // navMenu.classList.toggle('scrolling-active')
    document.body.classList.toggle('hidden');
    navUl.classList.toggle('active');
    document.body.classList.toggle("black");
    
}

// window.addEventListener ('scroll', function() {
//     let navBar = document.querySelector('nav');
//     let windowPosition =  window.scrollY > 600;
//     navBar.classList.toggle('scrolling-active', windowPosition);
// })

// close.addEventListener('click', () => {
//     navUl.classList.toggle('active');
//     navMenu.classList.toggle('navmenu')
//     close.classList.toggle('active');

//     // document.body.classList.toggle('hidden')
// })