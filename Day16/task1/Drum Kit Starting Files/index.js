// var drumButtons = document.querySelectorAll(".drum");
// for (var i = 0; i < drumButtons.length; i++) {
//   drumButtons[i].addEventListener("click", function () {
//     var buttonInnerHTML = this.innerHTML;
//     givealert(buttonInnerHTML);
//   });
// }
// document.addEventListener("keydown", function (event) {
//   givealert(event.key);
// }); 

// function givealert(key) {
//   switch (key) {
//     case "w":
//       alert("You clicked W!");
//       break;
//     case "a":
//       alert("You clicked A!");
//       break;
//     case "s":
//       alert("You clicked S!");
//       break;
//     case "d":
//       alert("You clicked D!");
//       break;
//     case "j":
//       alert("You clicked J!");
//       break;
//     case "k":
//       alert("You clicked K!");
//       break;
//     case "l":
//       alert("You clicked L!");
//       break;
//     default:
//       alert("Wrong key!")
//       break;
//   }
// }

// Detect button clicks
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});
function makeSound(key) {
  switch (key) { 
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      break;
  }
}