//Creating a constructor for Gameboard to store information about
//about gameplay

//method to record the positions of each ship for p1 and p2

//gameboard will be able to pass in a ship so it can know its location
//and mark the location

//gameboard must mark whether a missile hit or missed a ship

//gameboard must search for a ship to determine whether it will be
//hit or missed and record that information
//
// -------------------------------------------------------------------//

// Creates a gameboard of any size
// adds id to the tiles with the row and column postion on the board

var boardSize = 100;

var createGameBoard = function(size) {
  var boardWidth = Math.sqrt(size);
  for (var i = 0; i < size; i++) {
    if (i % boardWidth === 0) {
      $('#gameboard').append('<div class="row"></div>');
    }
    $('#gameboard').append('<div class="gameboard-tile col-xs-1"></div>');
      $('.gameboard-tile').attr('id', function(num) {
      return 'board-position' + num;
    });
  }
}

createGameBoard(boardSize);
