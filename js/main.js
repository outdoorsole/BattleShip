var GameManager = function() {
  this.startGame = function() {
   setShip();
  };

  this.listShips = function() {

  }

  // this.getShip = function() {
  //   return
  // }

  var setShip = function(ship) {
    $(".tile").click(setLocation);
  };

  var submarine = new Ship(3, "Submarine");
  var destroyer = new Ship(3,"Destroyer");
  var patrolBoat = new Ship(2, "Patrol Boat");
  var battleship = new Ship(4, "Battleship");
  var aircraftCarrier = new Ship(5, "Aircraft Carrier");
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

  var getPositions = function() {

    for (var row = 0; row < 10; row++) {
      var boardRow = [];

      for (var column = 0; column < 10; column++) {
        var rowCol = "" + row + "" + column;

        $("#position-" + rowCol).click(function(e) {
          console.log(e);
          $("#" + e.target.id).html("X");
        });
      }
    }
  }
  getPositions();
}

var gameManager = new GameManager();
gameManager.startGame();
