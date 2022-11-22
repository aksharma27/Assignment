// alert("working")
let gamePattern = [];
let started = false;
let userClickedPattern = [];
let level = 0;
var length = gamePattern.length;
let buttonColors = ["red", "blue", "green", "yellow"];





function nextSequence() {
    level ++;
    $("#level-title").text("level "+ level);
    let randomNo = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNo)
    let randomChoosenColor = buttonColors[randomNo];

    gamePattern[length] = randomChoosenColor;
    gamePattern.push(randomChoosenColor);
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

$(".btn").click(()=>{
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(()=>{
                nextSequence();
            }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press any key to restart");

        setTimeout(()=>{
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}




function startOver(){
    level = 0; 
    gamepattern = [];
    started = false;
}