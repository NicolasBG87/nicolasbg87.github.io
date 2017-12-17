
// Store value selected by user 
let pomodoroTimer = parseInt(document.getElementById("timer").innerHTML);
// Create switch that will be used to stop the counter from running
let pomodoroSw = "off";
let audio = new Audio('beep.mp3');

// Subtract function for timer starting point
sub.onclick = function(){
  // Allow using this function only if the counter is not running
  if(pomodoroSw === "off"){
    pomodoroTimer -= 1;
    // Grab our HTML timer and stopwatch elements and decrement them by 1 for each click
    document.getElementById("timer").innerHTML = pomodoroTimer;
    document.getElementById("stopwatch").innerHTML = pomodoroTimer + ":00";
    // Prevent the timer from going below 1
    if (pomodoroTimer === 0){
      // If timer becomes 0, it brings it back up to 1
      pomodoroTimer += 1;
      alert("Time is relative.. but not THAT relative :D");
      // Update our HTML to match mytimer variable
      document.getElementById("timer").innerHTML = pomodoroTimer;
      document.getElementById("stopwatch").innerHTML = pomodoroTimer + ":00";
    }
  }
}

// Addition function for timer starting point
add.onclick = function(){
  // Create switch that will be used to stop the counter from running
  if(pomodoroSw === "off"){
    pomodoroTimer += 1;
    // Grab our HTML timer and stopwatch elements and increment them by 1 for each click
    document.getElementById("timer").innerHTML = pomodoroTimer;
    document.getElementById("stopwatch").innerHTML = pomodoroTimer + ":00";
    // Prevent the timer from going above 60
    if (pomodoroTimer >= 60){
      // If timer becomes 60, it brings it back 59
      pomodoroTimer -= 1;
      alert("Who on earth would make pomodoro longer than one hour?!");
      // Update our HTML to match mytimer variable
      document.getElementById("timer").innerHTML = pomodoroTimer;
      document.getElementById("stopwatch").innerHTML = pomodoroTimer + ":00";
    }
  } 
}

// Countdown function
start.onclick = function(){
  // Prevents starting the function while it's already running
  if(pomodoroSw === "off"){
    let stopwatch = setInterval (time, 1000); // 1000ms = 1s; meaning we run this function every 1 sec
    pomodoroSw = "on";  
    pomodoroTimer *= 60; // mytimer is acting like a minute on our html, we gotta transform it to seconds for itteration
    function time(){
      pomodoroTimer -= 1; // Every second we decrement by one
      if(pomodoroTimer < 1 || pomodoroSw === "off"){ // If countdown finishes (reaches 0) or someone pushes off on the switch (e.g. Reset button)
        audio.play();
        clearInterval(stopwatch); // Stops the countdown
        pomodoroSw = "off"; // Puts the switch to off so it doesn't start counting again on it's own
        pomodoroTimer = document.getElementById("timer").innerHTML; // Transform timer back into minutes
        document.getElementById("stopwatch").innerHTML = pomodoroTimer + ":00";
      }
      if(pomodoroTimer % 60 >= 10 && pomodoroSw === "on"){ // If seconds are greater than 10 and switch is on, print mins+sec
        document.getElementById("stopwatch").innerHTML = Math.floor(pomodoroTimer/60)+ ":" + Math.floor(pomodoroTimer%60);
      }
      else if(pomodoroTimer % 60 < 10 && pomodoroSw === "on"){ // If seconds are less than 10 and switch is on, print mins+"0"+sec so it doesn't look like "3:1"
        document.getElementById("stopwatch").innerHTML = Math.floor(pomodoroTimer/60)+ ":" + "0" + Math.floor(pomodoroTimer%60);
      }
      else { // If switch is off, print mins+":00" so it doesn't look like "0:25"
        document.getElementById("stopwatch").innerHTML = pomodoroTimer + ":00";
      }
    }
  }
}

// Reset countdown timer
reset.onclick = function (){
  pomodoroTimer /= 60; // Bring timer back to minutes
  pomodoroTimer = 25;
  pomodoroSw = "off"; // Turn the switch off to stop countdown
  // Update our HTML with new values
  document.getElementById("timer").innerHTML = 25;
  document.getElementById("stopwatch").innerHTML = "25:00";
}

/* FUTURE FEATURES:
# Add sound when timer runs out
*/