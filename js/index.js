const burgerBtn = document.querySelector('.header__burger');
const burgerNav = document.querySelector('.header__nav');
const burgerLink = document.querySelectorAll('.header__link');
const heroMove = document.querySelector('.hero__cover');
const heroBlock = document.querySelector('.hero__block');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('header__burger--active');
  burgerNav.classList.toggle('header__nav--active');
  heroMove.classList.toggle('hero__cover--active');
  heroBlock.classList.toggle('hero__block--active')

  burgerLink.forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('header__burger--active');
      burgerNav.classList.remove('header__nav--active');
      heroMove.classList.remove('hero__cover--active');
      heroBlock.classList.remove('hero__block--active')
    })
  })
})