const hamButton = document.querySelector("#hamButton");
const closeButton = document.querySelector("#closeButton");
const mobileMenu = document.querySelector("#mobileMenu");

hamButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
})

closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex")
})