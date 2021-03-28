import menuTemplate from './templates/menu.hbs'
import menuData from './menu.json'

const menuNode = document.querySelector('ul.menu')
const markup = menuData.map(item => menuTemplate(item))
  .reduce((acc, value) => acc + value, '')
const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme' }
const checkboxNode = document.querySelector('input.theme-switch__toggle')
const bodyNode = document.querySelector('body')

function switcher() {
  if (bodyNode.classList.contains(Theme.LIGHT)) {
    bodyNode.classList.replace(Theme.LIGHT, Theme.DARK)
  } else {
    bodyNode.classList.replace(Theme.DARK, Theme.LIGHT)
  }}

menuNode.insertAdjacentHTML('beforeend', markup)
checkboxNode.addEventListener("change", switcher)