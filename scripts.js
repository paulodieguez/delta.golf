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



// Intersection Observer from hackermoon.com
document.addEventListener("DOMContentLoaded", () => {

    //Set variables to be used by The Observer function and variables for style changes
    let carousel = document.querySelector("#AlbumCarousel");
    let header = document.querySelector("#headerId");
    let footer = document.querySelector("#footerId");
    let viewportHeight;
    let viewportWidth = window.innerWidth;
    let viewportWidth_next;
    // let viewportHeight = -0.7 * document.documentElement.clientHeight;
    let rootMarginStr;
    let theObserver;


    getHeight();
    runObserver();

    function runObserver()
    {
        let options = {
            root: null,
            threshold: 0,
            rootMargin: rootMarginStr,
        };

        theObserver = new IntersectionObserver(callbackFunction, options);
        theObserver.observe(carousel);
    };

    function callbackFunction(entries) {
        let [entry] = entries;
        console.log(entry);

        if (entry.isIntersecting) {
        let scrollTop = String(document.documentElement.scrollTop) + "px";
        console.log("Deu Certo");
        console.log(scrollTop);
        header.style.position = "relative";
        header.style.top = scrollTop;

        footer.style.bottom = "-50px";

        } else {
        header.style.position = "";
        header.style.top = "";
        footer.style.bottom = "";
        };
    };

    // Function for determining viewport height and rootMarginStr;
    function getHeight() {
        viewportHeight = -0.70 * window.innerHeight;
        rootMarginStr = "0px 0px " + viewportHeight + "px" + " 0px";
    };

    // Stops the observer, get viewport height again and re-run the observer
    window.addEventListener("resize", function() {
        viewportWidth_next = window.innerWidth;
        if (viewportWidth_next != viewportWidth) {
            viewportWidth = viewportWidth_next;
            console.log("Width has been changed, running function");
            console.log("Current viewport is " + viewportWidth_next);
            theObserver.unobserve(carousel);
            getHeight();
            runObserver();
            console.log("Resizing viewport");
        };
    });
});
