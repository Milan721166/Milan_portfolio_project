// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

// Typed.js Initialization
new Typed('.text', {
    strings: ['Web Developer', 'Programmer', 'Frontend Developer', 'Freelancer'],
    typeSpeed: 200,
    backSpeed: 80,
    backDelay: 1500,
    loop: true
});
// Function to reset the search bar when clicking outside
document.addEventListener('click', (e) => {
    const searchBar = document.getElementById('search-bar');
    const searchContainer = document.querySelector('.search-bar-container');

    // Check if the click was outside the search bar container
    if (!searchContainer.contains(e.target)) {
        searchBar.value = ''; // Reset the search bar value
        filterProjects(); // Reset the filter (optional, if you want to show all projects again)
    }
});

// Function to filter projects based on the search bar input
function filterProjects() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const projects = document.querySelectorAll('.project-item');

    projects.forEach(project => {
        const title = project.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            project.style.display = 'block'; // Show matching project
        } else {
            project.style.display = 'none'; // Hide non-matching project
        }
    });
}
