// Write your JavaScript code here.
// Remember to pay attention to page loading!
 // add load event handler to window
 window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    if (document.getElementById("takeoff") !== null) {
        alert("The takeoff element exists");
        } else {
        alert("The takeoff element does not exist");
        }

});

    function confirmReady() {
       document.getElementById("takeoff")
       if (confirm("Confirm that the shuttle is ready for takeoff.")) {
              setValues("Shuttle in flight", "blue", 10000)
        }    
        else {
             alert("You pressed Cancel!");
        } 
    }; 

    function confirmLand() {
        document.getElementById("Land");
        alert("The shuttle is landing. Landing gear engaged.");
        setValues("The shuttle has landed.", "green", -10000);    
     }; 

    function confirmAbort() {
        document.getElementById("missionAbort")
        if (confirm("Confirm that you want to abort the mission.")) {      
               setValues("Mission aborted.", "green", 5000);
         }    
         else {
              alert("You pressed Cancel Abort Mission!");
         } 
     };   
      
    function move_img(str) {
         var step = 50;
         switch(str)  {
          case "down":
            var x = document.getElementById('rocket').offsetTop;
            x = x + step;
            document.getElementById('rocket').style.top = x + 'px';
            setValues('', '', -10000);
            break;

          case "up":
            var x = document.getElementById('rocket').offsetTop;
            x = x - step;
            document.getElementById('rocket').style.top = x + 'px';
            setValues('', '',10000);
            break;

          case "left":
            var x = document.getElementById('rocket').offsetLeft;
            x = x - step;
            document.getElementById('rocket').style.left = x + 'px';
            break;

          case "right":
            var x = document.getElementById('rocket').offsetLeft;
            x = x + step;
            document.getElementById('rocket').style.left = x + 'px';
            break;
  
         }
        };

    function setValues(newValue, color, factor ) {

      if (newValue !== '') {
        document.getElementById("flightStatus").innerHTML = newValue;
      } 

      if (color !== '') {
        let target = document.querySelector("#shuttleBackground");
        target.style.backgroundColor = color;
      }

      var currentHeight =  parseInt(document.getElementById("spaceShuttleHeight").innerHTML);
      var newHeight = 0;

      if (factor > 5000) {
    //    alert ('this is 1:  ' + factor)
        newHeight = (currentHeight + factor);
       }
      
      if (factor == 5000) {
   //     alert ('this is 2: ' + factor)
        newHeight = 0;
      }
      
      if (factor < 5000) {
   //     alert ('this is 3: ' + factor)
        var  value = Math.abs(factor);
        newHeight = (currentHeight - value);
    //    alert ('this is 3 new height : ' + newHeight)
      }

//alert ('this is the' + newHeight)
      var displayHeight = parseInt(newHeight, 10);
      document.getElementById("spaceShuttleHeight").innerHTML = displayHeight;         
          
    };   
          
    
 

