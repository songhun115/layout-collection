const workBtnContainer = document.querySelector(".work_categories");

const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

if(workBtnContainer.attachEvent){
  workBtnContainer.attachEvent('onclick', function(event){
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
}

else if(workBtnContainer.addEventListener){
workBtnContainer.addEventListener("click", (e) =>  { 
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
} 

$(document).ready(function(){
  $(".coding-tool").hover( function () {  // 마우스 오버하면 함수 실행
      $(".coding_title").addClass("active");  // active클래수 추가
     }, function () {  // 평상시에 함수 실행
       $(".coding_title").removeClass("active");  //마우스 아웃되면 active클래스 제거 
      });
  $(".design-tool").hover( function () { 
      $(".design_title").addClass("active");
     }, function () { 
       $(".design_title").removeClass("active");
      });
});







