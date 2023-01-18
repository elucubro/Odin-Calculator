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