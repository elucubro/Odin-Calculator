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
function createbuttons() {
    const equal = document.createElement('button')
    equal.classList.add('operationButton')
    equal.textContent = "="
    equal.addEventListener('click', function(){equivalent()})

    const AllClear = document.createElement('button')
    AllClear.classList.add('button1')
    AllClear.textContent = 'AC'
    AllClear.addEventListener('click', function(){allClear()})

    const PlusMinus = document.createElement('button')
    PlusMinus.classList.add('button1')
    PlusMinus.textContent = "+/-"

    const Remainder = document.createElement('button')
    Remainder.classList.add('button1')
    Remainder.textContent = "%"

    const division = document.createElement('button')
    division.classList.add('operationButton')
    division.textContent = "÷"
    division.addEventListener('click', function(){operationAppend('/')})

    const multiply = document.createElement('button')
    multiply.classList.add('operationButton')
    multiply.textContent = "×"
    multiply.addEventListener('click', function(){operationAppend('*')})

    const minus = document.createElement('button')
    minus.classList.add('operationButton')
    minus.textContent = "-"
    minus.addEventListener('click', function(){operationAppend('-')})

    const plus = document.createElement('button')
    plus.classList.add('operationButton')
    plus.textContent = "+"
    plus.addEventListener('click', function() {operationAppend('+')})

    const one = document.createElement('button')
    one.classList.add('numberButton')
    one.textContent = "1"
    one.addEventListener('click', function() {numberAppend(1)})

    const two = document.createElement('button')
    two.classList.add('numberButton')
    two.textContent = "2"
    two.addEventListener('click', function() {numberAppend(2)})

    const three = document.createElement('button')
    three.classList.add('numberButton')
    three.textContent = "3"
    three.addEventListener('click', function(){numberAppend(3)})

    const four = document.createElement('button')
    four.classList.add('numberButton')
    four.textContent = "4"
    four.addEventListener('click', function() {numberAppend(4)})

    const five = document.createElement('button')
    five.classList.add('numberButton')
    five.textContent = "5"
    five.addEventListener('click', function() {numberAppend(5)})

    const six = document.createElement('button')
    six.classList.add('numberButton')
    six.textContent = "6"
    six.addEventListener('click', function() {numberAppend(6)})

    const seven = document.createElement('button')
    seven.classList.add('numberButton')
    seven.textContent = "7"
    seven.addEventListener('click', function() {numberAppend(7)})

    const eight = document.createElement('button')
    eight.classList.add('numberButton')
    eight.textContent = "8"
    eight.addEventListener('click', function() {numberAppend(8)})

    const nine = document.createElement('button')
    nine.classList.add('numberButton')
    nine.textContent = "9"
    nine.addEventListener('click', function() {numberAppend(9)})

    const zero = document.createElement('button')
    zero.classList.add('numberButton')
    zero.classList.add('span2')
    zero.textContent = "0"
    zero.addEventListener('click', function() {numberAppend(0)})

    const decimal = document.createElement('button')
    decimal.classList.add('numberButton')
    decimal.textContent = "."
    decimal.addEventListener('click', function() {numberAppend(".")})

    buttonContainer.appendChild(AllClear)
    buttonContainer.appendChild(PlusMinus)
    buttonContainer.appendChild(Remainder)
    buttonContainer.appendChild(division)
    buttonContainer.appendChild(seven)
    buttonContainer.appendChild(eight)
    buttonContainer.appendChild(nine)
    buttonContainer.appendChild(multiply)
    buttonContainer.appendChild(four)
    buttonContainer.appendChild(five)
    buttonContainer.appendChild(six)
    buttonContainer.appendChild(minus)
    buttonContainer.appendChild(one)
    buttonContainer.appendChild(two)
    buttonContainer.appendChild(three)
    buttonContainer.appendChild(plus)
    buttonContainer.appendChild(zero)
    buttonContainer.appendChild(decimal)
    buttonContainer.appendChild(equal)


}
createbuttons()

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
function equivalent() {
    const calcLength = calculator.length;
    if (calcLength == 3) {
        const Ans = evaluateExpression();
        const ansString = Ans.toString();
        calculator.length = 0;
        calculator.push(ansString)
        updateDisplay();
    } 
}

function allClear() {
    calculator.length = 0;
    updateDisplay();
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
        updateDisplay()
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