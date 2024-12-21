// Append clicked button value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value; // Start with the clicked value
    } else {
        display.innerText += value; // Append value
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

// Calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText); // Evaluate the expression
    } catch (e) {
        display.innerText = 'Error'; // In case of an error
    }
}
