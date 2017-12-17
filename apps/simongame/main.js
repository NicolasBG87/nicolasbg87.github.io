$(document).ready(function(){
  // On and Off switch
  var sw = 0;
  // Strict mode On and Off
  var strict = 0;
  // Moves counter
  var count = 0;
  // Sounds for each button
  var sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  var sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  var sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  var sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");  
  var colors = [r, b, g, y];
  // Sequence of moves
  var seq = [];
  // AI moves
  var ai = [];
  // User moves
  var player = [];
  // Win/Lose condition
  function condition(){
    // If AI and Users moves are not the same terminates the game(if strict) or repeats the pattern
    if(ai[player.length-1] !== player[player.length-1]){
      if(strict === 1){
        alert("YOU LOSE!");
        $("#switch").click();
      } else {
        alert("WRONG COLOR, PLEASE TRY AGAIN!");
        player = [];
        aiPlay();
      }
      // If player successfully manages to do 20 patterns, terminates the game and prints winning message
    } else if (player.length === 20){
      alert("HOLY SHIZZLE, YOU WIN!");
      $("#switch").click();
    }
  }
  // AI pattern
  function aiTurn(){
    // Random number 1-4
    var num = Math.floor(Math.random()*4);
    // Push colors into sequence and ai
    seq.push(colors[num]);
    ai.push(colors[num].name);
    // Update and display counter
    count += 1;
    $("#counter").html(count);
  }
  // Prevent clicking the whole pattern at once, by adding 1sec delay between each press
  function aiPlay(){
    for(var i = 0; i <= seq.length; i++){
      (function(i){
        setTimeout(function(){
            seq[i]();
        }, 1000 * i);
      }(i));
    }
  }
  // Allow AI to play/start the game
  $("#start").click(function st(){
    if(sw === 1){
      setTimeout(function(){
        player = [];
        aiTurn();
        aiPlay();
        }, 1500 );
    }
  });
  // Button on click events
  $("#red").click(function(){
    // Prevent clicking the buttons while AI is playing
    if(sw ===1){
      sound1.play();
      // Button animation
      $("#red").fadeOut("#red", function(){
        $("#red").fadeIn();
      });
      // Update player array
      player.push("r");
      // Check for win/lose condition
      condition();
      // Prevent playing more move than the counter
      if(seq.length <= player.length){
        $("#start").click();
      }
    }
  });

  $("#blue").click(function(){
    if(sw ===1){
      sound2.play();
      $("#blue").fadeOut("#blue", function(){
        $("#blue").fadeIn();
      });
      player.push("b");
      condition();
      if(seq.length <= player.length){
        $("#start").click();
      }
    }
  });

  $("#green").click(function(){
    if(sw ===1){
      sound3.play();
      $("#green").fadeOut("#green", function(){
        $("#green").fadeIn();
      });
      player.push("g");
      condition();
      if(seq.length <= player.length){
        $("#start").click();
      }
    }
  });

  $("#yellow").click(function(){
    if(sw ===1){
      sound4.play();
      $("#yellow").fadeOut("#yellow", function(){
        $("#yellow").fadeIn();
      });
      player.push("y");
      condition();
      if(seq.length <= player.length){
        $("#start").click();
      }
    }
  });

  $("#switch").click(function(){
    if(sw === 0){
      sw = 1;
      $("#off").addClass("swActive");
      $("#on").removeClass("swActive");
      $("#counter").html("0");
    } else {
      sw = 0;
      count = 0;
      seq = [];
      player = [];
      ai = [];
      $("#on").addClass("swActive");
      $("#off").removeClass("swActive");
      $("#counter").html("");
    }  
  });

  $("#strict").click(function(){
    if(strict === 0){
      strict = 1;
      $("#strict").removeClass("swActive");
      $("p").removeClass("hidden");
    } else {
      strict = 0;
      $("#strict").addClass("swActive");
      $("p").addClass("hidden");
    }  
  });
  // Button animations
  function r(){
    sound1.play();
    $("#red").fadeOut("#red", function(){
      $("#red").fadeIn();
    });
  };

  function b(){
    sound2.play();
    $("#blue").fadeOut("#blue", function(){
      $("#blue").fadeIn();
    });
  };

  function g(){
    sound3.play();
    $("#green").fadeOut("#green", function(){
      $("#green").fadeIn();
    });
  };

  function y(){
    sound4.play();
    $("#yellow").fadeOut("#yellow", function(){
      $("#yellow").fadeIn();
    });
  };
});