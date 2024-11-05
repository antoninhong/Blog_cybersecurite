// NAV BAR
const toggles = document.querySelector('.toggle')
const toggleicon = document.querySelector('.toggle i')
const menu = document.querySelector('.menu')

toggles.onclick = function () {
    menu.classList.toggle('open')
    const isOpen = menu.classList.contains('open')

    toggleicon.className = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
}
