const navBox = document.querySelector("nav ul");
const navBtn = document.querySelector(".hamburger");

navBtn.onclick = () => {
  navBox.classList.toggle("active");
};
