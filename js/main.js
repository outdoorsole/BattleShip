
var startGame = function(){
  return false;
};

function Ship(shipName, shipSize){
  this.shipName = shipName || "";
  this.shipSize = shipSize || 0;
  // return false;
}

function Submarine(shipName, shipSize, shipType) {
  this.base = Ship;
  this.base(shipName,shipSize);
  this.shipType = "Submarine";
}

Submarine.prototype = new Ship();

var smallSub = new Submarine("Submarine", 3);



var Players = function(){
  return false;
};


var Scoreboard = function(){
  return false;
};




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
