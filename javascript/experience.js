let isScrolling = true; // Variable to track scroll state
let scrollInterval = null; // Interval ID for scrolling
let scrollDirection = 1; // 1 for forward, -1 for backward

function startAutoScroll() {
    const experienceList = document.getElementById("experienceList");

    scrollInterval = setInterval(() => {
        experienceList.scrollLeft += scrollDirection; // Scroll based on current direction

        // Reverse direction when reaching the end or start
        if (experienceList.scrollLeft + experienceList.clientWidth >= experienceList.scrollWidth-100) {
            scrollDirection = -1; // Reverse to scroll backward
        } else if (experienceList.scrollLeft <= 0) {
            scrollDirection = 1; // Reverse to scroll forward
        }
    }, 20); // 20ms for smooth horizontal scrolling
}

function stopAutoScroll() {
    clearInterval(scrollInterval);
}

function toggleScroll() {
    const controlButton = document.getElementById("controlButton");

    if (isScrolling) {
        stopAutoScroll();
        controlButton.textContent = "Resume"; // Change button text
    } else {
        startAutoScroll();
        controlButton.textContent = "Pause"; // Change button text
    }

    isScrolling = !isScrolling; // Toggle scroll state
}

// Start auto-scroll on page load
document.addEventListener("DOMContentLoaded", () => {
    startAutoScroll();
});
