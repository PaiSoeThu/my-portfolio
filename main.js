import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "bootstrap/dist/js/bootstrap.bundle.min";



const typed = new Typed('#element', {
  strings: ["I'm Paing Soe Thu ...", "Nice to meet you"],
  typeSpeed: 50,
  backSpeed : 30,
  backDelay: 3000,
  loop : true
});

var toDown = {
    distance: '50px',
    origin: 'top',
    interval :500,
    duration :1000,
};

ScrollReveal().reveal('.to-down', toDown);

var toRight = {
    distance: '50px',
    origin: 'left',
    interval :500,
    duration :1000,
};

ScrollReveal().reveal('.to-right', toRight);

var toLeft = {
    distance: '50px',
    origin: 'right',
    interval :500,
    duration :1000,
};

ScrollReveal().reveal('.to-left', toLeft);


// custom js 


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function(event) {
        var navLinks = document.querySelectorAll("nav ul li a");
        var fromTop = window.scrollY;

        navLinks.forEach(function(link) {
            var section = document.querySelector(link.hash);
            
            if (
                section.offsetTop <= fromTop + 50 &&
                section.offsetTop + section.offsetHeight > fromTop + 50
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});

