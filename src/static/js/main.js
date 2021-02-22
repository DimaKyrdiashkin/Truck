// Tariffs slider
$("#comment").slick({
  arrow: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 400,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3000,
});

// Bootom slider
$("#slider").slick({
  arrow: false,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  cssEase: "linear",
  pauseOnHover: false,
  pauseOnFocus: false,
  swipeToSlide: false,
});

let mobButton = document.querySelector(".mobButton");
let mobalMenu = document.querySelector(".mobalMenu");

mobButton.addEventListener("click", () => {
  mobalMenu.classList.add("open");
});

mobalMenu.addEventListener("click", () => {
  mobalMenu.classList.remove("open");
});
