function shuffle() {
    var dice = document.querySelector(".box");
    var randomX = Math.floor(Math.random() * 4 + 1) * 90;
    var randomY = Math.floor(Math.random() * 4 + 1) * 90;
    var randomZ = Math.floor(Math.random() * 4 + 1) * 90;
    dice.style.transform = "rotateX(" + randomX + "deg) rotateY(" + randomY + "deg) rotateZ(" + randomZ + "deg)";
  }
  