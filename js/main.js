const swiper = new Swiper(".mySwiper", {
   slidesPerView: 4,
   loop: true,
   navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
   },
   breakpoints: {
      // mobile + tablet - 320-990
      320: {
         slidesPerView: 1
      },
      700: {
         slidesPerView: 2
      },
      // desktop >= 991
      991: {
         slidesPerView: 3
      },
      1280: {
         slidesPerView: 4
      }

   }
});

// menu-mobile

const menuBtn = document.querySelector('.menu__mobile');
const menuList = document.querySelector('.menu__nav');
const closeBtn = document.querySelector('.close_btn');



menuBtn.addEventListener('click', function () {
   menuList.classList.toggle('show');
});

closeBtn.addEventListener('click', function () {
   menuList.classList.remove('show');
});

//скрол плавный от меню 

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
   smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
};