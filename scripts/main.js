const myHeading = document.querySelector("h2");
myHeading.textContent = "Hello World! This was added by a JavaScript code!";

document.querySelector("h3").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
})

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/airplane1.jpg") {
        myImage.setAttribute("src", "images/airplane2.jpg");        
    } else {
        myImage.setAttribute("src", "images/airplane1.jpg");
    }
}

let myButton = document.querySelector("button");
let changeThis = document.querySelector("#changeThis");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    changeThis.textContent = "Boeing is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    changeThis.textContent = "Boeing is cool, " + storedName;
}

myButton.onclick = () => {
    setUserName();
}