const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
