const hamburger = document.querySelector(".hamburger");
const drawer = document.getElementById("drawer");
const drawerLinks = document.querySelectorAll(".drawer__link");

if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.getAttribute("aria-expanded") === "true";

        hamburger.setAttribute("aria-expanded", String(!isOpen));
        hamburger.classList.toggle("is-active");
        drawer.classList.toggle("is-open");
    });

    drawerLinks.forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.classList.remove("is-active");
            drawer.classList.remove("is-open");
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.classList.remove("is-active");
            drawer.classList.remove("is-open");
        }
    });
}