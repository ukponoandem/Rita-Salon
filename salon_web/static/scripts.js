document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const subHeader = document.querySelector('.sub-header');
    const navLinks = document.getElementById("nav-links-list");

    // Toggle navigation links and sub-header on menu icon click
    menuIcon.addEventListener("click", function () {
        subHeader.classList.toggle("show"); // Toggle the 'show' class for sub-header
        navLinks.classList.toggle("show"); // Toggle the 'show' class for nav-links
    });
});

let currentCarouselSlide = 0;

function showCarouselSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) currentCarouselSlide = 0;
    if (index < 0) currentCarouselSlide = slides.length - 1;
    
    const offset = -currentCarouselSlide * 100; // Calculate the offset in percentage
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentCarouselSlide += direction;
    showCarouselSlide(currentCarouselSlide);
}

// Initial display for carousel
showCarouselSlide(currentCarouselSlide);



// Work images slider
let currentWorkSlide = 0;

function showWorkSlide(index) {
    const slides = document.querySelectorAll('.work-images img');
    
    // Ensure the index stays within bounds
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    const offset = -index * 100; // Calculate the offset in percentage
    document.querySelector('.work-images').style.transform = `translateX(${offset}%)`;
    
    // Update the global currentWorkSlide variable
    currentWorkSlide = index;
}

function move(direction) {
    // Adjust currentWorkSlide by direction (+1 or -1)
    currentWorkSlide += direction;
    showWorkSlide(currentWorkSlide);
}

// Initial display for work images
showWorkSlide(currentWorkSlide);


const currentyear = new Date().getFullYear()

document.getElementById('current-year').textContent=currentyear


