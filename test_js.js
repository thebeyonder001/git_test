var act = document.querySelectorAll(".drum");
for(var i=0;i<act.length;i++){
  act[i].addEventListener("click", function () {
      buttonInnerHTML= this.innerHTML;
      makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event){
    makeSound(event.key);
  });

function makeSound(key){
var myAudio_w = document.getElementById('w');
var myAudio_s = document.getElementById('s');
var myAudio_a = document.getElementById('a');
var myAudio_d = document.getElementById('d');

  switch (key){
    case "w":
    //   var tom1 = new Audio("sounds/w.mid");
    //   tom1.play();
    myAudio_w.play();
      break;

    case "a":
    //   var tom2 = new Audio("sounds/a.mid");
    //   tom2.play();
    myAudio_s.play();
      break;

    case "s":
    //   var tom3 = new Audio("sounds/s.mid");
    //   tom3.play();
    myAudio_a.play();
      break;
    case "d":
    //   var tom4 = new Audio("sounds/d.mid");
    //   tom4.play();
    myAudio_d.play();
      break;

    default: console.log(buttonInnerHTML);

  }
}