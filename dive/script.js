var navLinks = document.getElementById("navLinks");
function show() {
    navLinks.style.display = "block";
    document.querySelector("nav").classList.add("no-shadow");
}

function hide() {
    navLinks.style.display = "none";

    document.querySelector("nav").classList.remove("no-shadow");
}

document.addEventListener('click', function (event) {
    if (
        navLinks.style.display === "block" && !navLinks.contains(event.target) && event.target.id !== "bar" ) {
            hide();
        }
    
});

//navbar closing
const links = navLinks.querySelectorAll("a[href^= '#']");
links.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 700) {
            hide();
        }
    });
});