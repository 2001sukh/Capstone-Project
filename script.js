function toggleMobileMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');

    var toggle = document.getElementById('mobile-menu-toggle');
    toggle.classList.toggle('active');

    var bar1 = toggle.children[0];
    var bar2 = toggle.children[1];
    var bar3 = toggle.children[2];

    if (toggle.classList.contains('active')) {
        bar1.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bar1.style.transform = '';
        bar2.style.opacity = '';
        bar3.style.transform = '';
    }
}
    
document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);

let slideIndex = 0;
let autoSlideInterval;

function moveSlide(step) {
  const slides = document.getElementsByClassName("carousel-slide");
  if (step > 0) {
    slideIndex = (slideIndex + 1) % slides.length;
  } else {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  }
  updateCarousel();
}

function updateCarousel() {
  const slides = document.getElementsByClassName("carousel-slide");
  const carousel = document.querySelector(".carousel-slides");
  const shift = -slideIndex * 100; 
  carousel.style.transform = `translateX(${shift}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(function() { moveSlide(1); }, 3000); 
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

updateCarousel();
startAutoSlide();



function openModal(src, alt) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = src;
  captionText.innerHTML = alt;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Optional: Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      closeModal();
  }
}

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, idx) => {
    testimonial.style.display = 'none';
    if(idx === index) {
      testimonial.style.display = 'block';
    }
  });
}

function changeTestimonial(n) {
  currentTestimonial += n;
  if (currentTestimonial > testimonials.length - 1) currentTestimonial = 0;
  if (currentTestimonial < 0) currentTestimonial = testimonials.length - 1;
  showTestimonial(currentTestimonial);
}

// Initially display the first testimonial
showTestimonial(currentTestimonial);
