// Abre e fecha o menu quando clicca
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Quando clicar em algum link do menu, fechá-lo
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Mudar o header da página quando der scroll

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

// Testimonial carrossel slider swiperjs
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// ScrollReveal: Mostra elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// Botão voltar para o topo

function backToTop() {
  const backToTopButtom = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButtom.classList.add('show')
  } else {
    backToTopButtom.classList.remove('show')
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
