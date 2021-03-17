var element = document.getElementById("BackToTheTop")

element.onclick = function() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}