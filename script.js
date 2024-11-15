document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Obrigado por entrar em contato! Entraremos em breve.");
        form.reset();
    });

    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const item = header.parentElement;
            const expanded = item.getAttribute("aria-expanded") === "true";
            item.setAttribute("aria-expanded", !expanded);
        });
    });

    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
