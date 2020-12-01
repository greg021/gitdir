const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  const navLinkFade = () => {
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade .3s ease-in-out forwards ${index/6 + .2}s`;
      }
    })
  }

  const toggler = () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('cross');
  }

  burger.addEventListener('click', () => {
    toggler();
    navLinkFade();
  })

  navLinks.forEach(element => {
    element.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggler();
        navLinkFade();
      }
    })
  })
}

const btnAnimations = () => {
  const whoami = document.querySelector('.whoami');

  whoami.addEventListener('mousedown', () => {
    whoami.style.transform = 'translate(3px, 3px)';
    whoami.style.boxShadow = 'none';
  })

  whoami.addEventListener('mouseup', () => {
    whoami.style.transform = 'none';
    whoami.style.boxShadow = '3px 3px black';
  })
}

const MAIN = () => {
  navSlide();
  btnAnimations();
}

MAIN();