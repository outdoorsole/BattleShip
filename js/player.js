var Player = function(name,shipHit,shipMiss){
	this.playerName = name || "";
	this.shipHit =  shipHit || [];
	this.shipMiss = shipMiss || [];
	// return this.shipHit;
};

Player.prototype = {
	getPlayerProp: function () {
		return this;
	},
	recordShipHit: function (target) {
		this.shipHit.push(target);
		return this.shipHit;
	},
	recordShipMiss: function (target) {
		this.shipMiss.push(target);
		return this.shipMiss;
	}
}





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

