

const calcButtons = document.querySelectorAll('button');
calcButtons.forEach(calcButton => calcButton.addEventListener('click', function(e){
    let currentOperand = document.querySelector('.current-operand');
    let buttonValue = calcButton.innerHTML;
    let currentNum = currentOperand.textContent;

    if (buttonValue == 'AC'){
        currentOperand.textContent = '';

    } else if (buttonValue == '=') {
        currentOperand.textContent += buttonValue;
        
            let firstNum = currentNum.substr(0, currentNum.indexOf('+'));
            let secondNum = currentNum.split('+');

            console.log(firstNum);
            console.log('hello addition');
            console.log(secondNum[1]);

            let firstInt = parseFloat(firstNum);
            let secInt = parseFloat(secondNum[1]);

            let sumAdd = firstInt + secInt;

            console.log(sumAdd);

            currentOperand.textContent = `${sumAdd}`;
        



    } else {
    currentOperand.textContent += buttonValue;
    console.log(buttonValue);
    };
}))

// break ------------------------------------------------------------------


function doCalculation(firstNum,operatorSymbol,secondNum){
    if (operatorSymbol == '+'){
        console.log(firstNum + secondNum);
    } else if (operatorSymbol == '÷') {
        console.log(firstNum/secondNum);
    } else if (operatorSymbol == '-'){
        console.log(firstNum - secondNum);
    } else if (operatorSymbol == '*'){
        console.log(firstNum * secondNum);
    } else 
    console.log('something broke');

}

let resultMultiply = doCalculation(4,'*',2);
let resultDivide = doCalculation(16,'÷',4);
let resultMinus = doCalculation(100,'-',2);
let resultAdd = doCalculation(3,'+',3);


function doAddition(firstNum,secondNum){
    console.log(firstNum + secondNum);
}

function doSubtraction(firstNum,secondNum){
    console.log(firstNum - secondNum);
}

function doMultiplication(firstNum,secondNum){
    console.log(firstNum * secondNum);
}

function doDivision(firstNum, secondNum){
    console.log(firstNum/secondNum);
}





// console.log(calcButtons);



// Console Log the value of each of the buttons from the node list

// calcButtons.forEach(function getButtonValue(){

//     for (i=0; i<calcButtons.length; i++){
//     buttonValue = calcButtons[i].innerHTML;
//     console.log(buttonValue);
// }

// })

// calcButtons.forEach(function(){
//     calcButtons.addEventListener('click',function(e){
//         let buttonValue = calcButtons[0].innerHTML;
//         console.log(buttonValue);
//     })
// })



// from stack overflow
