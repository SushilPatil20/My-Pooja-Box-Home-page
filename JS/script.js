$(document).ready(function () {
    let currentIndex = 0;
    const items = $('.carouselItem');
    const itemCount = items.length;

    function showItem(index) {
        console.log(index)
        const newPosition = -index * 40 + '%';
        $('.carouselWrapper').css('transform', `translateX(${newPosition})`);
    }

    setInterval(() => {
        if (currentIndex < itemCount - 1) {
            currentIndex = (currentIndex + 1) % itemCount;
            showItem(currentIndex);
        } else {
            currentIndex = 0;
            showItem(currentIndex);
        }
    }, 5000);

    $('.next').click(function () {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    });

    $('.prev').click(function () {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showItem(currentIndex);
    });
});

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
