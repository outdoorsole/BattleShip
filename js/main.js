var GameManager = function() {
  this.startGame = function() {
   this.listShips();
   this.showGameBoard();
  };

//will be expanding ship location information to gameboard //
  var gameboard = new GameBoard("position-00");
  this.showGameBoard = function(){
    return gameboard;
  }

  var submarine = new Ship(3, "Submarine");
  var destroyer = new Ship(3, "Destroyer");
  var patrolBoat = new Ship(2, "Patrol Boat");
  var battleship = new Ship(4, "Battleship");
  var aircraftCarrier = new Ship(5, "Aircraft Carrier");

  var shipArray = [submarine, destroyer, patrolBoat, battleship, aircraftCarrier];

  this.listShips = function() {
    return shipArray;
  }

  var selectedShip = 0;

  this.setSelectedShip = function(length){
    selectedShip = length;
  }

  this.setLocation = function(num) {

    //adds an additional number to match the length of the position id so that the first row becomes a double digit string//
    if (num >= 0 && num <= 9) {
      var nextPosition = num;
      for (var i = 0; i < selectedShip; i++) {
        $("#position-0" + nextPosition).css("background-color", "red");
        nextPosition++;
      }
    }
    //else, use original number for the position id.
    else {
      var nextPosition = num;
      for (var i = 0; i < selectedShip; i++) {
        $("#position-" + nextPosition).css("background-color", "red");
        nextPosition++;
      }
    }
    //marks the ship position in the array
    for(var i = 0; i < selectedShip; i++) {
    //note that this is currently hardcoded to submarine - will be refactored to match selectedShip//
      submarine.shipLocation.push(num + i);
    }
  };

  var markTile = function(e) {
    console.log(e);
    $("#" + e.target.id).html("X");
  }

  var getPositions = function() {
    $(".tile").click(markTile);
  }
}

var gameManager = new GameManager();
gameManager.startGame();

$(".tile").click(function(e){
  var initialShipPosition = e.target.id.substring(9, 11);
  var num = parseInt(initialShipPosition);
  gameManager.setLocation(num);
});

$("#submarine").click(function() {
    gameManager.setSelectedShip(3);
  });

$("#patrol-boat").click(function() {
  gameManager.setSelectedShip(2);
});

$("#destroyer").click(function() {
  gameManager.setSelectedShip(3);
});

$("#battleship").click(function() {
  gameManager.setSelectedShip(4);
});

$("#aircraft-carrier").click(function() {
  gameManager.setSelectedShip(5);
});
