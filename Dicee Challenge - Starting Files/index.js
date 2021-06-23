//First image
var randomNumber1=Math.ceil(Math.random() * 6)+1; //random number generator 1-6
var randomImage1="images/dice"+ randomNumber1 +".png"; // Changing a src of random chosen image
var putImage=document.querySelectorAll("img")[0];
var imageSource=putImage.setAttribute("src",randomImage1);

//Second image

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
var putImage2=document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 won!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 won!";
}else{document.querySelector("h1").innerHTML="Draw!"}
