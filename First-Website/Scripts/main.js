const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
myVariable;
let myvariable = "Bob";
myVariable = "Steve";

/*
Everything in between is a comment.
*/

// This is a comment

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

let myVariable = document.querySelector("h1");
alert("hello!");


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

  multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });

  const myImage = document.querySelector("img");

  myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
      myImage.setAttribute("src", "images/firefox2.png");
    } else {
      myImage.setAttribute("src", "images/firefox-icon.png");
    }
  });