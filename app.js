const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName('nav-items')[0];
const navMenu = document.querySelector('nav')
// const close = document.querySelector('close')

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
    navMenu.classList.toggle('active')
    document.body.classList.toggle('hidden')
    document.body.classList.toggle("black");
    document.body.classList.toggle("cross");
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

function hideUl() {
    document.body.classList.toggle("cross");
    document.body.classList.toggle('hidden');
    navUl.classList.toggle('active');
    document.body.classList.toggle("black");
    
}
