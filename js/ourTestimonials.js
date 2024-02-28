import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const swiper = new Swiper(".swiper__testimonials", {
  slidesPerView: "auto",
  allowTouchMove: false,
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
});
