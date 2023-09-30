document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;

    const navLinks = document.querySelectorAll(".nav-item .nav-link");

    for (const link of navLinks) {
        if (currentLocation.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item .nav-link");

    for (const link of navLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust the offset as needed
                behavior: "smooth",
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuList = document.querySelector(".menu-list");

    menuIcon.addEventListener("click", function () {
        menuList.classList.toggle("show");
    });
});
