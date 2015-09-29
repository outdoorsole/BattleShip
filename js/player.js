function Player(name,shipHit,shipMiss) {
  this.playerName = name || "";
  this.shipHit =  shipHit || [];
  this.shipMiss = shipMiss || [];

  var ships = [];
  ships.push(new Ship("Submarine", 3));
  ships.push(new Ship("Patrol Boat", 2));
  ships.push(new Ship("Battleship", 4));
  ships.push(new Ship("Aircraft Carrier", 5));
  ships.push(new Ship("Destroyer", 3));

  // this.getShip = function () {
  //   console.log(ships[0]);
  //   for (var i = 0; i < ships.length; i++) {
  //     if (gameManager.getSelectedShip() === ships[i])
  //       return ships[i];
  //   }
  // };

  this.getShipLocation = function(index) {
    return ships[index].shipLocation;
  };

  this.getPlayerProp = function () {
    return this;
  };

  this.recordShipHit = function (target) {
    this.shipHit.push(target);
    return this.shipHit;
  };

  this.recordShipMiss = function (target) {
    this.shipMiss.push(target);
    return this.shipMiss;
  };

  this.getShipByType = function (shipType) {
    for (var i = 0; i < ships.length; i++) {
      if (ships[i].shipType === shipType) {
        return ships[i];
      }
    }
  };

  this.finishTurn = function () {

  }
  // this.setShip = function (shipLocation) {
  //   // Ships[shipName].location = shipLocation

  // }
}

// Player.prototype.getPlayerProp = function () {
// 	return this;
// };

// Player.prototype.recordShipHit = function (target) {
// 	this.shipHit.push(target);
// 	return this.shipHit;
// };

// Player.prototype.recordShipMiss = function (target) {
// 	this.shipMiss.push(target);
// 	return this.shipMiss;
// };

// Player.prototype.getShipByType = function (shipType) {
//   for (var i = 0; i < this.ships.length; i++) {
//     if (this.ships[i].shipType === shipType) {
//       return this.ships[i];
//     }
//   }
//   return;
// }





// Player.prototype.getSubmarine = function() {
//   console.log(ships[0]);
//   return ships[0];
// }







	// selectAShip: function(num) {
	// 	return;
	// }

    // //adds an additional number to match the length of the position id so that the first row becomes a double digit string//
    // if (num >= 0 && num <= 9) {
    //   var nextPosition = num;
    //   for (var i = 0; i < 3; i++) {
    //     $("#position-0" + nextPosition).css("background-color", "red");
    //     nextPosition++;
    //   }
    // }
    // //else, use original number for the position id.
    // else {
    //   var nextPosition = num;
    //   for (var i = 0; i < 3; i++) {
    //     $("#position-" + nextPosition).css("background-color", "red");
    //     nextPosition++;
    //   }
    // }
    // //marks the ship position in the array
    // for(var i = 0; i < 3; i++) {
    // //note that this is currently hardcoded to submarine - will be refactored to match selectedShip//
    //   submarine.shipLocation.push(num + i);
    // }
  // }






//properties: name, 2 empty array: shipHit, shipMiss

//player is responsible for selecting tiles on the board they wish to
//launch missiles at
//from point of launch the method should communicate to the gameboard
//that an attack has begun and search for ships locations


// methods:
// player needs method to start game
// player needs method to select ships
// player needs method to launch attacks
// player needs method to drop ship

// properties:
// player1 & player2: name
