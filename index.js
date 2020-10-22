var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//alert(randomNumber1);

document.querySelector("img").setAttribute("src", "dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1🤩 is won.";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2😎 is won.";
} else {
    document.querySelector("h1").innerHTML = "Game is drawn❌.";
}