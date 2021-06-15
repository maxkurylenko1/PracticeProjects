let numBtnsArr = document.getElementsByClassName("numberBtn");
let operatorBtnsArr = document.getElementsByClassName("operatorBtn");
let resultSpan = document.getElementById("result");
let toolBtnsArr = document.getElementsByClassName("toolsBtn");

let tmpNums = [];
let arrInd = 0;
let numFlag = false;
let tmpResult = "";

for (let i = 0; i < numBtnsArr.length; i++) {
    numBtnsArr[i].addEventListener("click", function clickNum() {

        if (numFlag) {
            arrInd++;
            if (tmpNums.length - arrInd == 0) {
                tmpNums[arrInd] = numBtnsArr[i].textContent;
            } else {
                tmpNums[arrInd] += numBtnsArr[i].textContent;
            }
            console.log(tmpNums);
            numFlag = false;
        } else {
            if (tmpNums.length - arrInd == 0) {
                tmpNums[arrInd] = numBtnsArr[i].textContent;
            } else {
                tmpNums[arrInd] += numBtnsArr[i].textContent;
            }
            console.log(tmpNums);
        }
        result.textContent += numBtnsArr[i].textContent;
    });
};

for (let i = 0; i < operatorBtnsArr.length - 1; i++) {
    operatorBtnsArr[i].addEventListener("click", function clickOper() {0

        let lastInd = tmpNums.length-1;

        console.log(tmpNums[lastInd]);

        if (tmpNums.length > 0) {
            if (tmpNums[lastInd] == "+" || tmpNums[lastInd] == "-" || tmpNums[lastInd] == "*" || tmpNums[lastInd] == "/") {
                result.textContent = "";
                tmpNums.splice(0, tmpNums.length);
                arrInd = 0;
                tmpResult = "";
            } else {
                arrInd++;
                tmpNums.push(this.textContent);
                arrInd++;
                result.textContent += operatorBtnsArr[i].textContent;
            }
        };
    });
};

operatorBtnsArr[4].addEventListener("click", () =>{

    let lastInd = tmpNums.length-1;

    for (let i = 0; i < tmpNums.length; i++) {  

        let a = +tmpNums[lastInd-2];
        let b = +tmpNums[lastInd];

        if (!Number.isInteger(a)){
            clearResult();
            return;
        }

        if (!Number.isInteger(b)){
            clearResult();
            return;
        }

        if (tmpNums.length > 1) {
            switch (tmpNums[lastInd-1]) {
                case "+":
                    tmpResult = a+b;
                    break;
                case "-":
                    tmpResult = a-b;
                    break;
                case "*":
                    tmpResult = a*b;
                    break;
                case "/":
                    tmpResult = a/b;
                    break;
            };
        }
    };     
    result.textContent = tmpResult;
    tmpNums.push(String(tmpResult));
    arrInd++;

});

toolBtnsArr[0].addEventListener("click", () => {
    clearResult();
});


function clearResult () {
    result.textContent = "";
    tmpNums.splice(0, tmpNums.length);
    arrInd = 0;
    tmpResult = "";
};