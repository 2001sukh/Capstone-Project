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


var currentImageIndex = 0;
var images = document.querySelectorAll('.story-image-container .story-image');
var totalImages = images.length;

function showImage(index) {
  // Hide all images
  images.forEach(img => {
    img.style.display = 'none';
    img.style.opacity = '0';
  });
  
  // Show the image at the given index
  images[index].style.display = 'block';
  setTimeout(() => { images[index].style.opacity = '1'; }, 0); 
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
}

// Initialize the first image
showImage(currentImageIndex);
