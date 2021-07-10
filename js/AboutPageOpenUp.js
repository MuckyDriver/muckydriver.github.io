function OpenUp(par, btn) {
    const div = document.getElementById(String(par))
    const button = document.getElementById(String(btn))
    const rest = document.getElementsByClassName('list-item')
    const buttons = document.getElementsByClassName('preview-buttons active')

    for (var i = 0; i < rest.length; i++) {
        rest[i].style.display = 'none'
    }
    for (var n = 0; n < buttons.length; n++) {
        buttons[n].className = 'preview-buttons'
    }

    button.classList = 'preview-buttons active'
    div.style.display = 'block'
}