const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: true,
  grabCursor: true,
  effect: "cards",
  initialSlide: 2,
  spaceBetween: 100,
  updateOnWindowResize: true,
  cardsEffect: {
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    320: {
      width: 275,
      height: 275,
    },
    768: {
      width: 400,
      height: 400,
    },
    1024: {
      width: 380,
      height: 380,
    },
    1280: {
      width: 420,
      height: 420,
    }
  }
});


// FAQ Section
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
