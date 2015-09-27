//Creating a constructor for Gameboard to store information about
//about gameplay

// var GameBoard = function (shipPosition){
// 	this.boardLength = 100;
// 	this.shipPosition = shipPosition;
// 	return this;
// }



// gameBoard.prototype.MarkTile () {

// }

//method to record the positions of each ship for p1 and p2

//gameboard will be able to pass in a ship so it can know its location
//and mark the location

//gameboard must mark whether a missile hit or missed a ship

//gameboard must search for a ship to determine whether it will be
//hit or missed and record that information

//


var boardSize = 100;

// version 2: Creates a gameboard of any size

// var createGameBoard = function(size) {
//   var boardWidth = Math.sqrt(size);
//   for (var i = 0; i < size; i++) {
//     if (i % boardWidth === 0) {
//       $('.gameboard').append('<div class="row"></div>');
//     }
//     $('.gameboard').append('<div class="gameboard-tile col-xs-1"></div>');
//   }
// }

// createGameBoard(boardSize);

// -------------------------------------------------------------------//
// add id to the tiles with the row and column postion on the board

// var addIdToGameBoard = function() {
  // for (var i = 0; i < boardSize; i++) {
//     $('.gameboard-tile').attr('id', function(num){
//       return 'board-position' + num;
//     });
//   // }
// // }

// addIdToGameBoard();
