var colors=[];
var pickedColor
var num_squares =6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#ColorDisplay");
var messageDiaplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init();
function init(){
	setup_mode();
	setup_squares();
	rst();
}


function setup_mode(){
	for(var i =0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		//figure out how many squares to show
		//pick new colors
		//pick a new picked color
		//update page
		this.textContent==="EASY"?num_squares=3:num_squares=6;
		rst();
	});
}
}

function setup_squares(){
	for(var i=0;i<squares.length;i++){
	//add click listener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor ===pickedColor){
			messageDiaplay.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="PLAY AGAIN?"

		}
		else{
			this.style.backgroundColor="#232323";
			messageDiaplay.textContent="Try Again!";
		}
	}) 
}
}


function rst(){
	colors= generateRandomColors(num_squares);
//pick new random from array
pickedColor = pickColor();
//change colorDisplay to math picked colors
ColorDisplay.textContent = pickedColor;
//cange colors of squares
for(var i = 0;i<squares.length;i++){
	if(colors[i]){
	squares[i].style.display="block";
	squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none";
	}	
}

//change the background when winning to original color
h1.style.backgroundColor="steelblue"
messageDiaplay.textContent="";
resetButton.textContent="New Colors"
}

resetButton.addEventListener("click",function(){
//generate all new colors
rst();
})

// easyButton.addEventListener("click", function(){
// 	hardButton.classList.remove("selected");
// 	easyButton.classList.add("selected");
// 	num_squares=3
// 	colors= generateRandomColors(num_squares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
	
// })

// hardButton.addEventListener("click", function(){
// 	easyButton.classList.remove("selected");
// 	hardButton.classList.add("selected");
// 	num_squares=6
// 	colors= generateRandomColors(num_squares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";
// 		}
// 	}
// })

colorDisplay.textContent = pickedColor;



function changeColor(color){
	for (var i =0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColors(number){
	//make an array
	var arr = [];
	//ad num random colors to array
	for(var i=0;i<number;i++)
	{
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0-255;
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255;
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0-255;
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


