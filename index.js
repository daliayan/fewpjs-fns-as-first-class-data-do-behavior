/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeStg) {

  const hour = parseInt(timeStg, 10);
    if (hour < 12) return "Good Morning"
    if (hour > 17) return "Good Evening"
    return "Good Afternoon"

}

function displayMessage(message) {
  document.getElementById("greeting").textContent = message;
}