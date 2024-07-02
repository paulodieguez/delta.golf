// Click Here Alert Screen
document.addEventListener("DOMContentLoaded", () => {

    window.onload = function() {
        setTimeout(hiddenPosition, 1500);
    };


    let hiddenElement = document.querySelector("#hiddenElement");
    let clickId = document.querySelector("#clickId");
    function hiddenPosition() {
        console.log("hiddenPosition function running.")
        hiddenElement.style.bottom = "65%";
        // hiddenElement.style.right = "2em";
    };

    hiddenElement.addEventListener("click", changeElement);

    function changeElement() {
        // hiddenElement.style.top = "50%";
        hiddenElement.style.bottom = "50%";
        hiddenElement.style.right = "50%";
        // hiddenElement.style.transform = "translate(+50%, -50%)";
        hiddenElement.style.width = "60vw";
        clickId.innerHTML = "Thanks for clicking!";
        hiddenElement.style.backgroundColor = "rgb(80 103 202)";
        setTimeout(hideElement, 4000);
    };

    function hideElement() {
        // hiddenElement.style.transition = "2s ease 1s";
        // hiddenElement.style.top = "";
        hiddenElement.style.bottom = "-200px";
        // hiddenElement.style.right = "";
        // hiddenElement.style.transform = "unset"

    };
});


// hiddenElement.style.bottom = "";
// hiddenElement.style.right = "";
