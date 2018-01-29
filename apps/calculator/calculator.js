// Initially set display to an empty value
let calcDisplay = "";

// Manage click events on all <a> elements
// ID's of buttons are corresponding calc values
// Dynamically change display based on the input
// Eval the generated string inside display
// using eval(calcDisplay) to perform operations
$("a").on("click", function(){
  if(this.id === "calculatorClear"){
    calcDisplay = "";
    document.getElementById("calculatorDisplay").innerHTML = calcDisplay;
  }
  else if (this.id === "calculatorEquals"){
    calcDisplay = eval(calcDisplay);
    document.getElementById("calculatorDisplay").innerHTML = calcDisplay;
  }
  else {
    calcDisplay += this.id;
    document.getElementById("calculatorDisplay").innerHTML = calcDisplay;
  }
});
