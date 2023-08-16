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
    return operator(firstNum,secondNum);
}

let firstNum;
let secondNum;
let operator;
let displayValue;


let display = document.querySelector('.display-container');
let num = document.createElement('p');
num.classList.add('display');
num.textContent = displayValue;
display.appendChild(num);

const container = document.querySelector('.number-buttons');
const buttons = container.querySelectorAll('button');


buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        num.textContent += button.textContent;
        display.appendChild(num);
        displayValue = num.textContent;

    });

});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    num.textContent = "";
    display.appendChild(num);
    displayValue = "";
});

const opContainer = document.querySelector('.operation-buttons');
const opButtons = opContainer.querySelectorAll('button');
opButtons.forEach((opButton) => {
    
    opButton.addEventListener('click', () => {
        operator = opButton.id;
        num.textContent += opButton.textContent;
        display.appendChild(num);
    });
});



