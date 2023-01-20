const calculatorContainer = document.createElement('div')
calculatorContainer

// Creating divs and buttons needed for calculator
function createcalculator() {
    const calculatorContainer = document.createElement('div')
    calculatorContainer.classList.add('calcContainer')
    const calculatorScreen = document.createElement('div')
    calculatorScreen.classList.add('calcScreen')
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttonContainer')
    const currentOperationDiv = document.createElement('div')
    currentOperationDiv.classList.add('currentOperationDiv')
    currentOperationDiv.textContent = "123+415"
    const previousOperationDiv = document.createElement('div')
    previousOperationDiv.classList.add('previousOperationDiv')
    previousOperationDiv.textContent = "34526"
    calculatorScreen.appendChild(currentOperationDiv)
    calculatorScreen.appendChild(previousOperationDiv)
    calculatorContainer.appendChild(calculatorScreen)
    calculatorContainer.appendChild(buttonContainer)
    document.body.appendChild(calculatorContainer)
}
createcalculator()




// Console Calculator
function operation(a,op,b) {
    if (op == '+') {
        return a + b
    } else if (op == '*') {
        return a * b
    } else if (op == '/') {
        return a / b 
    } else if (op == '-') {
        return a - b }
}
// Initializing Calculator Arrary
const calculator = [];
// Function to be used on number press
function numberAppend(num) {
    let numString = num.toString();
    let calc = calculator.length;
    let calcTakeOne = calc-1;
    // calculator.length is the amount of items in array
    if (calculator.length == 0 || 2) {
        calculator.push(numString)
    } 
    else {
        let calculatorOneIndex = calculator[calcTakeOne]
        calculator[calcTakeOne] = calculatorOneIndex.concat(numString)
    }

}

/* psuedo code - idea for system

When button is pressed, a function is run that checks the length of array calculator.
if array has 1 item and number button is pressed, the number is added to item 0.
if operation button is pressed, operation becomes array item 1.

when = is pressed, it analyzes and looks for 
operations in array item 1 and numbes in item 0 & 2
*/