let minusButton = document.getElementById("minusButton");
let plusButton = document.getElementById("plusButton");

let number = 0;
let numberTag = document.getElementById("number");



plusButton.addEventListener("click", function(){
    if (number < 5){
        number++;
    }
    numberTag.innerHTML = number;
})

minusButton.addEventListener("click", function(){
    if (number > 0){
        number--;
    }
    numberTag.innerHTML = number;
})
