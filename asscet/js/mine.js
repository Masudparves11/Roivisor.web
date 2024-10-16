



const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})


AOS.init();



  window.addEventListener('scroll',function (){
    let navbar = document.querySelector('nav');
    if(this.window.pageYOffset > 0){
        navbar.classList.add('sticky_nav');
    }
    else{
        navbar.classList.remove('sticky_nav');
    }
});



const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});



var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 4,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    breakpoints: {


      1200: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      
      991: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      240: {
        slidesPerView: 1,
      },
      
    },
});



var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 40,
  slidesPerView: 4,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    breakpoints: {


      1200: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      
      991: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      240: {
        slidesPerView: 1,
      },
      
    },
});



var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})