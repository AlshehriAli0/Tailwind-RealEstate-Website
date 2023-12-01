const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const metaTag = document.querySelector(
  'meta[name="apple-mobile-web-app-status-bar-style"]'
);
const menuButtonImage = document.querySelector("#menu-button img");
const iconImage = document.querySelector("#leftIcon");
const footerImage = document.querySelector("#footerImage");
const animateCard = document.querySelector("#cards");
const banner = document.querySelector("#exploreLocations");
const animateCardClass = ["animate-fu"];
const bannerClass = ["animate-fr"];
let width = window.innerWidth;

menuButton.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
  } else {
    dropdownMenu.classList.add("show");
  }
});

function enableDarkMode() {
  document.documentElement.classList.add("dark-mode");
  document.documentElement.classList.remove("disable-animations");
  document.querySelector("#lightModeButton").classList.remove("hidden");
  document.querySelector("#darkModeButton").classList.add("hidden");
  menuButtonImage.src = "./public/images/menu(white).png";
  iconImage.src = "./public/images/buy-home(white).png";
  footerImage.src = "./public/images/buy-home(white).png";
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark-mode");
  document.documentElement.classList.add("disable-animations");
  document.querySelector("#lightModeButton").classList.add("hidden");
  document.querySelector("#darkModeButton").classList.remove("hidden");
  menuButtonImage.src = "./public/images/menu.png";
  iconImage.src = "./public/images/buy-home.png";
  footerImage.src = "./public/images/buy-home.png";
}

const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  enableDarkMode();
  metaTag.setAttribute("content", "black-translucent");
});

const lightModeButton = document.getElementById("lightModeButton");
lightModeButton.addEventListener("click", () => {
  disableDarkMode();
  metaTag.setAttribute("content", "default");
});

function addClassesWhenCentered(element, classesToAdd) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetRect = target.getBoundingClientRect();
        const targetPosition = {
          top: window.scrollY + targetRect.top,
          left: window.scrollX + targetRect.left,
          right: window.scrollX + targetRect.right,
          bottom: window.scrollY + targetRect.bottom,
        };
        const windowPosition = {
          top: window.scrollY,
          left: window.scrollX,
          right: window.scrollX + window.innerWidth,
          bottom: window.scrollY + window.innerHeight,
        };
        if (
          targetPosition.bottom >= windowPosition.top &&
          targetPosition.top <= windowPosition.bottom &&
          targetPosition.right >= windowPosition.left &&
          targetPosition.left <= windowPosition.right
        ) {
          element.classList.add(...classesToAdd);
          element.classList.remove("invisible");
          setTimeout(() => {
            element.classList.remove(...classesToAdd);
          }, 4000);
          observer.disconnect();
        }
      }
    });
  });

  observer.observe(element);
}

addClassesWhenCentered(banner, bannerClass);
addClassesWhenCentered(animateCard, animateCardClass);

if (width <= 1024) {
  document.querySelector("#swiper").classList.add("swiper");
  document.querySelector("#swiper").classList.add("mySwiper");
  document.querySelector("#wrapper").classList.add("swiper-wrapper");
  document.querySelector("#wrapper").classList.remove("p-8");
  document.querySelector("#wrapper").classList.remove("gap-5");
  document.querySelector("#wrapper").classList.remove("px-16");
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    slide.classList.add("bg-gray-100");
  });
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    slide.classList.add("bg-opacity-40");
  });
} else {
  document.querySelector("#swiper").classList.remove("swiper");
  document.querySelector("#swiper").classList.remove("mySwiper");
  document.querySelector("#wrapper").classList.remove("swiper-wrapper");
  document.querySelector("#wrapper").classList.add("p-8");
  document.querySelector("#wrapper").classList.add("gap-5");
  document.querySelector("#wrapper").classList.add("px-16");

  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    slide.classList.add("shadow-xl");
  });
}

function scrollToTop() {
  window.scroll(0, 0);
}

document.addEventListener("DOMContentLoaded", scrollToTop);

document.addEventListener("DOMContentLoaded", function () {
  let cardsContainer = document.querySelector(".cards-container");
  let overlay = document.querySelector("#overlay");
  let isExpanded = false;

  cardsContainer.addEventListener("click", function () {
    if (isExpanded) {
      cardsContainer.classList.remove("expanded");
      overlay.classList.remove("invisible");
    } else {
      cardsContainer.classList.add("expanded");
      overlay.classList.add("invisible");
    }

    isExpanded = !isExpanded;
  });
});
