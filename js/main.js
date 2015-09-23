
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
};

var shipHits = function(){
  return false;
};

var shipMiss = function(){
  return false;
}

var buildGameBoard = function(boardSize) {
  var gameBoard = [];

  for (var row = 0; row < boardSize; row++) {
    var boardRow = [];
    for (var column = 0; column < boardSize; column++) {
      // We are creating an Object (can create constructor in another location)
      var squareTile = {
        position: [row, column]
      };
      boardRow.push(squareTile);
    }
    gameBoard.push(boardRow);
  }
  return gameBoard;
};

var battleShipBoard = buildGameBoard(8);
