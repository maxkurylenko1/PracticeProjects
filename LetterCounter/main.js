let inputCount = document.getElementById("inputText");

inputCount.addEventListener("input", function(event){

number = inputCount.value.length;
console.log(event.keyCode)
document.getElementById("count").innerHTML = number;
});




