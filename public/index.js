var menuButton = document.getElementById("menu-button");
var dropdownMenu = document.getElementById("dropdown-menu");

menuButton.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
  } else {
    dropdownMenu.classList.add("show");
  }
});

function enableDarkMode() {
  document.documentElement.classList.add("dark-mode");
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark-mode");
}

const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// Function to add classes to an element when it reaches the center of the screen
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
          element.classList.add(...classesToAdd); element.classList.remove("invisible");
          setTimeout(() => {
           element.classList.remove(...classesToAdd);
            
            console.log("Element is centered");
          }, 4000);
          observer.disconnect();
        }
      }
    });
  });

  // Start observing the element
  observer.observe(element);
}

const targetElement1 = document.querySelector("#card1");
const targetElement2 = document.querySelector("#card2");
const targetElement3 = document.querySelector("#card3");

const classesToAdd1 = ["animate-fu"];
const classesToAdd2 = ["animate-fu"];
const classesToAdd3 = ["animate-fu"];

addClassesWhenCentered(targetElement1, classesToAdd1);
addClassesWhenCentered(targetElement2, classesToAdd2);
addClassesWhenCentered(targetElement3, classesToAdd3);
