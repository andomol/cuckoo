

//Detecting button press


var matrix = document.querySelectorAll(".stricking");

for (var i = 0; i < matrix.length; i++) {
  matrix[i].addEventListener("click", function() {

    var innerButtonHtml = this.innerHTML;

    makeSound(innerButtonHtml);

    activeButton(innerButtonHtml);
  });
  matrix[i].addEventListener("touchstart", function() {

    var innerButtonHtml = this.innerHTML;

    makeSound(innerButtonHtml);

    activeButton(innerButtonHtml);
  });
}

//Detecting keyboard press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  activeButton(event.key);

});

function makeSound(key) {
  switch (key) {
    case "1":

      var cuckoo1 = new Audio("sounds/cuckoo1.wav");
      cuckoo1.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 3000);
      break;
    case "2":

      var cuckoo2 = new Audio("sounds/cuckoo2.wav");
      cuckoo2.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 3000);
      break;
    case "3":

      var cuckoo3 = new Audio("sounds/cuckoo3.wav");
      cuckoo3.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 4000);
      break;
    case "4":

      var cuckoo4 = new Audio("sounds/cuckoo4.wav");
      cuckoo4.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 5000);
      break;
    case "5":

      var cuckoo5 = new Audio("sounds/cuckoo5.wav");
      cuckoo5.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 6000);
      break;
    case "6":

      var cuckoo6 = new Audio("sounds/cuckoo6.wav");
      cuckoo6.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 7000);
      break;
    case "7":

      var cuckoo7 = new Audio("sounds/cuckoo7.wav");
      cuckoo7.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 7000);
      break;
    case "8":

      var cuckoo8 = new Audio("sounds/cuckoo8.wav");
      cuckoo8.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 8000);
      break;
    case "9":

      var cuckoo9 = new Audio("sounds/cuckoo9.wav");
      cuckoo9.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 9000);
      break;
    case "10":

      var cuckoo10 = new Audio("sounds/cuckoo10.wav");
      cuckoo10.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 9000);
      break;
    case "11":

      var cuckoo11 = new Audio("sounds/cuckoo11.wav");
      cuckoo11.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 10000);
      break;
    case "12":

      var cuckoo12 = new Audio("sounds/cuckoo12.wav");
      cuckoo12.play();
      var birdShow = document.querySelector(".bird");
      birdShow.classList.add("show")
      setTimeout(function() {
        birdShow.classList.remove("show");
      }, 10000);
      break;



    default:

  }

}

function activeButton(currentKey) {
  var keyPressed = document.querySelector(".num" + currentKey);
  keyPressed.classList.add("pressed");

  setTimeout(function() {
    keyPressed.classList.remove("pressed");
  }, 10000);

}






// var audio = new Audio ("sounds/tom-1.mp3");
// audio.play();
