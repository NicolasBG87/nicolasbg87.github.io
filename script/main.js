$(document).ready(function(){
  // Clock in the top right corner
  function clock(){
    // Store date variables
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm = "";
    // Proper use of AM/PM
    if (hours < 12){
      amPm = "AM";
    } else
      amPm = "PM";
    // Update #time li with value
    if (minutes < 10){
      $("#time").text(hours + ":0" + minutes + " " + amPm);
    } else
      $("#time").text(hours + ":" + minutes + " " + amPm);
  }
  // Run the clock function every second to update html with real-time data
  setInterval(clock, 1000);

  // Button on click events
  $("#contactBtn").on("click", function (){
    $("#contact").toggleClass("hide");
  });

  $("#homeBtn").on("click", function (){
    $(".footerBtn").removeClass("active");
    $(this).addClass("active");
    $(".section").addClass("hide");
  });

  $("#aboutBtn").on("click", function (){
    $(".footerBtn").removeClass("active");
    $(this).addClass("active");
    $(".section").addClass("hide");
    $("#about").removeClass("hide");
  });

  $("#educationBtn").on("click", function (){
    $(".footerBtn").removeClass("active");
    $(this).addClass("active");
    $(".section").addClass("hide");
    $(".edBox").addClass("hide");
    $(".edIcons").removeClass("edIconActive");
    $("#education").removeClass("hide");
    $("#edGeneral").removeClass("hide");
    $("#education h1").text("Skills");
  });

  $("#workBtn").on("click", function (){
    $(".footerBtn").removeClass("active");
    $(this).addClass("active");
    $(".section").addClass("hide");
    $("#work").removeClass("hide");
  });
  // "Auto typing" settings
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    startDelay: 8500,
    backSpeed: 30,
    backDelay: 700,
  });
});