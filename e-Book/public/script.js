const addEventToElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const header = document.querySelector(".header");
const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventToElem(window, "scroll", activeHeader);

const bookContainer = document.querySelector('.books-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (leftArrow && rightArrow && bookContainer) {
  leftArrow.addEventListener('click', function() {
    console.log("Left arrow clicked");
    bookContainer.scrollLeft -= 220;
  });

  rightArrow.addEventListener('click', function() {
    console.log("Right arrow clicked");
    bookContainer.scrollLeft += 220;
  });
}
