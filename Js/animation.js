var isVisible = false;
const navLinks = document.getElementById("nav-links");
const navIcon = document.getElementById("NavBarIcon");

navIcon.addEventListener("click", function () {
    if(isVisible)
    {
        isVisible = false;
        navLinks.style.display = "none"
    }
    else
    {
        isVisible = true;
         navLinks.style.display = "grid"
    }
       
})

const images = document.querySelectorAll(".zoomable");

images.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoomed");
        img.classList.toggle("zoomable");
    });
});