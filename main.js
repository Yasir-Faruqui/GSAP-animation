// 'use strict'
const navButton = document.querySelector(".nav-btn");
const navOpen = document.querySelector(".nav-open");


const tl = new TimelineLite({
  paused: true,
  reversed: true
});
tl.to('.cover', 1, {
    width: "60%",
    ease: Power2.easeOut
  })
  .to('nav', 1, {
    height: "100%",
    ease: Power2.easeOut
  }, '-=1')
  .fromTo('.nav-open', 0.3, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
  }, {
    opacity: 1,
    x: 0,
    onComplete: function() {
      navOpen.style.pointerEvents = 'auto';
    }
  })

navButton.addEventListener('click', (e) => {

  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(tl);
})

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

let about = document.querySelector(".aboutUs");
let store = document.querySelector(".store");
let contact = document.querySelector(".contactUs")

about.onclick = function() {
  document.querySelector('.about').style.display = 'block';
  document.querySelector('.about').style.opacity = 1;
  document.querySelector('.clothing').style.display = 'none';
  document.querySelector('.nav-images').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';

}

store.onclick = function() {
  document.querySelector('.about').style.display = 'none';
  document.querySelector('.clothing').style.display = 'flex';
  document.querySelector('.nav-images').style.display = 'flex';
  document.querySelector('.contact').style.display = 'none';
}

contact.onclick = function() {
  document.querySelector('.contact').style.display = 'block';
  document.querySelector('.about').style.display = 'none';
  document.querySelector('.contact').style.opacity = 1;
  document.querySelector('.clothing').style.display = 'none';
  document.querySelector('.nav-images').style.display = 'none';
}
