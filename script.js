function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    // Put your code for the exercises here.
     button.addEventListener("click", onclick)
     abortMission.addEventListener("mouseover", onCursor)
     abortMission.addEventListener("mouseout", onCursorOut)
     abortMission.addEventListener("click", onclickAbortMission)
      function onclick() {
        // document.getElementById("liftoffButton").innerHTML="Houston , We //have lift off";
        paragraph.innerHTML="Houston , We have lift off";
      }
      ///
    
    function onCursor (){
      document.getElementById("abortMission")
       {
        document.body.style.backgroundColor = "red";
    }}
     function onCursorOut (){
      document.getElementById("abortMission")
       {
        document.body.style.backgroundColor = "";
    }    
}
    function onclickAbortMission() {    
         document.getElementById("abortMission")
            var txt;
            var r = confirm("Are you sure you want to abort the mission?.");
            if (r == true) {
               paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
              
            } else {
              paragraph.innerHTML = "You pressed Cancel!";
  
            }     
        
      }
}
window.addEventListener("load", init);