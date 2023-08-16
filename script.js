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


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        num.textContent += button.textContent;
        display.appendChild(num);
        displayValue = num.textContent;
        console.log(displayValue);



    });

});


