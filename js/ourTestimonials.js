import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const swiper = new Swiper(".swiper__testimonials", {
  slidesPerView: 3,
  allowTouchMove: false,
  loop: true,
  centeredSlides: true,
  //   centeredSlidesBounds: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
