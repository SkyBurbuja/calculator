let a;
let b;
let lastOperator;
let total=0;


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    switch(operator){
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case 'x':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;                    

    } 
}


function toDisplay(e){
    let display = document.querySelector('#display');
    if(e.type =='click'){
    display.textContent+=e.target.textContent;}
    else{
        display.textContent = e;
    }


} 

function toClear(){
    let display = document.querySelector('#display');
    display.textContent = '';
}

function reverse(string){
    let split = string.split('');
    let reversed = split.reverse();
    let reversedString = reversed.join('');

    return parseInt(reversedString);
}

function saveValue(e){
    let display = document.querySelector('#display');
    let currentDisplay = display.textContent;
    display.textContent='';
    let i = currentDisplay.length-1;
    let value = '';
    

    while(i>=0){
        value+=currentDisplay.charAt(i);
        i--;
    }


    let operator = e.target.textContent;
    value = reverse(value);
    if(typeof(a)!='number'){
        a = value;
    }
    else{
        b=value;
        total += operate(a,b,lastOperator);
        a=b;     
    }
    console.log(lastOperator);
    lastOperator = operator;
    console.log(operator);
    if(typeof(b)=='number'){
    toDisplay(total);}
    
}

const displayNumber = document.querySelectorAll('.number');
displayNumber.forEach (button => button.addEventListener('click',toDisplay));

// const displayOperation = document.querySelectorAll('.operation');
// displayOperation.forEach (button => button.addEventListener('click',toDisplay));



const clear = document.querySelector('#clear');
clear.addEventListener('click',toClear);

const operationPressed = document.querySelectorAll('.operation');
operationPressed.forEach (button => button.addEventListener('click',saveValue));
