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

/* Slideshow */
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

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
} 

function closeSlideshow() {
  slideshowcontainer.style.display = 'none'
}

function openSlideshow() {
  slideshowcontainer.style.display = 'block'
}

/* Commands */
function scrollAdapt(anchor) {
  if (anchor) {window.scrollTo(0, anchor.offsetTop)}
}

if (window.location.search == '?slideshow') {
  openSlideshow()
} else if (window.location.search == '?gallery') {
  scrollAdapt(document.getElementById('gallery'))
} else if (window.location.search == '?features') {
  scrollAdapt(document.getElementById('features'))
} else if (window.location.search == '?credits') {
  scrollAdapt(document.getElementById('credits'))
}