import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiperTransactions = new Swiper(".swiper-transactions", {
  slidesPerView: "auto",
  grabCursor: true,
  direction: "vertical",
  effect: "creative",
  loop: true,
  mousewheel: true,
  creativeEffect: {
    limitProgress: 2,
    next: {
      translate: [18, 65, 0],
      opacity: 0.55,
    },
    prev: {
      translate: [0, 0, 0],
    },
  },
  autoplay: {
    delay: 2000,
  },
});

const swiperTestimonials = new Swiper(".swiper__testimonials", {
  slidesPerView: "auto",
  loop: true,
  free: true,
  centeredSlides: true,
  spaceBetween: 80,

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    769: {
      allowTouchMove: false,
    },
  },
});
