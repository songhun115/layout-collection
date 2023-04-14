$(document).ready(function() {

$('.btn_icon').click(function (){
    $clickd = $(this);
    if($clickd.hasClass('active')) {
        $clickd.removeClass('active');
       
    } else {
        $clickd.addClass('active');
        $('.all_menu').addClass('open');
    }
});

$('.all_menu_close').click(function() {
    $('.all_menu').removeClass('open');
})

$('.all_menu_item').click(function () {
    var submenu = $(this).children("ul");
    var $clickd = $(this);
    if (submenu.is(":visible")) {
      submenu.slideUp(300);
      $clickd.removeClass('active');
    } else { 
      submenu.slideDown(300);
      $clickd.addClass('active');
    }
  });

  $('.all_menu_sub_item').click(function () {
    var submenu = $(this).children("ul");
    var $clickd = $(this);
    if (submenu.is(":visible")) {
      submenu.slideUp(300);
      $clickd.removeClass('active');
    } else { 
      submenu.slideDown(300);
      $clickd.addClass('active');
    }
  });

  const navbar = document.querySelector(".header");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("header_color");
  } else {
    navbar.classList.remove("header_color");
  }
});

const mb_navbar = document.querySelector(".mb_header");
const mb_navbarHeight = mb_navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > mb_navbarHeight) {
    mb_navbar.classList.add("mb_header_color");
  } else {
    mb_navbar.classList.remove("mb_header_color");
  }
});
});