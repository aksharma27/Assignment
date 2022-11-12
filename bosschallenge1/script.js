var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomNo2 = Math.floor(Math.random() * 6) + 1;

var ans1 = 6 - randomNo1;
var ans2 = 6 - randomNo2;

function result(){
    if(ans1 < ans2){
        document.querySelector("h1").innerHTML = "Player 1 Won";
    }
    else if (ans2 < ans1){
        document.querySelector("h1").innerHTML = "Player 2 Won";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";
    }
}


for(var i = 0; i < ans1; i++){
    var dice1 = document.querySelectorAll("#circle")[i];
    dice1.style.backgroundColor = "black";
}

for(var j = 0; j < ans2; j++){
    var dice2 = document.querySelectorAll("#circle2")[j];
    dice2.style.backgroundColor = "black";
}

document.querySelector(".p1").innerHTML = randomNo1;
document.querySelector(".p2").innerHTML = randomNo2;



