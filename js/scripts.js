window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%'
    })
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  )
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })
})
$('.modal').on('shown.bs.modal', function (e) {
  $('.slick-content').slick('setPosition')
  $('.wrap-modal-slider').addClass('open')
})

$('.slick-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: false,
  autoplay: false,
  arrows: true,
  nextArrow:
    "<button class='slick-arrow slide-next'><span class='material-symbols-outlined'>arrow_forward_ios </span><button>",
  prevArrow:
    "<button class='slick-arrow slide-prev'><span class='material-symbols-outlined'>arrow_back_ios</span><button>"
})
$('.link-wrap>div').on('mouseenter', function () {})

$('.link-wrap>div').on('click', function () {
  const href = $(this).find('a').text()
  location.href = href
})

let observer = new IntersectionObserver(e => {
  e.forEach(text => {
    if (text.isIntersecting) {
      text.target.style.opacity = 1
      text.target.style.transform = 'translateX(0%)'
    } else {
      text.target.style.opacity = 0
      text.target.style.transform = 'translateX(30%)'
    }
  })
})
const skillBox = $('.col-md-4')
skillBox.each(i => {
  observer.observe(skillBox[i])
})
