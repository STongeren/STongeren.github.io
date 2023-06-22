// Function to scroll to a specific section
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
    // Get all progress bars
    const progressBars = document.querySelectorAll('.progress .progress-bar');
    // Set the width of each progress bar based on its aria-valuenow attribute
    progressBars.forEach(function (bar) {
        bar.style.width = bar.getAttribute("aria-valuenow") + "%";
    });
});
