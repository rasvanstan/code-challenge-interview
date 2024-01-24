$(document).ready(function() {
    // Function to toggle classes and active section
    function toggleClassesAndSection(elementIds, classList, sectionId) {
        // Toggle classes active and inactive for the specified elements
        $(elementIds).toggleClass(classList);
        // Toggle class active-section and inactive-section for the specified section
        $(sectionId).toggleClass('active-section inactive-section');
    }

    // Toggle classes and active section on clicking elements with IDs mountain-one and mountain-two
    $('#mountain-one, #mountain-two').click(function() {
        toggleClassesAndSection('#mountain-one, #mountain-two', 'active inactive', '#schedule-section');
        // Toggle classes active-tab-image and inactive-tab-image
        $('#tab-one-image, #tab-two-image').toggleClass('active-tab-image inactive-tab-image');
    });

    // Toggle classes and show collapsed section on clicking accordion button one
    $('#accordion-button-one').click(function() {
        toggleClassesAndSection('#accordion-button-one', 'collapsed', '#flush-collapseOne');
    });

    // Toggle classes and show collapsed section on clicking accordion button two
    $('#accordion-button-two').click(function() {
        toggleClassesAndSection('#accordion-button-two', 'collapsed', '#flush-collapseTwo');
    });
});


// Initialize the slideIndex to 1 and call showSlides function
let slideIndex = 1;
showSlides(slideIndex);

// Function to set the slideIndex to n and call showSlides
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display the correct slide and update active dot
function showSlides(n) {
    let i;
    // Get all elements with class gallery-cell
    const slides = document.getElementsByClassName("gallery-cell");
    // Get all elements with class dot
    const dots = document.getElementsByClassName("dot");

    // If n is greater than the number of slides, set slideIndex to 1
    if (n > slides.length) {slideIndex = 1}    
    // If n is less than 1, set slideIndex to the number of slides
    if (n < 1) {slideIndex = slides.length}

    // Remove the class active from all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Remove the class active from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Add the class active to the current slide and dot
    slides[slideIndex-1].classList.add('active');
    dots[slideIndex-1].classList.add("active");
}
