const book_hov = document.querySelector(".book");
const content_hov = document.querySelector(".contents_hov");
const service_hov = document.querySelector(".service_hov");
const contents = document.querySelector("#contents");
let service = document.querySelector("#service");
let hamburger = document.querySelector("#hamburger");
let nav1 = document.querySelector("#nav1");
let m_li1 = document.querySelector("#m_li1");
let m_li2 = document.querySelector("#m_li2");
let sub = document.querySelector('#sub');
let info = document.querySelector('#info');

let timer = null;

const clickHamburger = function (e) {
  e.preventDefault();
  e.stopPropagation();
  if(e.type=='click' || e.keyCode == 9){
    if (nav1.className === "hide") {
      nav1.className = "m_nav1";
      m_li1.className = "m_li";
      m_li2.className = "m_li";
    } else {
      nav1.className = "hide";
    }
  }
};

const bookMouseenter = function (e) {
  if (window.innerWidth > 768) {
    service.className = "hide";
    contents.className = "hide";
  } else {
    if(window.innerWidth <768){
      e.target.addEventListener('keyup',function (e){
        if(e.keyCode == 38) hamburger.focus();
      });
    }
  }
};

const contentsMouseenter = function (e) {
  if (e.type=='mouseenter' || e.keyCode == 9) {
    if(window.innerWidth > 768){
      service.className = "hide";
      contents.className = "contents_box";
    }
    e.target.addEventListener('keyup',function (e){
      if(e.keyCode == 40) sub.focus();
    });
  }
};

const serviceMouseenter = function (e) {
  if (e.type=='mouseenter' || e.keyCode == 9) {
    if(window.innerWidth > 768){
      contents.className = "hide";
      service.className = "service_box";
    }
    e.target.addEventListener('keyup',function (e){
      if(e.keyCode == 40) info.focus();
    });
  }
};

const contentsMouseleave = function () {
  if (window.innerWidth > 768) contents.className = "hide";
};

const serviceMouseleave = function () {
  if (window.innerWidth > 768) service.className = "hide";
};

const subKeyup = function (e) {
  if(e.keyCode == 38) content_hov.firstElementChild.focus();
}

const infoKeyup = function (e) {
  if(e.keyCode == 38) service_hov.firstElementChild.focus();
}

const classSet = function () {
  if (window.innerWidth < 768) {
    nav1.className = "hide";
    hamburger.addEventListener("click", clickHamburger);
    hamburger.addEventListener('keyup',clickHamburger);
  } else {
    nav1.className = "nav1";
  }
  book_hov.addEventListener("mouseenter", bookMouseenter);
  book_hov.addEventListener("keyup",bookMouseenter);
  content_hov.addEventListener("mouseenter", contentsMouseenter);
  content_hov.addEventListener("keyup", contentsMouseenter);
  sub.addEventListener('keyup',subKeyup);
  service_hov.addEventListener("mouseenter", serviceMouseenter);
  service_hov.addEventListener("keyup", serviceMouseenter);
  info.addEventListener('keyup',infoKeyup);
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
