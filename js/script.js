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
    return (b!=0)? a/b:'Blackhole Initiated';
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

function dotChecker(toCheck){
    let dot = document.querySelector('#dot');
    for(let i = 0; i<toCheck.length;i++){
        if(toCheck.charAt(i)=='.'){
            dot.disabled = true;
        }
    }
}

function toDisplay(e){
    let display = document.querySelector('#display');
    if(e.type =='click'){
    display.textContent+=e.target.textContent;}
    else{
        display.textContent = e;
    }
    
    dotChecker(display.textContent);

} 

function toClear(){
    let display = document.querySelector('#display');
    display.textContent = '';
    a='';
    b='';
    total = '';
}

function reverse(string){
    let split = string.split('');
    let reversed = split.reverse();
    let reversedString = reversed.join('');

    return parseFloat(reversedString);
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
        total = operate(a,b,lastOperator);
        a=total;     
    }
    lastOperator = operator; 
}


function displayTotal(e){
    if(typeof(lastOperator)!='string'){
        toDisplay('Invalid Syntax');
        return 0;
    }
    saveValue(e);
    toDisplay(total);
}

function deleteCharacter(e){
    let display = document.querySelector('#display');
    let newString = display.textContent;

    display.textContent = newString.substr(0,newString.length-1);
}
const displayNumber = document.querySelectorAll('.number');
displayNumber.forEach (button => button.addEventListener('click',toDisplay));

const clear = document.querySelector('#clear');
clear.addEventListener('click',toClear);

const operationPressed = document.querySelectorAll('.operation');
operationPressed.forEach (button => button.addEventListener('click',saveValue));

const equals = document.querySelector('#equals');
equals.addEventListener('click',displayTotal);

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click',deleteCharacter)
