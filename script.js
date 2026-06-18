// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Icon Change
    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ================= CLOSE MENU ON CLICK =================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


// ================= STICKY HEADER SHADOW =================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
    }

});


// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("class");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href").substring(1) === current
        ) {
            link.classList.add("active-link");
        }

    });

});


// ================= SCROLL TO TOP BUTTON =================

// Create Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

// Show / Hide
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

// Scroll Top
topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= FADE-IN ANIMATION =================

const cards = document.querySelectorAll(
    ".box, .course-card, .feature-card, .student-card, .teacher-card, .gallery-box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});


const track = document.querySelector(".testimonial-track");

let position = 0;

setInterval(() => {

    position += 270;

    if (position >= track.scrollWidth - track.parentElement.offsetWidth) {
        position = 0;
    }

    track.style.transform = `translateX(-${position}px)`;

}, 2500);

const facultyTrack = document.querySelector(".faculty-track");

let facultyPosition = 0;

setInterval(() => {

    facultyPosition += 270;

    if (facultyPosition >= facultyTrack.scrollWidth - facultyTrack.parentElement.offsetWidth) {
        facultyPosition = 0;
    }

    facultyTrack.style.transform = `translateX(-${facultyPosition}px)`;

}, 3000);


const resultTrack = document.querySelector(".result-track");

let resultPosition = 0;

setInterval(() => {

    resultPosition += 285;

    if (resultPosition >= resultTrack.scrollWidth - resultTrack.parentElement.offsetWidth) {
        resultPosition = 0;
    }

    resultTrack.style.transform = `translateX(-${resultPosition}px)`;

}, 3000);