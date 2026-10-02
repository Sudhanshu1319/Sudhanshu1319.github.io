import './style.css'

const header = document.querySelector('.site-header')
const links = [...document.querySelectorAll('.nav-links a')]
const sections = links.map(link => document.querySelector(link.getAttribute('href')))

function onScroll() {
  // Header shadow once the page scrolls
  header.classList.toggle('scrolled', window.scrollY > 8)

  // Highlight the nav link for the section that has reached the upper part of the screen
  const line = window.innerHeight * 0.35
  let current = null
  sections.forEach((section, i) => {
    if (section && section.getBoundingClientRect().top <= line) current = links[i]
  })
  links.forEach(link => link.classList.toggle('active', link === current))
}

window.addEventListener('scroll', onScroll, { passive: true })
window.addEventListener('resize', onScroll)
window.addEventListener('load', onScroll)
onScroll()
