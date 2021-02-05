// Tariffs slider
$("#comment").slick({
  arrow: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 1000,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3000,
});

// Bootom slider
$("#slider").slick({
  arrow: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 1000,
});

$(".howGet_box__body-right").slick({
  arrow: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 4000,
      settings: "unslick",
    },
    {
      breakpoint: 700,
      settings: {
        arrow: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
      },
    },
  ],
});

$(".sunnyBookGift_bottom__box").slick({
  arrow: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 4000,
      settings: "unslick",
    },
    {
      breakpoint: 700,
      settings: {
        arrow: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
      },
    },
  ],
});

// card open
const card = document.querySelectorAll(".cardT");
const cardBottom = document.querySelectorAll("#card_bottom");
const button = document.querySelectorAll(".card_button");
// const cardHeight = [];

// card.forEach((item) => {
//   cardHeight.push(item.clientHeight + 2);
// });

const openTariff = (i) => {
  if (button[i].className.split(" ")[1] == "open") {
    cardBottom[i].classList.remove("open");
    button[i].classList.remove("open");
    return false;
  } else {
    cardBottom.forEach((item, i) => {
      item.classList.remove("open");
      button[i].classList.remove("open");
    });
    cardBottom[i].classList.add("open");
  }
  button[i].classList.add("open");
};

button.forEach((item, i) => {
  item.addEventListener("click", () => {
    openTariff(i);
  });
});

// profit open
const profitButton = document.querySelectorAll(".profit_button");
const profitOpenText = document.querySelectorAll(
  ".profit_box__items-description--open"
);

const openProfit = (i) => {
  if (profitButton[i].className.split(" ")[3] == "open") {
    profitButton[i].classList.remove("open");
    profitOpenText[i].classList.remove("open");
    return false;
  } else {
    profitOpenText.forEach((item, i) => {
      item.classList.remove("open");
      profitButton[i].classList.remove("open");
    });
    profitOpenText[i].classList.add("open");
  }
  profitButton[i].classList.add("open");
};

profitButton.forEach((item, i) => {
  item.addEventListener("click", () => {
    openProfit(i);
  });
});
// menu
// const mBut = document.querySelector(".mobButton");
// const menu = document.querySelector(".mobMenu");
// const mobButton = document.querySelectorAll(".mobItems");

// mBut.addEventListener("click", () => {
//   menu.classList.toggle("open");
//   mBut.classList.toggle("open");
// });

// mobButton.forEach((item, i) => {
//   item.addEventListener("click", () => {
//     menu.classList.remove("open");
//     mBut.classList.remove("open");
//   });
// });

const wrap = document.querySelector(".wrapper");

window.addEventListener("scroll", () => {
  if (pageYOffset - 250 > document.documentElement.clientHeight) {
    wrap.classList.add("scroll");
  } else {
    wrap.classList.remove("scroll");
  }
});

window.addEventListener("resize", () => {
  $(".howGet_box__body-right").slick({
    arrow: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 700,
        settings: {
          arrow: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 1000,
        },
      },
    ],
  });

  $(".sunnyBookGift_bottom__box").slick({
    arrow: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 700,
        settings: {
          arrow: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 1000,
        },
      },
    ],
  });
});

document.querySelector("#copy").addEventListener("click", () => {
  let copyLink = document.querySelector("#copyText");
  let field = document.createElement("input");
  field.value = "0x7aad68638c764a140f482841e32f86ce047fcaed";

  copyLink.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();

  let modal = document.querySelector(".modal");
  modal.style.zIndex = 1;
  modal.style.opacity = 1;

  setTimeout(() => {
    modal.style.opacity = 0;
  }, 3000);

  setTimeout(() => {
    modal.style.zIndex = -1;
  }, 4000);
});

document.querySelector(".mobButton").addEventListener("click", () => {
  document.querySelector(".mobalMenu").style.left = 0;
  document.querySelector("body").style.overflow = "hidden";
});

document.querySelector(".cross").addEventListener("click", () => {
  document.querySelector(".mobalMenu").style.left = "560px";
  document.querySelector("body").style.overflow = "auto";
});

let link = document.querySelectorAll(".mobalMenu a");

link.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".mobalMenu").style.left = "560px";
    document.querySelector("body").style.overflow = "auto";
  });
});

// if (window.innerWidth <= 560) {
//   $(".howGet_box__body-right").slick({
//     arrow: false,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     speed: 1000,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 420,
//         settings: "unslick",
//       },
//     ],
//   });
// }
