new Swiper('.cards', {
 
  loop: true,
  spaceBetween:40,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    DynamicBullets:true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3

    },
     1440: {          
    slidesPerView: 4
  }
    

  }

 
});


let imgs = document.querySelectorAll('.slider img');
let navButtonsContainer = document.getElementById('navButtons');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let currentImg = 0;
const interval = 4000; 

function changeSlide(n) {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('active', 'previous');
        navButtonsContainer.children[i].classList.remove('active');
    }

    let previousImg = currentImg;
    currentImg = (n + imgs.length) % imgs.length; 

    imgs[currentImg].classList.add('active');
    imgs[previousImg].classList.add('previous');
    navButtonsContainer.children[currentImg].classList.add('active');
}

function setupNavButtons() {
    for (let i = 0; i < imgs.length; i++) {
        let button = document.createElement('span');
        button.classList.add('line');
        button.setAttribute('onclick', 'changeSlide(' + i + ')');
        navButtonsContainer.appendChild(button);
    }

    navButtonsContainer.children[currentImg].classList.add('active');
}
setupNavButtons();

let timer = setInterval(function () {
    changeSlide(currentImg + 1);
}, interval);

prevButton.addEventListener('click', function () {
    changeSlide(currentImg - 1);
    resetTimer();
});

nextButton.addEventListener('click', function () {
    changeSlide(currentImg + 1);
    resetTimer();
});

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
        changeSlide(currentImg + 1);
    }, interval);
}

