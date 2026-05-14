const myName = "Celestine";
let myMajor = "Information Technology";

// This will create a pop-up on your phone screen
alert("Hello! My name is " + myName + " and I study " + myMajor);
 
// 1. Find the button in the HTML 'hardware'
const btn = document.getElementById("myButton");

// 2. Create the 'Logic' (The Function)
function showMessage() {
    alert("Message Sent Successfully!");
    btn.style.backgroundColor = "green";
    btn.innerHTML = "Sent!";
}

// 3. Connect the trigger (The Event Listener)
btn.addEventListener("click", showMessage);
const input = document.getElementById("levelInput");
const btn = document.getElementById("checkBtn");

btn.addEventListener("click", function() {
    let myLevel = Number(input.value); // This 'grabs' the number from the HTML box
    
    if (myLevel === 100) {
        alert("Welcome, Freshman!");
    }
});
 
