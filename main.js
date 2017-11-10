// Blink an LED
var five = require("johnny-five");
var board = new five.Board();
var ledCol = "red"


board.on("ready", function() {
  var led = new five.Led.RGB([ 5, 6, 9]);
  var button = new five.Button({
    pin: 2,
    isPullup: true
  })

  button.on("release", function(){
    if(ledCol == "red"){
      led.color("green");
      ledCol = "green";
      console.log("green");
    }else{
      led.color("red");
      ledCol = "red";
      console.log("red");
    }
  })



});
