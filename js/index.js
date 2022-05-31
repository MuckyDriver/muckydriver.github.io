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