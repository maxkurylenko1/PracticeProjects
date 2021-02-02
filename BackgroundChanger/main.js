let button = document.getElementById("changerButton");

button.addEventListener("click", function(){changeBackgroundColor();});

function changeBackgroundColor(){
    let x = Math.random()*255;
    let y = Math.random()*255;  
    let z = Math.random()*255;
    button.style.color = "rgb("+x+","+y+","+z+")";
    document.body.style.backgroundColor = "rgb("+x+","+y+","+z+")";
}
