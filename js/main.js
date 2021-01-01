var colors = getRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",  function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
})

hardBtn.addEventListener("click",  function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
})


resetButton.addEventListener("click", function(){
    // new colors
    colors = getRandomColors(6);
    //pick a new random color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change colors
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listners to squares
    squares[i].addEventListener("click", function(){
        // getting clicked color
        var clickedColor = this.style.backgroundColor;
        // comparing click and picked
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColors(color) {
    for (var i = 0; i <squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++) {
        //get random color
        arr.push(randomColor()); 
    }

    // return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);   
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}