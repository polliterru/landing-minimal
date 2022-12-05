const nav = document.getElementById('nav')
const navBtn = document.getElementById('nav-btn')
const navBtnImg = document.getElementById('nav-btn-img')

navBtn.addEventListener('click', () => {
  nav.classList.toggle('open')
  document.documentElement.classList.toggle('no-scroll')
  document.body.classList.toggle('no-scroll')

  if (nav.classList.contains('open')) {
    navBtnImg.src = "./img/nav-icons/close.svg"
  } else {
    navBtnImg.src = "./img/nav-icons/open.svg"
  }
})

AOS.init();


const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
  const selector = document.querySelector(link.dataset.scroll)

  link.addEventListener('click', (e) => {
    e.preventDefault()
    selector.scrollIntoView({behavior: "smooth"})
  })
})