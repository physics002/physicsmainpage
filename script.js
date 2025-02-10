document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all select elements
    const selects = document.querySelectorAll('.dropdown-select');
    
    selects.forEach(select => {
        select.addEventListener('change', function(e) {
            const selectedTopic = e.target.value;
            console.log(`Selected topic in physics: ${selectedTopic}`);
        });
    });

    // Hamburger menu toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

// Show popup when page loads
window.onload = function() {
  document.getElementById('telegramPopup').style.display = 'block';
}

// Close popup function
function closePopup() {
  document.getElementById('telegramPopup').style.display = 'none';
}
