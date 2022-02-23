const contentList = document.getElementById('contentList')

let lastScroll = 0
window.onscroll = function() {
    let thisScroll = window.scrollY
    
    if (thisScroll < lastScroll) {
        contentList.classList.add('scrollup')
    } else {
        contentList.classList.remove('scrollup')
    }

    lastScroll = thisScroll
}