const imgHero = document.querySelector("img.img-hero");
let i = 1;
setInterval(() => {
      i++;

      if (i > 4) {
            i = 1;
      }
      imgHero.src = `img/home/img-${i}.jpg`;
      imgHero.classList.add("animation-fade");
      setTimeout(() => {
            imgHero.classList.remove("animation-fade");
      }, 1000);
}, 3000);



window.onscroll = function () {
      const header = document.querySelector("header");
      const navMenu = document.querySelector("#nav-menu");
      
      const fixedNav = header.offsetTop;
      var width = window.innerWidth;

      if (window.pageYOffset > fixedNav) {
            header.classList.add("navbar-fixed");
            if (width < 1024) {
                  navMenu.classList.add("navbar-fixed");
            }
      } else {
            header.classList.remove("navbar-fixed");
            navMenu.classList.remove("navbar-fixed");
      }
};



const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("translate-x-full");
});
