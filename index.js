var buttonInstrument = document.querySelectorAll("button");

 for(var i = 0; i < buttonInstrument.length; i++){

 	

 	document.querySelectorAll("button")[i].addEventListener("click", function(){
 		var innerHtml = this.innerHTML;
 		keyPress(innerHtml);	
 		animationClass(innerHtml);
	});


	document.addEventListener("keypress", function(event){
  		keyPress(event.key);
  		animationClass(innerHtml);
  	})
  }

  function keyPress(keys) {

  	switch(keys){
 			case "w":
 			var audio = new Audio("sounds/tom-1.mp3");
			audio.play();
 			break;

 			case "a":
 			var audio = new Audio("sounds/tom-2.mp3");
			audio.play();
 			break;

 			case "s":
 			var audio = new Audio("sounds/tom-3.mp3");
			audio.play();
 			break;

 			case "d":
 			var audio = new Audio("sounds/tom-4.mp3");
			audio.play();
 			break;

 			case "j":
 			var audio = new Audio("sounds/snare.mp3");
			audio.play();
 			break;

 			case "k":
 			var audio = new Audio("sounds/crash.mp3");
			audio.play();
 			break;

 			case "l":
 			var audio = new Audio("sounds/kick-bass.mp3");
			audio.play();
 			break;

 			default :
 			break; 
 		}

  }

  function animationClass(currentKey){
  		var classNow = document.querySelector("." + currentKey);
  		classNow.classList.add("pressed");
  		setTimeout(function(){
  			classNow.classList.remove("pressed");
  		},200)
  }



