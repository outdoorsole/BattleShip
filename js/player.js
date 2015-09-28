function Player(name,shipHit,shipMiss) {
  this.playerName = name || "";
  this.shipHit =  shipHit || [];
  this.shipMiss = shipMiss || [];
}

Player.prototype.getPlayerProp = function () {
	return this;
};

Player.prototype.recordShipHit = function (target) {
	this.shipHit.push(target);
	return this.shipHit;
};

Player.prototype.recordShipMiss = function (target) {
	this.shipMiss.push(target);
	return this.shipMiss;
};



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
