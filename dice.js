var player1= Math.floor(Math.random()*6) + 1;
var player2= Math.floor(Math.random()*6) + 1;


dice1 ="images/dice"+player1+".png";
dice2 ="images/dice"+player2+".png";
if(player1>player2) {
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(player1 === player2) {
  document.querySelector("h1").innerHTML="Draw!";
}
else
  document.querySelector("h1").innerHTML="Player 2 wins!";


document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);
