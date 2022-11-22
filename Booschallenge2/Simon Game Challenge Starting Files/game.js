// alert("working")
let gamePattern = [];
let strted = false;
var length = gamePattern.length;
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNo = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNo)
    let randomChoosenColor = buttonColors[randomNo];

    gamePattern[length] = randomChoosenColor;
    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
    audio.play();
}

$(document).keypress(function(){
    if(!st)
})




function startOver(){
    level = 0; 
    gamepattern = [];
    started = false;
}