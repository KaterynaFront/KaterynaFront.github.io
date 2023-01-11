window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader-item"),
    tabsContent = document.querySelectorAll(".white-styles-test"),
    tabsParent = document.querySelector(".tabheader-items"),
    tabsShowImg = document.querySelectorAll(".style-image");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabsShowImg.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader-item-active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabsShowImg[i].classList.add("show", "fade");
    tabsShowImg[i].classList.remove("hide");
    tabs[i].classList.add("tabheader-item-active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", function (event) {
    const target = event.target;
    if (target && target.classList.contains("tabheader-item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".material-item"),
    tabsContent = document.querySelectorAll(".content-materials"),
    tabsParent = document.querySelector(".materials-items"),
    tabsShowImg = document.querySelectorAll(".choose-materials-art");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabsShowImg.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("materials-active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabsShowImg[i].classList.add("show", "fade");
    tabsShowImg[i].classList.remove("hide");
    tabs[i].classList.add("materials-active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", function (event) {
    const target = event.target;
    if (target && target.classList.contains("material-item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});

jQuery(document).ready(function ($) {
  $("#scroll-top > button").on("click", function (e) {
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, 500, "swing");
  });
});
