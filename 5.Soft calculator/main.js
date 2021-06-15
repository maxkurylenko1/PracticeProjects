let firstNumInp = document.getElementById("firstNumInput");
let secondNumInp = document.getElementById("secondNumInput");
let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let divisionBtn = document.getElementById("divisionBtn");

let firNum;
let secNum;
let result;

firstNumInp.addEventListener("input", () => {
    firNum = firstNumInp.value;
});

secondNumInp.addEventListener("input", () => {
    secNum = secondNumInp.value;
});



plusBtn.addEventListener("click", () => {

    result = plusOperator(firNum, secNum);
    document.getElementById("result").textContent = result;
});

minusBtn.addEventListener("click", () => {

    result = minusOperator(firNum, secNum);
    document.getElementById("result").textContent = result;
});

multiplyBtn.addEventListener("click", () => {

    result = multiplyOperator(firNum, secNum);
    document.getElementById("result").textContent = result;
});

divisionBtn.addEventListener("click", () => {

    result = divisionOperator(firNum, secNum);
    document.getElementById("result").textContent = result;
});



function plusOperator(a, b) {
    a = Number(a);
    b = Number(b);
    return a+b;
}

function minusOperator(a, b) {
    a = Number(a);
    b = Number(b);
    return a-b;
}

function multiplyOperator(a, b) {
    a = Number(a);
    b = Number(b);
    return a*b;
}

function divisionOperator(a, b) {
    a = Number(a);
    b = Number(b);
    return a/b;
}



