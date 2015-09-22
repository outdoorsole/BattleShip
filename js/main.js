var startGame = function(){
  return false;
};

var Ships = function(){
  return false;
};

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
