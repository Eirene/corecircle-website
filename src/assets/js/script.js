const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  initialSlide: 2,
  grabCursor: true,
  effect: "cards",
  cardsEffect: {
    rotate: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

swiper.activeIndex = 1;
