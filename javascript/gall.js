// Select the scroll container, buttons, and header
const scrollContainer = document.querySelector('.scroll-container');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const header = document.querySelector('.header');

const scrollAmount = 1000; // Pixels

// Event listener for left button
leftButton.onclick = () => {
    scrollContainer.scrollBy({
        left: -scrollAmount, // Scroll left
        behavior: 'smooth'  // Smooth scrolling
    });
};

rightButton.onclick = () => {
    scrollContainer.scrollBy({
        left: scrollAmount, // Scroll right
        behavior: 'smooth' // Smooth scrolling
    });
};

// Cloud spawning logic
const cloudContainer = document.querySelector('.cloud-container');
const cloudImages = [
    '../assets/icons/cloud1.png',
    '../assets/icons/cloud2.png',
    '../assets/icons/cloud3.png'
];

// Function to generate random clouds
function spawnClouds() {
    const numClouds = Math.floor(Math.random() * 5) + 3; // Randomize number of clouds (3-8)

    for (let i = 0; i < numClouds; i++) {
        const cloud = document.createElement('img');
        cloud.src = cloudImages[Math.floor(Math.random() * cloudImages.length)];
        cloud.classList.add('cloud');

        // Randomize vertical position
        const randomY = Math.random() * window.innerHeight;

        // Randomize size
        const randomScale = Math.random() * 0.5 + 1; // Scale between 0.5x and 1x
        cloud.style.transform = `scale(${randomScale})`;

        cloud.style.top = `${randomY}px`;
        cloud.style.animationDuration = `${Math.random() * 10 + 10}s`; // 10-20 seconds

        // Append the cloud to the container
        cloudContainer.appendChild(cloud);

        // Remove cloud after animation ends
        cloud.addEventListener('animationend', () => {
            cloud.remove();
        });
    }
}

// Function to check if the header is visible
function isHeaderVisible() {
    const headerRect = header.getBoundingClientRect();
    return headerRect.top < window.innerHeight && headerRect.bottom > 0;
}

// Function to handle cloud visibility on scroll
function handleScroll() {
    if (isHeaderVisible()) {
        // If the header is visible, ensure clouds are visible and spawning
        cloudContainer.style.opacity = 1;

        if (!spawnClouds.interval) {
            spawnClouds.interval = setInterval(spawnClouds, 4000); // Spawn clouds at intervals
        }
    } else {
        // If the header is not visible, fade out clouds and stop spawning
        cloudContainer.style.opacity = 0;

        if (spawnClouds.interval) {
            clearInterval(spawnClouds.interval);
            spawnClouds.interval = null;
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const tabs = document.querySelector(".tabs");

    menuToggle.addEventListener("click", () => {
        tabs.classList.toggle("active");  
    });
});
// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Spawn some clouds initially
spawnClouds();
