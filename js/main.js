'use strict';
const sticySection = [...document.querySelectorAll('.sticky_wrap')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < sticySection.length; i++){
    transform(sticySection[i])
  }
});

function transform(section) {

  const offsetTop = section.parentElement.offsetTop;

  const scrollSection = section.querySelector('.horizontal_scroll');

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage = percentage < 0 ? 0:
  percentage > 400 ? 400:
  percentage;

  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}