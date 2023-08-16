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

console.log(operate(20,5,divide));

let firstNum;
let secondNum;
let operator;