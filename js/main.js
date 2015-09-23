
var startGame = function(){
  return false;
};

function Ship(shipSize,shipType){
  this.shipSize = shipSize || 0;
  this.shipType = shipType;
  return this;
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
// var shipSize = 6;

var createShipMarkedArray = function(ship) {
  var isNotHit = [];
  for (var i = 0; i < ship.shipSize; i++) {
    isNotHit.push(0);
  }
  console.log(ship);
  return isNotHit;
}
var setShip = function() {
  
  for (var row = 0; row < 10; row++) {
    
    var boardRow = [];
    
    for (var column = 0; column < 10; column++) {
      // We are creating an Object (can create constructor in another location)
      var position = "" + row + "" + column;

      $("#position-" + position).click(function(e) {
        console.log(e);
        $("#" + e.target.id).css("background-color", "blue");
        //alert(e.target.id);
      });
    }
  }
}

setShip();

var getPositions = function() {
  
  for (var row = 0; row < 10; row++) {
    
    var boardRow = [];
    
    for (var column = 0; column < 10; column++) {
      // We are creating an Object (can create constructor in another location)
      var position = "" + row + "" + column;

      $("#position-" + position).click(function(e) {
        console.log(e);
        $("#" + e.target.id).html("X");
        //alert(e.target.id);
      });
    }
  }
}

getPositions();
