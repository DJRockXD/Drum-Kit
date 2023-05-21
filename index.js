// Detecting keyboard.

document.addEventListener('keydown', function(e) {
  makeSound(e.key);
})

// Detecting clicks.

for (let i = 0; i < document.querySelectorAll(".drums").length; i++) {
  document.querySelectorAll(".drums")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
  });
  document.querySelectorAll(".drums")[i].addEventListener("mousedown", function() {
    animate(this);
  })
  document.querySelectorAll(".drums")[i].addEventListener("mouseup", function() {
    animate(this);
  })
}

function makeSound(key) {
  switch (key) {
    case 'a':
      var audio = new Audio("sounds/crash.mp3");
      break;

    case 's':
      var audio = new Audio("sounds/snare.mp3");
      break;

    case 'd':
      var audio = new Audio("sounds/kick-bass.mp3");
      break;

    case 'f':
      var audio = new Audio("sounds/tom-1.mp3");
      break;

    case 'j':
      var audio = new Audio("sounds/tom-2.mp3");
      break;

    case 'k':
      var audio = new Audio("sounds/tom-3.mp3");
      break;

    case 'l':
      var audio = new Audio("sounds/tom-4.mp3");
      break;

    default:
      console.log(key);
  }
  audio.play();
}

// Animation for buttons: when button pressed OR when key pressed, toggle .press .

function animate(button) {
  button.classList.toggle("pressed");
}
