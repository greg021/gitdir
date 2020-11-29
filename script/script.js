// whoami

const whoami = document.querySelector('.whoami');
whoami.addEventListener('mousedown', () => {
  whoami.style.transform = 'translate(3px, 3px)';
  whoami.style.boxShadow = 'none';
})

whoami.addEventListener('mouseup', () => {
  whoami.style.transform = 'none';
  whoami.style.boxShadow = '3px 3px black';
})

// nav

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  const toggler = () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('cross');
  }

  burger.addEventListener('click', () => {
    toggler();
  })

  navLinks.forEach(element => {
    element.addEventListener('click', () => {
      toggler();
    })
  })
}
navSlide();