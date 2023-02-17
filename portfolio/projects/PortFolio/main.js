"use strict";

// Make Navbar Background-color transparent ~> pink
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Click to move to the menu item position
const navbarMenu = document.querySelector(".navbar__menu"); //<- 변수 선언 navbarMenu는 navbar__menu이다

navbarMenu.addEventListener("click", (event) => {
  //<- 클릭시 이벤트 발생
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link); // <- 이 아래 함수를 불러다 아이디만 적어주면 그 아이디위치로 이동
});

const toggleBar = document.querySelector(".toggle__btn");
toggleBar.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

const homeContactBtn = document.querySelector(".home__contact"); // <- 변수 선언 homeContactBtn home__contact이다
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact"); //<- 이 아래 함수를 불러다 아이디만 적어주면 그 아이디위치로 이동
});

// 화면을 선택한 section의 위치로 이동 시키는 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//Make home slowly fade to transparent as the indow scrolls down.home_contact
// 스크롤이 내려가면 home에 있는 컨텐츠들이 점점 투명해짐
const home = document.querySelector(".home__container"); // <-변수 선언
const homeheight = home.getBoundingClientRect().height; // <- home의 높이를 구한다.
document.addEventListener("scroll", () => {
  // <- 스크롤이 내려가면 이벤트 발생
  home.style.opacity = 1 - window.scrollY / homeheight; // <- 변수의 css를 1 - window.scrollY / homeheight 계산식으로 수정
}); // 위의 계산식처럼 home__container의오퍼시티가 적용됨

//스크롤을 내리면 버튼이 생기는 함수
const upButton = document.querySelector("#up__Button");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeheight / 2) {
    upButton.classList.add("visible");
  } else {
    upButton.classList.remove("visible");
  }
});

// upButton을 클릭하면 홈으로 이동하는 함수
upButton.addEventListener("click", () => {
  scrollIntoView("#home");
});

const workBtnContainer = document.querySelector(".work_categories");

const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 350);
});

/* 직접만든  버튼 JS코드 
const upButton = document.querySelector(".up__Button");
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    upButton.style.opacity = 1;
  } else if (window.scrollY < navbarHeight) {
    upButton.style.opacity = 0;
  }
});

upButton.addEventListener("click", () => {
  scrollIntoView("#home");
});
*/
