function toggleMenu() {
    // This function is not currently linked to any element (like a hamburger icon)
    // but is kept here if needed later.
    const menu = document.getElementById('navMenu');
    if (menu) { // Check if the element exists
        menu.classList.toggle('active'); // Assumes an 'active' class handles visibility
    } else {
        console.error("Navigation menu element 'navMenu' not found.");
    }
}

// Example Usage (if you add a hamburger button with id="hamburger-btn"):
// const hamburger = document.getElementById('hamburger-btn');
// if (hamburger) {
//     hamburger.addEventListener('click', toggleMenu);
// }