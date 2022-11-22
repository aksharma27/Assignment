// alert("working")
let gamePattern = [];
let started = false;
let level = 0;
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
    if(!started){
        $('#level-title').text("level" + level) ;
        started = true;
    }
});




function startOver(){
    level = 0; 
    gamepattern = [];
    started = false;
}