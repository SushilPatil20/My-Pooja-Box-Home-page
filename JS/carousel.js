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
        } else {
            currentIndex = 0;
        }
        showItem(currentIndex);
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