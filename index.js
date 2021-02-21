const title = document.querySelector('.top');
const result = document.querySelector('.result');
const numBtn = document.querySelectorAll('.num_bg input');
const clearBtn = document.querySelector('#clear');
const operatorBtn = document.querySelectorAll('.operator_bg input');

let num2Check = false;
let num1Check = false;
let currentOperator = "";
let num1 = "";
let num2 = "";

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    title.innerHTML = `${hours > 12 ? `PM ${hours -12}` : `AM ${hours}`} : ${minutes}`; 
} 

function handleReset(){
    num1 = "";
    num2 = "";
    num1Check = false;
    num2check = false;
    currentOperator = "";
    result.value ="";
}

function doOperate(){
    const intValuenum1 = parseInt(num1);
    const intValuenum2 = parseInt(num2);
    switch(currentOperator){
        case "+":
            return intValuenum1 + intValuenum2;
        case "-":
            return intValuenum1 - intValuenum2;
        case "/":
            return intValuenum1 / intValuenum2;
        case "*":
            return intValuenum1 * intValuenum2;
        default:
            return;
    }
}

function operate(){
    const operated = doOperate();
    num1 = operated;
    result.value = operated;
    num2Check = false;
    num2 = "";
    console.log(operated);
}

function handleOperator(e){
    const operation = e.target.value;
    if(num1Check === false){
        num1Check = true;
    }
    if(num1Check === true && num2Check === true){
        operate();
    }
    currentOperator = operation;
}

function handleNumber(e){
    const clickNumber = e.target.value;
    if(!num1Check){
        num1 = num1 + clickNumber;
        result.value = num1;
    }
    else{
        num2Check = true;
        num2 = num2 + clickNumber;
        result.value = num2;
    }
}

function handleIs(){
    if(num1Check === true && num2Check === true){
        operate();
    }
}

function init(){
    getTime();
    setInterval(getTime, 1000);
    numBtn.forEach(function(num){
        num.addEventListener('click', handleNumber);
    });
    clearBtn.addEventListener('click', handleReset);
    operatorBtn.forEach(function(num){
        num.addEventListener('click', handleOperator);
    });
    is.addEventListener('click', handleIs);
}

init();



