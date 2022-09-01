// Anchor Menu System
const Menu = document.getElementById('menu')
const MenuList = Menu.querySelectorAll("a")

for (let i = 0; i < MenuList.length; i++) {
    const button = MenuList[i]

    button.onclick = function() {
        const anchor = document.getElementById(button.innerText.toLowerCase())
        if (anchor) {
            window.scrollTo(0, anchor.offsetTop)
        }
    }
}

// Slideshow 
const slideshowcontainer = document.getElementById('slideshow-container')

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function closeSlideshow() {
    slideshowcontainer.style.display = 'none'
}

function openSlideshow() {
    slideshowcontainer.style.display = 'block'
}