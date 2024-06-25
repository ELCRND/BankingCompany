import Swiper from "../node_modules/swiper/swiper-bundle.mjs";
const swiper = new Swiper(".swiper-transactions", {
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
