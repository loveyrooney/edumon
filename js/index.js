const book_hov = document.querySelector(".book");
const content_hov = document.querySelector(".contents_hov");
const service_hov = document.querySelector(".service_hov");
const contents = document.querySelector("#contents");
let service = document.querySelector("#service");
let hamburger = document.querySelector("#hamburger");
let nav1 = document.querySelector("#nav1");
let m_li = document.querySelector("#m_li");

let timer = null;

const clickHamburger = function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (service.className === "hide") {
    nav1.className = "m_nav1";
    service.className = "m_service_box";
    m_li.className = "m_li";
  } else {
    nav1.className = "hide";
    service.className = "hide";
  }
};

const bookMouseenter = function () {
  if (window.innerWidth > 768) {
    service.className = "hide";
    contents.className = "hide";
  }
};

const contentsMouseenter = function () {
  if (window.innerWidth > 768) {
    service.className = "hide";
    contents.className = "contents_box";
  }
};

const serviceMouseenter = function () {
  if (window.innerWidth > 768) {
    contents.className = "hide";
    service.className = "service_box";
  }
};

const contentsMouseleave = function () {
  if (window.innerWidth > 768) contents.className = "hide";
};

const serviceMouseleave = function () {
  if (window.innerWidth > 768) service.className = "hide";
};

const classSet = function () {
  if (window.innerWidth < 768) {
    nav1.className = "hide";
    service.className = "hide";
    hamburger.addEventListener("click", clickHamburger);
  } else {
    nav1.className = "nav1";
    service.className = "hide";
  }
  book_hov.addEventListener("mouseenter", bookMouseenter);
  content_hov.addEventListener("mouseenter", contentsMouseenter);
  service_hov.addEventListener("mouseenter", serviceMouseenter);
  contents.addEventListener("mouseleave", contentsMouseleave);
  service.addEventListener("mouseleave", serviceMouseleave);
};

//브라우저 사이즈 변경시
window.addEventListener("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(classSet, 200);
});

//첫 시작 화면
classSet();
