// Content List Scroll Up Feature
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

// Content List Mobile Version
const cl_mobile = document.getElementById('cl')
const cl_mobile_btn = document.getElementById('cl_btn')
const cl_close = document.getElementById('cl_close')

let cl_open = false 
cl_mobile_btn.onclick = function() {
    if (cl_open == false) { cl_mobile.classList.add('open') }
    cl_open = true
}

cl_close.onclick = function() {
    if (cl_open == true) { cl_mobile.classList.remove('open') }
    cl_open = false
}