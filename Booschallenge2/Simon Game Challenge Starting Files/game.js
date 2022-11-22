// // alert("working")
// let gamePattern = [];
// let started = false;
// let userClickedPattern = [];
// let level = 0;
// var length = gamePattern.length;
// let buttonColors = ["red", "blue", "green", "yellow"];


// $(document).keypress(function(){
//     if(!started){
//         $('#level-title').text("level" + level) ;
//         started = true;
//     }
// });



// function nextSequence() {
//     level ++;
//     $("#level-title").text("level "+ level);
//     let randomNo = Math.floor(Math.random() * 3) + 1;
//     // console.log(randomNo)
//     let randomChoosenColor = buttonColors[randomNo];

//     gamePattern[length] = randomChoosenColor;
//     gamePattern.push(randomChoosenColor);

//     $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
//     // var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
//     // audio.play();
//     playSound(randomChoosenColor);
// }



// $(".btn").click(()=>{
//     let userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor);

//     playSound(userChosenColor);
//     animatePress(userClickedPattern.length - 1);
// });

// function checkAnswer(currentLevel){

//     if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
//         if(userClickedPattern.length === gamePattern.length){
//             setTimeout(()=>{
//                 nextSequence();
//             }, 1000);
//         }
//     }
//     else{
//         playSound("wrong");
//         $("body").addClass("game-over");
//         $("#level-title").text("Game Over, Press any key to restart");

//         setTimeout(()=>{
//             $("body").removeClass("game-over");
//         }, 200);
//         startOver();
//     }
// }


// function playSound(name) {
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();
//   }




// function startOver(){
//     level = 0; 
//     gamepattern = [];
//     started = false;
// }








var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
