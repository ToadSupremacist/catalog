const header = document.querySelector(".header")

window.addEventListener("click", (event) => {
    header.toggleAttribute("class", "header--thin")
})