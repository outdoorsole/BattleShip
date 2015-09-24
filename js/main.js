var GameManager = function() {
  this.startGame = function() {
   setShip();
   this.listShips();
   this.showGameBoard();
  };

  var setShip = function(ship) {
    $(".tile").click(setLocation);
  };

  var gameboard = new GameBoard("position-00");
  
  this.showGameBoard = function(){
    return gameboard;
  }

  var submarine = new Ship(3, "Submarine");
  var destroyer = new Ship(3, "Destroyer");
  var patrolBoat = new Ship(2, "Patrol Boat");
  var battleship = new Ship(4, "Battleship");
  var aircraftCarrier = new Ship(5, "Aircraft Carrier");
  
  var shipArray = [];
  shipArray.push(submarine, destroyer, patrolBoat, battleship, aircraftCarrier);
  
  this.listShips = function() {
    for(var i = 0; i <shipArray.length; i++){
      $(".ships").append(shipArray[i].shipType);
      $(".ships").append(" ");
    }
    return shipArray;
  }

  var selectedShip;

  var createShipMarkedArray = function(ship) {
    var isNotHit = [];
    for (var i = 0; i < ship.shipSize; i++) {
      isNotHit.push(0);
    }
    console.log(ship);
    return isNotHit;
  }

  var setLocation = function(e) {

    $("#" + e.target.id).css("background-color", "blue");
    var initialShipPosition = e.target.id.substring(9, 11);

    submarine.shipLocation.push(initialShipPosition);
  };

  var markTile = function(e) {
    console.log(e);
    $("#" + e.target.id).html("X");
  }

  var getPositions = function() {

    // for (var row = 0; row < 10; row++) {
    //   var boardRow = [];

    //   for (var column = 0; column < 10; column++) {
    //     var rowCol = "" + row + "" + column;

        $(".tile").click(markTile);
    //   }
    // }
  }
  getPositions();
}

var gameManager = new GameManager();
gameManager.startGame();
