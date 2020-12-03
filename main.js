
const calcButtons = document.querySelectorAll('button');
calcButtons.forEach(calcButton => calcButton.addEventListener('click', function(e){
    let buttonValue = calcButton.innerHTML;
    let currentOperand = document.querySelector('.current-operand');

    if (buttonValue == 'AC'){
        currentOperand.textContent = '';

    } else if (buttonValue == 'DEL') {
        currentOperandText = 

        currentOperand.textContent = 'deletedstring';
    }
    
    
    
    else {
    currentOperand.textContent += buttonValue;
    console.log(buttonValue);
    };
}))




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
