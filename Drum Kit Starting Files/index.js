
 
 var numberOfDrumsSelected = document.querySelectorAll(".drum").length;
 

 for (var i = 0; i<numberOfDrumsSelected; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){

                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            
           
    });

 }


//document.querySelector("button").;

