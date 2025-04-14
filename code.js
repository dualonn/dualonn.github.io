document.addEventListener('DOMContentLoaded', () => {
    // Read the query parameter 'page' from the URL
    const urlParams = new URLSearchParams(window.location.search)
    const page = urlParams.get('page') || 'Home' // Default to 'Home' if no page is specified

    // Load the content based on the query parameter
    load_content(page)
})

function load_content(page) {
    console.log(`Loading content for: ${page}`);

    // Get all sections except 'header'
    let children = [];
    for (let child of document.body.children) {
        if (child.id !== 'header') {
            children.push(child);  // Collect non-header elements
        }
    }

    // Hide all children (sections) except the one matching the 'page' parameter
    children.forEach(child => {
        if (child.id === page) {
            child.style.display = 'flex';  // Show the section matching the page
        } else {
            child.style.display = 'none';  // Hide all other sections
        }
    });
}
