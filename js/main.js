
var startGame = function(){
  return false;
};

function Ship(shipSize,shipType){
  this.shipSize = shipSize || 0;
  this.shipType = shipType;
}

var submarine = new Ship(3, "Submarine");
var destroyer = new Ship(3,"Destroyer");
var patrolBoat = new Ship(2, "Patrol Boat");
var battleship = new Ship(4, "Battleship");
var aircraftCarrier = new Ship(5, "Aircraft Carrier");


var Players = function(){
  return false;
};


var Scoreboard = function(){
  return false;
};


var shipSink = function(){
  return false;
}

var shipHits = function(){
  return false;
}



var getPositions = function() {
  // var gameBoard = [];

  for (var row = 0; row < 10; row++) {
    var boardRow = [];
    for (var column = 0; column < 10; column++) {
      // We are creating an Object (can create constructor in another location)
      var position = "" + row + "" + column;

      $("#position-" + position).click(function(e) {
        $("#" + e.target.id).html("X");
        //alert(e.target.id);
      });
    }
  }
  // return gameBoard;
}

getPositions();





// function SquareTile() {
//   position:
// }
