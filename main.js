const menu = document.querySelector(".menu-bur");
const menuItems = document.querySelectorAll(".menuItem");
const hamburgerBtn= document.querySelector(".hamburgerBtn");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
}

hamburgerBtn.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    speed: 300,
    spaceBetween: 30,

  

    navigation: {
      nextEl: '.s-button-next',
      prevEl: '.s-button-prev',
    },

    breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 0
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });
