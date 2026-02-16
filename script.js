// Get DOM elements
const inputArea = document.querySelector("textarea");
const characterCount = document.getElementById("characterCount");
const progressFill = document.getElementById("fill");

// Set the maximum amount of characters that can be typed
const maxLength = 280;

// Counts the number of characters typed
function countCharacters() {
  // Gets the length of the input
  const length = inputArea.value.length;

  // Checks if the lenght is greater than or equal to the maximum length
  if (length >= maxLength) {
    // Stop input if length exceeds max length
    inputArea.value = inputArea.value.slice(0, maxLength);
  }

  // Update the characater counter
  characterCount.innerText = length;

  // Update the fill value of the progress bar
  progressFill.style.width = `${(length / maxLength) * 100}%`;
}

// Every time an input has been made run the countCharacters function
inputArea.addEventListener("input", countCharacters);

// If the "Enter" key is pressed, do not count it as a character
inputArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});
