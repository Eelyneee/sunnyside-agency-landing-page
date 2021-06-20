const navSlide = clickBurger();

function clickBurger(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-content');
    const navContents = document.querySelectorAll('.nav-content');

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');

    } );

}