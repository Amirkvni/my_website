var hambergerMneu = document.querySelector(".fa-bars");
var mobilMenu = document.querySelector(".mobile-menu");
var exitBtn = document.querySelector(".exit-btn");
let resume_items = document.querySelectorAll(".resume_item");
hambergerMneu.addEventListener("click", () => {
  mobilMenu.style.right = "0px";
});
exitBtn.addEventListener("click", () => {
  mobilMenu.style.right = "-290px";
});
// resume :
function navigationTabsInit(
  listItems,
  listItemActiveClass,
  contentItemShowClass
) {
  resume_items.forEach((listItem) => {
    listItem.addEventListener("click", function () {
      removeActiveClass(listItemActiveClass);
      removeActiveClass(contentItemShowClass);
      this.classList.add(listItemActiveClass);
      let contentId = this.getAttribute("data-content-id");
      console.log(contentId);
      document.querySelector(contentId).classList.add(contentItemShowClass);
    });
  });
}
function removeActiveClass(className) {
  document.querySelector(`.${className}`).classList.remove(className);
}

navigationTabsInit(resume_items, "resume_item--active", "resume-content__show");
