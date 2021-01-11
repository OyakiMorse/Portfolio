const navMenu = document.getElementById('navMenu'),
  navToggle = document.getElementById('navToggle'),
  navClose = document.getElementById('navClose')

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})
navMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav_list_link')
function linkAction() {
  navMenu.classList.remove('show')
}
navLink.forEach((l) => l.addEventListener('click', linkAction))

/*const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_menu a[href*=' + sectionID + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav_menu a[href*=' + sectionID + ']')
        .classList.remove('active')
    }
  })
}


*/
