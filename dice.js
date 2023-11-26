var p1="PLAYER 1";
var p2="PLAYER 2";
var score1=0;
var score2=0;

function names(){
    p1=prompt("Enter name of player1");
    p2=prompt("Enter name of player1");
document.querySelectorAll("p")[0].innerHTML=p1;
document.querySelectorAll("p")[1].innerHTML=p2;
document.querySelectorAll("p")[2].innerHTML=(p1+" : "+score1);
document.querySelectorAll("p")[3].innerHTML=(p2+" : "+score2);

}


function roll(){
 setTimeout(function(){
var ran1=Math.floor(Math.random()*6)+1;
var img1="./images/dice"+ran1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);
var ran2=Math.floor(Math.random()*6)+1;
var img2="./images/dice"+ran2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);
 
if (ran1>ran2){
    document.querySelector("h1").innerHTML=(p1+" WINS!");
    score1=score1+ran1;
    document.querySelectorAll("p")[2].innerHTML=(p1+" : "+score1);
}
else if (ran1<ran2){
    document.querySelector("h1").innerHTML=(p2+" WINS!");
    score2=score2+ran2;
    document.querySelectorAll("p")[3].innerHTML=(p2+" : "+score2);
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
    score1=score1+ran1;
    score2=score2+ran2;
    document.querySelectorAll("p")[2].innerHTML=(p1+" : "+score1);
    document.querySelectorAll("p")[3].innerHTML=(p2+" : "+score2);

}
},500);
}
