new Swiper('.swiper-container', {
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 500,
    navigation:{
        nextEl: ('.swiper-button-next'),
        prevEl: ('.swiper-button-prev'),
    },
    pagination:{
        el: ('.swiper-pagination2'),
        clickable: true,
    },
});
const mobileMenuButton = document.querySelectorAll('.menu__mobile');
const modal = document.querySelector('.modal__window__container');
const modalList = document.querySelectorAll('.modal__item');
const modalLink = document.querySelectorAll('.modal__link');
const swiperControls = document.querySelector('.swiper-controls');
console.log(swiperControls);
document.querySelector('.menu__mobile').addEventListener('click', function(){
    modal.classList.remove("hidden");
    swiperControls.classList.add("hidden");
    let i = 0;
    let id = setInterval(() => {   
        modalList[i].classList.remove("hidden__list"); 
        modalLink[i].classList.add("open"); 
        i++; 
        if(i === modalList.length){
            clearInterval(id);
        }
    }, 200);
    i = 0;
});




document.querySelector('.menu__close').addEventListener('click', function(){
    modal.classList.add("hidden");
    swiperControls.classList.remove("hidden");
    let i = 3;
    let id = setInterval(() => {   
        modalList[i].classList.add("hidden__list"); 
        modalLink[i].classList.remove("open"); 
        i--; 
        if(i == 0){
            modalList[i].classList.add("hidden__list"); 
            modalLink[i].classList.remove("open"); 
            clearInterval(id);
        }
    }, 200);
    i = 3;
});