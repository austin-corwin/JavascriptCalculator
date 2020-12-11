// ORIGINAL BEGINS HERE //

// const calcButtons = document.querySelectorAll('button');
// calcButtons.forEach(calcButton => calcButton.addEventListener('click', function(e){
//     let currentOperand = document.querySelector('.current-operand');
//     let buttonValue = calcButton.innerHTML;
//     let currentNum = currentOperand.textContent;

//     if (buttonValue == 'AC'){
//         currentOperand.textContent = '';

//     } else if (buttonValue == '=') {
//         currentOperand.textContent += buttonValue;
        
//             let firstNum = currentNum.substr(0, currentNum.indexOf('+'));
//             let secondNum = currentNum.split('+');

//             console.log(firstNum);
//             console.log('hello addition');
//             console.log(secondNum[1]);

//             let firstInt = parseFloat(firstNum);
//             let secInt = parseFloat(secondNum[1]);

//             let sumAdd = firstInt + secInt;

//             console.log(sumAdd);

//             currentOperand.textContent = `${sumAdd}`;
        



//     } else {
//     currentOperand.textContent += buttonValue;
//     console.log(buttonValue);
//     };
// }))

// // break ------------------------------------------------------------------


// function doCalculation(firstNum,operatorSymbol,secondNum){
//     if (operatorSymbol == '+'){
//         console.log(firstNum + secondNum);
//     } else if (operatorSymbol == '÷') {
//         console.log(firstNum/secondNum);
//     } else if (operatorSymbol == '-'){
//         console.log(firstNum - secondNum);
//     } else if (operatorSymbol == '*'){
//         console.log(firstNum * secondNum);
//     } else 
//     console.log('something broke');

// }

// let resultMultiply = doCalculation(4,'*',2);
// let resultDivide = doCalculation(16,'÷',4);
// let resultMinus = doCalculation(100,'-',2);
// let resultAdd = doCalculation(3,'+',3);


// function doAddition(firstNum,secondNum){
//     console.log(firstNum + secondNum);
// }

// function doSubtraction(firstNum,secondNum){
//     console.log(firstNum - secondNum);
// }

// function doMultiplication(firstNum,secondNum){
//     console.log(firstNum * secondNum);
// }

// function doDivision(firstNum, secondNum){
//     console.log(firstNum/secondNum);
// }




// ORIGINAL ENDS HERE //






// BELOW IS THE 2ND VERSION //


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete(){
        this.currentOperand.toString().slice(0,-1);

    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation){
        if (this.currentOperand === '') return;
        if (this.previousOperand != ''){
            this.compute();
        }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) ||  isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev/current
                break
            default:
             return;
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)){
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }

        
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null){
        this.previousOperandTextElement.innerText = 
        `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }

    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
})
