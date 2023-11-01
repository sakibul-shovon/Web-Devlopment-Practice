var player = prompt("Enter your name");
var element = document.querySelector('.p-name');
element.textContent = player;

var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

var randomImg = "dice" + randomNumber1 + ".png"

var randomImgSrc = "images/" + randomImg;


var img1 = document.querySelectorAll("img")[0] ;
img1.setAttribute("src",randomImgSrc);



//second
var ran2 = Math.floor(Math.random() * 6 ) + 1;
var src2 = "images/dice" + ran2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",src2);

if(randomNumber1 > ran2){
    document.querySelector("h1").innerHTML = player + " Win!🤘 "
}
else if( ran2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Win!🤘 "
}

else{
    document.querySelector("h1").innerHTML = "DRAW ! ✋"
}
