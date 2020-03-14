var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var paragraph = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;


//make the buttons add score in the span created
// var gameOver should switch to true at 5 and then false again once reset is clicked
//change color when 5 is reached with css file

p1Button.addEventListener("click", function(){
  if (!gameOver){
	p1Score ++;
	if (p1Score === winningScore){
		p1Display.classList.add("winner")
		gameOver = true;
	}
	p1Display.textContent = p1Score;
}
	
});

p2Button.addEventListener("click", function(){
   if (!gameOver){
	p2Score ++;
	if (p2Score === winningScore){
		p2Display.classList.add("winner")
		gameOver = true;
	}
	p2Display.textContent = p2Score;
}
});

// reset button gamover back false, no greeen and bacl to 0
// resetButton.addEventListener("click", function(){
// 	p1Score = 0;
// 	p2Score = 0;
// 	p1Display.textContent = 0;
// 	p2Display.textContent = 0;
// 	p1Display.classList.remove("winner");
// 	p2Display.classList.remove("winner");
// 	gameOver = false;

// });

// you can also just call reset()
resetButton.addEventListener("click", function(){
	reset();
});


//to reset when we change the input during the game
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;

}

//input the score we want and change the rest base on the choice
//we use change instead of click so even if we type it works
// you get the value of input with numInput.value. Make sure you convert it in Number
numInput.addEventListener("change", function(){
winningScoreDisplay.textContent = numInput.value;
winningScore = Number(numInput.value);
reset();
})



