var menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";

function menuToggle() {
  if (menuItems.style.maxHeight === "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

// js for product gallery
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

if (smallImg.length !== 0) {
  smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
  };

  smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
  };

  smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
  };

  smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
  };
}

// js for toggle form
var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function register() {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(120px)";
}

function login() {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(5px)";
}
