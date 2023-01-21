// Creating divs and buttons needed for calculator

const calculatorContainer = document.createElement('div')
calculatorContainer.classList.add('calcContainer')
const calculatorScreen = document.createElement('div')
calculatorScreen.classList.add('calcScreen')
const buttonContainer = document.createElement('div')
buttonContainer.classList.add('buttonContainer')
const currentOperationDiv = document.createElement('div')
currentOperationDiv.classList.add('currentOperationDiv')
const previousOperationDiv = document.createElement('div')
previousOperationDiv.classList.add('previousOperationDiv')
calculatorScreen.appendChild(currentOperationDiv)
calculatorScreen.appendChild(previousOperationDiv)
calculatorContainer.appendChild(calculatorScreen)
calculatorContainer.appendChild(buttonContainer)
document.body.appendChild(calculatorContainer)





// Console Calculator


// Initializing Calculator Arrary
const calculator = [];
// Function to be used on number press
function numberAppend(num) {
    const numString = num.toString();
    const calcLength = calculator.length;
    const calcTakeOne = calcLength-1;
    // calculator.length is the amount of items in array
    if (calcLength == 0 || calcLength == 2) {
        calculator.push(numString);
        updateDisplay();
    } 
    else {
        let calculatorOneIndex = calculator[calcTakeOne]
        calculator[calcTakeOne] = calculatorOneIndex.concat(numString)
        updateDisplay()
    }

}
function updateDisplay() {
    currentOperationDiv.textContent = calculator.join('')
}


// ExpressionEvaluation
function evaluateExpression() {
    const operator = calculator[1]
    const operandOne = parseFloat(calculator[0]);
    const operandTwo = parseFloat(calculator[2]);
    
    if (operator == "*") {
        return operandOne * operandTwo;
    }
    if (operator == "/") {
        return operandOne / operandTwo;
    }
    if (operator == "+") {
        return operandOne + operandTwo;
    }
    if (operator == "-") {
        return operandOne - operandTwo;
    } else {
        return;
    }
}

// Operation Appending
function operationAppend(op) {
    let calcLength = calculator.length;

    if (calcLength == 1) {
        calculator.push(op)
    }
    if (calcLength == 3) {
        const prevAnswer = evaluateExpression()
        calculator.length = 0
        calculator.push(prevAnswer)
        calculator.push(op)
        updateDisplay()
    }
}


/* psuedo code - idea for system

When button is pressed, a function is run that checks the length of array calculator.
if array has 1 item and number button is pressed, the number is added to item 0.
if operation button is pressed, operation becomes array item 1.

when = is pressed, it analyzes and looks for 
operations in array item 1 and numbes in item 0 & 2
*/