const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  const navLinkFade = () => {
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .25s ease-in-out forwards ${
          index / 6 + 0.15
        }s`;
      }
    });
  };

  const toggler = () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("cross");
  };

  burger.addEventListener("click", () => {
    toggler();
    navLinkFade();
  });

  navLinks.forEach((element) => {
    element.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggler();
        navLinkFade();
      }
    });
  });
};

navSlide();
