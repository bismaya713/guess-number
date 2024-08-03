// script.js

// Generate a random number between 1 and 10
const guessedNumber = Math.floor(Math.random() * 10) + 1;

// Initialize a counter for attempts
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
    const userInput = document.getElementById('userInput');
    const userNumber = Number(userInput.value);
    const feedback = document.getElementById('feedback');

    // Check if the input is a valid number within range
    if (userNumber < 1 || userNumber > 10) {
        feedback.textContent = 'Please enter a number between 1 and 10.';
        feedback.style.color = 'red';
        return;
    }

    attempts++;

    // Compare user's number with the guessed number
    if (userNumber === guessedNumber) {
        feedback.textContent = `Congratulations! You guessed the correct number ${guessedNumber} in ${attempts} attempts.`;
        feedback.style.color = 'green';
        disableInput();
    } else if (userNumber < guessedNumber) {
        feedback.textContent = 'Too low! Try a higher number.';
        feedback.style.color = 'orange';
    } else {
        feedback.textContent = 'Too high! Try a lower number.';
        feedback.style.color = 'orange';
    }

    // Clear the input field after each guess
    userInput.value = '';
}

// Function to disable input and button after a successful guess
function disableInput() {
    document.getElementById('userInput').disabled = true;
    document.getElementById('checkButton').disabled = true;
}

// Add event listener to the button
document.getElementById('checkButton').addEventListener('click', checkGuess);

// Add "Enter" key event for the input field
document.getElementById('userInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
