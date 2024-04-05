let list = document.querySelector(".list");
let icon = document.querySelector(".bar");
let body = document.querySelector("body");

icon.addEventListener("click", () => {
  list.classList.toggle("none");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
icon.classList.toggle("reed")
});

let fixedButton = document.querySelector(".fixed-button")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    fixedButton.style.display = "block";
  } else {
    fixedButton.style.display = "none";
  }
});

fixedButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});