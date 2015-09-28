function GameManager() {
	this.player1;
	this.player2;

  var selectedShip = "";

  this.getSelectedShip = function(){
    return selectedShip;
  }

  this.setSelectedShip = function(ship){
    selectedShip = ship;
  }
}

// initializes the instance of the game
GameManager.prototype.init = function() {
  this.player1 = new Player("Player1");
  this.player2 = new Player("Player2");
};

// resets the game objects
GameManager.prototype.reset = function() {
	this.player1.reset();
	this.player2.reset();
};







// (function(){

// })();

// init method : it's going to initialize the game - launches
//gameboard : makes ships available for selection : displays
//players active vs. inactive ships : constructs ships : manages
//event handlers :

// Reset method that runs the init method / method to clear board X

// allows access to gameboard  for control of gameboard methods

// manages functions/methods based on need/privilege i.e. when a player can
//select (click) ships or not - between turn scenarios, etc.

//method for the game maanager to know that player 1 is done selecting ships

// method to know player 2 will begin selecting ships

//method to switch between players and gameboard instances

//function called to send information about ship position to gameboard
//where gameboard will then store that information

//game manager must know when a missile has been launched and the result
//of the attack has been recorded and then switch to next player's turn

//select tile > find location of tile/ship > pass ship info > check if part of ship in location > if in location mark hit  >
//if no ship found in loc mark miss > notify player result
//remaining ships/ whether ship hit, missed, or sunk/possible
//inclusion of score) > end turn > switch turn > restart in game manager

//communicate end game (victory for p1 or p2)


// var GameManager = function() {
//   this.startGame = function() {
//    this.listShips();
//    // this.showGameBoard();
//   };

// //will be expanding ship location information to gameboard //
//   // var gameboard = new GameBoard("position-00");
//   // this.showGameBoard = function(){
//   //   return gameboard;
//   // }

//   var submarine = new Ship(3, "Submarine");
//   var destroyer = new Ship(3, "Destroyer");
//   var patrolBoat = new Ship(2, "Patrol Boat");
//   var battleship = new Ship(4, "Battleship");
//   var aircraftCarrier = new Ship(5, "Aircraft Carrier");

//   var shipArray = [submarine, destroyer, patrolBoat, battleship, aircraftCarrier];

//   this.listShips = function() {
//     return shipArray;
//   }

//   var selectedShip = 0;

//   this.setSelectedShip = function(length){
//     selectedShip = length;
//     return selectedShip;
//   }

//   this.setLocation = function(num) {

//     //adds an additional number to match the length of the position id so that the first row becomes a double digit string//
//     if (num >= 0 && num <= 9) {
//       var nextPosition = num;
//       for (var i = 0; i < selectedShip; i++) {
//         $("#position-0" + nextPosition).css("background-color", "red");
//         nextPosition++;
//       }
//     }
//     //else, use original number for the position id.
//     else {
//       var nextPosition = num;
//       for (var i = 0; i < selectedShip; i++) {
//         $("#position-" + nextPosition).css("background-color", "red");
//         nextPosition++;
//       }
//     }
//     //marks the ship position in the array
//     for(var i = 0; i < selectedShip; i++) {
//     //note that this is currently hardcoded to submarine - will be refactored to match selectedShip//
//       submarine.shipLocation.push(num + i);
//     }
//   };

// this.markTile = function(id) {
//     console.log(id);
//     $("#" + id).html("X");
//   }

//   var getPositions = function() {

//     $(".tile").click(markTile);

//   }
// }
