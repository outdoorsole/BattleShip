// Square piece
//   - holds the position [row, column]
//   - holds ship info (which part of the ship)

// Ship
//   - length of ship
//   - name of ship (shipType)
//   - ship marked [0, 0, 0] by default

// The default is [0]
// This means that a tile is not marked


var shipSize = 3;

var checkIfTileMarked = function() {
  var isMarked = [];
  for (var i = 0; i < shipSize; i++) {
    isMarked.push(0);
  }
  return isMarked;
}

// var shipSize = 3;
// assert(checkIfTileMarked().length === [0, 0, 0], "isMarked returns an array of [0, 0, 0] when the shipSize is 3")
