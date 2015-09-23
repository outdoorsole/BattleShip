
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

var markTile = function() {
  $("#position-00").html("X");
};

$("#position-00").click(markTile);

// function SquareTile() {
//   position:
// }
