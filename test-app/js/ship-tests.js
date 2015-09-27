/*
// Properties:
ShipType: the type of ship
ShipSize: the size of the ship
ShipLocation: the location on the board that the ship is placed by the player
PlayerNumber: the player the ship belongs to

// Methods:
  - displayShipOnBoard: display the ship properties on the board. --> sounds like the game Manager should invoke this
  - placeShipOnBoard: be able to place a ship on the board
  - getShipProperties: be able to get the ship properties to pass to another function
  - shipHit: check to see if the ship location was hit

*/

var submarine = new Ship("Submarine", 3);

// assert(submarine instanceof Ship, "A ship was created from the ship constructor");
