document.querySelectorAll('.slider').forEach((slider, index) => {
    const cardContainer = slider.querySelector('.card-container');
    const prevButton = slider.querySelector('#prev');
    const nextButton = slider.querySelector('#next');

    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide(cardContainer, currentIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cardContainer.children.length - 3) { // Show 3 cards at a time
            currentIndex++;
            updateSlide(cardContainer, currentIndex);
        }
    });
});

function updateSlide(cardContainer, currentIndex) {
    const cardWidth = cardContainer.children[0].offsetWidth + 40; // Adjust for margin
    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
