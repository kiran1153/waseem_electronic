let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
setInterval(() => {
    plusSlides(1);
}, 2000); // Change image every 5 seconds



document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Show a success message
    alert('Thank you for your message! We will get back to you shortly.');

    // Optionally, reset the form
    this.reset();
});
