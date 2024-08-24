const scrollContainer = document.getElementById('categoryListing');
const leftButton = document.getElementById('scrollLeft');
const rightButton = document.getElementById('scrollRight');
const passage = document.getElementById('hidenPassage');
let isRead = false;

leftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});

rightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});

function unhidePassgae() {
    const readMoreBtn = document.querySelector('.bottomBannerReadMoreBtn');
    if (!isRead) {
        passage.style.display = "contents";
        readMoreBtn.innerHTML = "Read Less";
    } else {
        passage.style.display = "none";
        readMoreBtn.innerHTML = "Read More";
    }
    isRead = !isRead;
}
