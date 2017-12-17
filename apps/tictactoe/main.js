$(document).ready(function(){
  var symbolUser = "X"; // Default value for player
  var symbolAi = "O"; // Default value for ai
  var aiTurn = 0; // Switch used to check who's turn it is

  chooseX.onclick = function(){ // If player chooses X, assign O to ai
    symbolUser = "X";
    symbolAi = "O";
  }

  chooseO.onclick = function(){ // If player chooses O, assign X to ai
    symbolUser = "O";
    symbolAi = "X";
  }

  reset.onclick = function(){ // Reset the game
    aiTurn = 0; // Disallow ai from playing
    $("#gameover").removeClass("active"); // Remove "Game Over" message
    // Clear the board
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "";
    document.getElementById("t4").innerHTML = "";
    document.getElementById("t5").innerHTML = "";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "";
    document.getElementById("t8").innerHTML = "";
    document.getElementById("t9").innerHTML = "";
  }

  t1.onclick = function (){ // Player turn function
    if (document.getElementById("t1").innerHTML !== "X" // Check if the board spot it empty
     && document.getElementById("t1").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t1").innerHTML = symbolUser; // If it's empty, fill it with user selected symbol
      gameover(); // Check if the game over condition is met, to finish the game
      aiTurn = 1;  // Allow ai to play
      ai(symbolAi);  // Run the ai function
    }
  }
  t2.onclick = function (){
    if (document.getElementById("t2").innerHTML !== "X" 
     && document.getElementById("t2").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t2").innerHTML = symbolUser;
      gameover();
      aiTurn = 1; 
      ai(symbolAi); 
    }
  }
  t3.onclick = function (){
    if (document.getElementById("t3").innerHTML !== "X" 
     && document.getElementById("t3").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t3").innerHTML = symbolUser;
      gameover();
      aiTurn = 1; 
      ai(symbolAi); 
    }
  }
  t4.onclick = function (){
    if (document.getElementById("t4").innerHTML !== "X" 
     && document.getElementById("t4").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t4").innerHTML = symbolUser;
      gameover();
      aiTurn = 1; 
      ai(symbolAi); 
    }
  }
  t5.onclick = function (){
    if (document.getElementById("t5").innerHTML !== "X" 
     && document.getElementById("t5").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t5").innerHTML = symbolUser;
      gameover();
      aiTurn = 1; 
      ai(symbolAi); 
    }
  }
  t6.onclick = function (){
    if (document.getElementById("t6").innerHTML !== "X" 
     && document.getElementById("t6").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t6").innerHTML = symbolUser;
      gameover();
      aiTurn = 1; 
      ai(symbolAi); 
    }
  }
  t7.onclick = function (){
    if (document.getElementById("t7").innerHTML !== "X" 
     && document.getElementById("t7").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t7").innerHTML = symbolUser;
      gameover();
      aiTurn = 1; 
      ai(symbolAi); 
    }
  }
  t8.onclick = function (){
    if (document.getElementById("t8").innerHTML !== "X" 
     && document.getElementById("t8").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t8").innerHTML = symbolUser;
      gameover();
      aiTurn = 1; 
      ai(symbolAi); 
    }
  }
  t9.onclick = function (){
    if (document.getElementById("t9").innerHTML !== "X" 
     && document.getElementById("t9").innerHTML !== "O" 
     && aiTurn ===0){
      document.getElementById("t9").innerHTML = symbolUser;
      gameover();
      aiTurn = 1; 
      ai(symbolAi); 
    }
  }

  function gameover(){ // Game Over conditions check, for every possible combination
    if ((t1.innerHTML + t2.innerHTML + t3.innerHTML) === "XXX" // If fields 1,2,3 are filled with the same symbol, end the game
     || (t1.innerHTML + t2.innerHTML + t3.innerHTML) === "OOO"){
      $("#gameover").addClass("active"); // Once the condition is met, finish the game
    }
    if ((t1.innerHTML + t5.innerHTML + t9.innerHTML) === "XXX" 
     || (t1.innerHTML + t5.innerHTML + t9.innerHTML) === "OOO"){
      $("#gameover").addClass("active");
    }
    if ((t1.innerHTML + t4.innerHTML + t7.innerHTML) === "XXX" 
     || (t1.innerHTML + t4.innerHTML + t7.innerHTML) === "OOO"){
      $("#gameover").addClass("active");
    }
    if ((t2.innerHTML + t5.innerHTML + t8.innerHTML) === "XXX" 
     || (t2.innerHTML + t5.innerHTML + t8.innerHTML) === "OOO"){
      $("#gameover").addClass("active");
    }
    if ((t3.innerHTML + t6.innerHTML + t9.innerHTML) === "XXX" 
     || (t3.innerHTML + t6.innerHTML + t9.innerHTML) === "OOO"){
      $("#gameover").addClass("active");
    }
    if ((t4.innerHTML + t5.innerHTML + t6.innerHTML) === "XXX" 
     || (t4.innerHTML + t5.innerHTML + t6.innerHTML) === "OOO"){
      $("#gameover").addClass("active");
    }
    if ((t7.innerHTML + t8.innerHTML + t9.innerHTML) === "XXX" 
     || (t7.innerHTML + t8.innerHTML + t9.innerHTML) === "OOO"){
      $("#gameover").addClass("active");
    }
    if ((t3.innerHTML + t5.innerHTML + t7.innerHTML) === "XXX" 
     || (t3.innerHTML + t5.innerHTML + t7.innerHTML) === "OOO"){
      $("#gameover").addClass("active");
    }
  }

  function ai(x){ // My first AI... dumb af but works! :D... Working on a better solution!
    if(aiTurn === 1){ // Check if it's AI's turn, if yes, play.
      for (var i = 1; i < 10; i++){
        if(t1.innerHTML !== "X" && t1.innerHTML !== "O"){ // If field is empty
          document.getElementById("t1").innerHTML = x; // Fill it with AI symbol
          gameover() // Check if win condition is met
          aiTurn = 0; // Allow player to play
          break; // Disallow AI to play more than one move at a time
        }
        if(t9.innerHTML !== "X" && t9.innerHTML !== "O"){
          document.getElementById("t9").innerHTML = x;
          gameover()
          aiTurn = 0;
          break;
        }
        if(t7.innerHTML !== "X" && t7.innerHTML !== "O"){
          document.getElementById("t7").innerHTML = x;
          gameover()
          aiTurn = 0;
          break;
        }
        if(t4.innerHTML !== "X" && t4.innerHTML !== "O"){
          document.getElementById("t4").innerHTML = x;
          gameover()
          aiTurn = 0;
          break;
        }
        if(t8.innerHTML !== "X" && t8.innerHTML !== "O"){
          document.getElementById("t8").innerHTML = x;
          gameover()
          aiTurn = 0;
          break;
        }
        if(t8.innerHTML !== "X" && t8.innerHTML !== "O"){
          document.getElementById("t8").innerHTML = x;
          gameover()
          aiTurn = 0;
          break;
        }
        if(t3.innerHTML !== "X" && t3.innerHTML !== "O"){
          document.getElementById("t3").innerHTML = x;
          gameover()
          aiTurn = 0;
          break;
        }
        if(t6.innerHTML !== "X" && t6.innerHTML !== "O"){
          document.getElementById("t6").innerHTML = x;
          gameover()
          aiTurn = 0;
          break;
        }
        if(t2.innerHTML !== "X" && t2.innerHTML !== "O"){
          document.getElementById("t2").innerHTML = x;
          gameover()
          aiTurn = 0;
          break;
        }
      }
    }
  }
});