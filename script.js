const navbarLinks = document.querySelectorAll(".nav-menu .nav-link"); // Selects all .nav-link elements within .nav-menu
const menuOpenButton = document.querySelector("#menu-open-button"); // Selects the element with the id 'menu-open-button'
const menuCloseButton = document.querySelector("#menu-close-button"); // Selects the element with the id 'menu-close-button'

menuOpenButton.addEventListener("click", () => { // Adds a click event listener to the 'menuOpenButton'
  document.body.classList.toggle("show-mobile-menu"); // Toggles the 'show-mobile-menu' class on the body to show/hide the mobile menu
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click()); // Simulates a click on the 'menuOpenButton' to close the menu

// Close menu when nav link is clicked
navbarLinks.forEach((link) => { // Loops through each navbar link
  link.addEventListener("click", () => menuOpenButton.click()); // Simulates a click on the 'menuOpenButton' to close the menu when a link is clicked
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", { // Creates a new Swiper instance and targets the element with the class '.slider-wrapper'
  loop: true, // Enables infinite loop of slides, making it scroll continuously
  grabCursor: true, // Changes the cursor to a "grab" icon when hovering over the swiper to indicate it's draggable
  spaceBetween: 25, // Sets the space between slides to 25px

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination", // Selects the element with the class 'swiper-pagination' to render pagination bullets
    clickable: true, // Makes the pagination bullets clickable, so users can jump to specific slides
    dynamicBullets: true, // Enables dynamic bullets, which means the bullets will change size based on the number of slides visible
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next", // Selects the element with the class 'swiper-button-next' to navigate to the next slide
    prevEl: ".swiper-button-prev", // Selects the element with the class 'swiper-button-prev' to navigate to the previous slide
  },

  // Responsive breakpoints
  breakpoints: {
    0: { // When the viewport width is 0px or more (default, for mobile view)
      slidesPerView: 1, // Shows 1 slide per view
    },
    768: { // When the viewport width is 768px or more (tablet and above)
      slidesPerView: 2, // Shows 2 slides per view
    },
    1024: { // When the viewport width is 1024px or more (desktop and above)
      slidesPerView: 3, // Shows 3 slides per view
    },
  }
}); 
