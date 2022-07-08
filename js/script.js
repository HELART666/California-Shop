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
const heightElem = document.querySelectorAll('.items__wrapper');
const buttonValue = document.querySelectorAll('.else__fastsearch_button');
const searchInput = document.querySelector('.search__input');
const list = document.querySelectorAll('.list__items');
const content = document.querySelectorAll('.content');
const availableScreenWidth = window.screen.availWidth;

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

function addNum(el) {
    searchInput.value = el.textContent;
}
window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 975px)").matches) {
        for(let i = 0; i < content.length; i++){
            content[i].style.maxHeight = null;
           }
           let coll = document.querySelectorAll(".collapsible");
        for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
}
    } else {
        for(let i = 0; i < content.length; i++){
            content[i].style.maxHeight = "147" + "px";
           }
    }
});





buttonValue.forEach(div => { 
      div.addEventListener('click', () => addNum(div));
});