var Player = function(name,shipHit,shipMiss){
	this.name = name || "";
	this.shipHit = [];
	this.shipMiss = [];
	return this.shipHit;
};

var player1 = new Player("Player1");
var player2 = new Player("Player2");



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

