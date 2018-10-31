var numsq = 6;
var colors = generateRandomColor(numsq);

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var resetbtn = document.querySelector("#reset");

var modebtn = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

init();

function init(){

	setmode();
	setsquares();
	reset();
}


function setmode(){

	for(var i = 0; i < modebtn.length; i++){

	modebtn[i].addEventListener("click", function(){
		
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		
		this.classList.add("selected");

		if( this.textContent === "Easy") 
			{
				numsq = 3; 
			} 
		else { numsq = 6;}

		reset();
	});
}
}


//check whether correct square selected
function setsquares() {

	for( var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){

		 var colorClicked = this.style.backgroundColor;

		 if(colorClicked === pickedColor){
		 	messageDisplay.textContent = "CORRECT!";
		 	colorChange(pickedColor);
		 	h1.style.backgroundColor = pickedColor;
		 	resetbtn.textContent = "PLAY AGAIN?";
		 } 
		 else {
		 	this.style.backgroundColor = "#232323";
		 	messageDisplay.textContent = "TRY AGAIN";
		 }
	});
}
}



function reset() {

	colors = generateRandomColor(numsq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Color";
	messageDisplay.textContent = "";

for(var i = 0; i < squares.length; i++) {

	if( colors[i] ) {

		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];

	} else {
		squares[i].style.display = "none";
	}
}
}


//when new color is requested
resetbtn.addEventListener("click", function(){
reset();
});






//change the color of all squares to the picked color
function colorChange(color) {
	 for(var i=0; i < squares.length; i++)
	 {
	 	squares[i].style.backgroundColor = color;
	 }
}

//generate color to be guessed
function pickColor(){

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generate random color for the options
function generateRandomColor(num){

	var arr = [];

	for( var i=0; i<num; i++){
	arr.push(randomColor());
	}
	return arr;
}

//generate random rgb sequence for generating random colors
function randomColor() {

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}