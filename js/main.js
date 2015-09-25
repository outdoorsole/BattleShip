
var GameManager = function() {
  this.startGame = function() {
   // setShip();
   this.listShips();
   this.showGameBoard();
  };

  // var setShip = function(ship) {
  //   $(".tile").click(setLocation);
  // };

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

  var shipLength = {
    submarine: 3,
    destroyer: 3, 
    patrolBoat: 2,
    battleship: 4,
    aircraftCarrier: 5 
  }

  this.listShips = function() {
    // This code will now be hardcoded into the html
    // for(var i = 0; i <shipArray.length; i++){
    //   $(".ships").append(shipArray[i].shipType);
    //   $(".ships").append(" ");
    // }
    return shipArray;
  }


  var createShipMarkedArray = function(ship) {
    var isNotHit = [];
    for (var i = 0; i < ship.shipSize; i++) {
      isNotHit.push(0);
    }
    console.log(ship);
    return isNotHit;
  }

  var selectedShip = 0;

  this.setSelectedShip = function(length){
    selectedShip = length;
  }

  this.setLocation = function(e) {
    //Marks the initial position where ship is placed
    $("#" + e.target.id).css("background-color", "blue"); 
    var initialShipPosition = e.target.id.substring(9, 11);
    var num = parseInt(initialShipPosition);

    console.log(num);
    //if the initial position is a single digit number, add additional number to make the id a double digit number. Line 54-70, it marks the location and length on the board.
    if (num >= 0 && num <= 9) {
      var nextPosition = num;
      nextPosition++;
      for (var i = 0; i < selectedShip-1; i++) {
        $("#position-0" + nextPosition).css("background-color", "red");
        nextPosition++;
      }
    }
    //Else, use number for the position's id.
    else {
      var nextPosition = num;
      nextPosition++;
      for (var i = 0; i < selectedShip-1; i++) {
        $("#position-" + nextPosition).css("background-color", "grey");
        nextPosition++;        
      }
    }
    //Marks the ship position in the array
    for(var i = 0; i < 3; i++) {
      submarine.shipLocation.push(num + i); 
    }
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

$(".tile").click(gameManager.setLocation);

$("#submarine")
  .click(function() {
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