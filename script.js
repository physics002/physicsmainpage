// Facts
const facts = [
    "Breast cancer is the most common cancer among women worldwide.",
    "Men can also develop breast cancer.",
    "Breastfeeding may lower the risk of breast cancer.",
    "Early detection improves survival rates.",
    "Healthy lifestyle choices can reduce risk.",
    "Genetic mutations can increase risk.",
    "Regular mammograms aid early detection."
];

// Modal toggles
function toggleFactModal() {
    document.getElementById('factModal').classList.toggle('show-modal');
}

function toggleDonationModal() {
    document.getElementById('donationModal').classList.toggle('show-modal');
}

// Rotate facts
let factIndex = 0;
function rotateFacts() {
    document.getElementById("fact-rotator").textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
}

window.onload = () => {
    setInterval(rotateFacts, 4000); // Rotate every 4 seconds
};

// Smooth Scroll
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}