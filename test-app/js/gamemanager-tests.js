// var selectedShipLength = 10;

// assert(gameManager.setSelectedShip(selectedShipLength) === 10, "this returns the value of the ship length we set");
testLocation function () {
  var gameManager = new GameManager ();
  gameManager.setLocation(24);

}
var checkLocation = 24;
assert(testLocation(), "should be tile 24");


