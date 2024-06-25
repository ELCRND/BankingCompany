import Swiper from "../node_modules/swiper/swiper-bundle.mjs";

const swiper = new Swiper(".swiper__testimonials", {
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
