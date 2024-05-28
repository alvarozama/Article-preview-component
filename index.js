const shareBtn = document.getElementById('share-btn');
const speech = document.getElementById('speech'); // retrieve speech element

shareBtn.addEventListener("mouseover", () => {
    showLinks();
})

shareBtn.addEventListener('mouseleave', () => {
    hideLinks();
})

function showLinks() {
    speech.style.display = "flex"; // change display property to flex
}

function hideLinks() {
    speech.style.display = 'none';
}


