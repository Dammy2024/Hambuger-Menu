
const menuContainer = document.querySelector(".ham-Navbar-Container")
const menuButton = document.querySelector(".ham-Navbar-Btn");
const hamMenu = document.querySelector(".ham-Menu")
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");


 function toggleMenu (e){
  const isShown = hamMenu.classList.toggle("show")
  menuIcon.style.display = isShown ? "none" : "inline";
  closeIcon.style.display = isShown ? "inline" : "none";
 }

  menuButton.addEventListener("click", toggleMenu);