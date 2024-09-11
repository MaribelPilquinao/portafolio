function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('hidden');
}

//efecto de las palabras 
document.querySelector('.acerca-deMi').classList.add('visible');
document.querySelector('.title1').classList.add('visible');

//efecto del carrusel y botones
const carousel = document.querySelector('.carousel');
const list = carousel.querySelector('ul');
const items = document.querySelectorAll('.carousel li');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const itemWidth = items[0].offsetWidth;

function moveLeft() {
    if (index < items.length - 1) {
        index++;
    } else {
        index = 0;
    }
    list.style.transform = `translateX(-${itemWidth * index}px)`;
}

function moveRight() {
    if (index > 0) {
        index--;
    } else {
        index = items.length - 1;
    }
    list.style.transform = `translateX(-${itemWidth * index}px)`;
}

nextBtn.addEventListener('click', moveLeft);
prevBtn.addEventListener('click', moveRight);
