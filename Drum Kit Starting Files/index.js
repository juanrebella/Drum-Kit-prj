
 
 var numberOfDrumsSelected = document.querySelectorAll(".drum").length;
 

 for (var i = 0; i<numberOfDrumsSelected; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){


      var buttonInnerHTML = this.innerHTML;

         switch (buttonInnerHTML) {
                  case "w":
                      var audio = new Audio("sounds/crash.mp3");
                      audio.play();
                  break;

                  case "a":
                     var audio = new Audio("sounds/tom-2.mp3");
                     audio.play();
                  break;   

                  case "s":
                     var audio = new Audio("sounds/snare.mp3");
                     audio.play();
                  break;

                  case "d":
                     var audio = new Audio("sounds/tom-4.mp3");
                     audio.play();
                  break;

                  case "j":
                     var audio = new Audio("sounds/tom-3.mp3");
                     audio.play();
                  break; 

                  case "k":
                     var audio = new Audio("sounds/tom-1.mp3");
                     audio.play();
                  break;

                  case "l":
                     var audio = new Audio("sounds/kick-bass.mp3");
                     audio.play();
                  break;


                  default:
         }
         
            
           
    });


    function HouseKeeper1 (name, age, hasWorkPermit, languages){
	
      this.name = name;
      this.age = age;
      this.hasWorkPermit = hasWorkPermit;
      this.languages = languages;
   
   }

    var houseKeeper1 = new HouseKeeper1("Donna", 19, true, ["French", "English", "Italian"] );
    var houseKeeper2 = new HouseKeeper1("Peter", 25, true, ["French", "Spanish", "Italian"] );



 }


//document.querySelector("button").;

