//For Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";  

var randomImagesSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

//For Dice 2
var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

// For Winning Conditon
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}

else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}