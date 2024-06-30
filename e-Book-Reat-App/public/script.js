
const addEventToElem = function (elem, type, callback) {
  if (NodeList.prototype.isPrototypeOf(elem)) {  // Check if elem is a NodeList
    elem.forEach(e => e.addEventListener(type, callback));
  } else {
    elem.addEventListener(type, callback);
  }
};

// Define header variable using document.querySelector
const header = document.querySelector('.header');

const activeHeader = function () {
  if (header && window.scrollY > 100) {
    header.classList.add("active");
  } else if (header) {
    header.classList.remove("active");
  }
};

// Add scroll event to window with activeHeader as the callback
addEventToElem(window, "scroll", activeHeader);

// Select elements for the book container and arrows
const bookContainer = document.querySelector('.books-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Add click event listeners to arrow buttons if they exist
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
