// JavaScript to control the sliding functionality
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to show the current testimonial based on index
function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    
    // Show the current testimonial
    testimonials[index].style.display = 'block';
}

// Event listener for next button
nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
});

// Event listener for previous button
prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentIndex);
});

// Initially show the first testimonial
showTestimonial(currentIndex);

// Auto-slide testimonials every 5 seconds
setInterval(function() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
}, 5000);
// /////////////////////////////////

// Toggle the dropdown menu visibility
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

// Close the dropdown menu when clicking the cancel icon
function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('show');
}
// ______________________________________________________________

