$(document).ready(function() {
    $('#mountain-one, #mountain-two').click(function() {
        $('#mountain-one, #mountain-two').toggleClass('active inactive');
        $('#tab-one-image, #tab-two-image').toggleClass('active-tab-image inactive-tab-image');
        $('#schedule-section').toggleClass('active-section inactive-section');
    });

    $('#accordion-button-one').click(function() {
        $('#accordion-button-one').toggleClass('collapsed');
        $('#flush-collapseOne').toggleClass('show');
    });

    $('#accordion-button-two').click(function() {
        $('#accordion-button-two').toggleClass('collapsed');
        $('#flush-collapseTwo').toggleClass('show');
    });
});



let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("gallery-cell");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].classList.add('active');
    dots[slideIndex-1].classList.add("active");
}



