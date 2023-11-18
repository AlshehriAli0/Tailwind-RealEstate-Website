const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const metaTag = document.querySelector(
  'meta[name="apple-mobile-web-app-status-bar-style"]'
);
const menuButtonImage = document.querySelector("#menu-button img");
const iconImage = document.querySelector("#leftIcon");
const animateCard = document.querySelector("#cards");
const classesToAdd = ["animate-fu"];



menuButton.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
  } else {
    dropdownMenu.classList.add("show");
  }
});

function enableDarkMode() {
  document.documentElement.classList.add("dark-mode");
  document.querySelector("#lightModeButton").classList.remove("hidden");
  document.querySelector("#darkModeButton").classList.add("hidden");
  menuButtonImage.src = "./public/images/menu(white).png";
  iconImage.src = "./public/images/buy-home(white).png";
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark-mode");
  document.querySelector("#lightModeButton").classList.add("hidden");
  document.querySelector("#darkModeButton").classList.remove("hidden");
  menuButtonImage.src = "./public/images/menu.png";
  iconImage.src = "./public/images/buy-home.png";
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
          element.classList.add(...classesToAdd);;
          element.classList.remove("invisible");
          setTimeout(() => {
            element.classList.remove(...classesToAdd);

            console.log("Element is centered");
          }, 4000);
          observer.disconnect();
        }
      }
    });
  });

  observer.observe(element);
}


addClassesWhenCentered(animateCard, classesToAdd);
