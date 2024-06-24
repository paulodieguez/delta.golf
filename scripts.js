document.addEventListener("DOMContentLoaded", () => {


    const myCarouselElement = document.querySelector('#AlbumCarousel');

    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 4000,
        keyboard: true,
        pause: "hover",
        ride: false,
        touch: true,
    })
});
