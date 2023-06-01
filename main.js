function scrollToSection(sectionId) {
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


// Progress bars
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress .progress-bar');
    progressBars.forEach(function (bar) {
        bar.style.width = bar.getAttribute("aria-valuenow") + "%";
    });
});
