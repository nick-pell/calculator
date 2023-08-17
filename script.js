function add(a,b){
    return a + b;

}

function subtract(a,b){
    return a - b;

}

function multiply(a,b){
    return a * b;

}

function divide(a,b){
    return a / b;

}

function operate(firstNum, secondNum, operator){
    return window[operator](firstNum,secondNum);
}



let firstNum;
let secondNum;
let operatorID;
let operatorText;
let displayValue;



let display = document.querySelector('.display-container');
let num = document.createElement('p');
num.classList.add('display');



// listen for number presses
const container = document.querySelector('.number-buttons');
const buttons = container.querySelectorAll('button');
buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        num.textContent += button.textContent;
        display.appendChild(num);
        displayValue = num.textContent;

    });

});


// listen for clear button
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    num.textContent = "";
    display.appendChild(num);
    displayValue = "";
});


// listen for operation buttons
const opContainer = document.querySelector('.operation-buttons');
const opButtons = opContainer.querySelectorAll('button');
opButtons.forEach((opButton) => {
    
    opButton.addEventListener('click', () => {

        operatorID = opButton.id;
        operatorText = opButton.textContent;


        num.textContent += opButton.textContent;
        displayValue = num.textContent;
        display.appendChild(num);
    });
});

// listen for equal button
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    
    let nums = displayValue.split(operatorText);
    console.log(nums);
    firstNum = parseInt(nums[0]);
    secondNum = parseInt(nums[1]);
    let result = operate(firstNum,secondNum,`${operatorID}`);

    num.textContent = result;
    display.appendChild(num);

});



