var gameManager = new GameManager();
gameManager.init();

// User will click on a ship on the board
$(".submarine").click(function() {
    gameManager.setSelectedShip("Submarine");
  });

$(".patrol-boat").click(function() {
  gameManager.setSelectedShip("Patrol Boat");
});

$(".destroyer").click(function() {
  gameManager.setSelectedShip("Destroyer");
});

$(".battleship").click(function() {
  gameManager.setSelectedShip("Battleship");
});

$(".aircraft-carrier").click(function() {
  gameManager.setSelectedShip("Aircraft Carrier");
});

// User will click on a tile where they want their ship placed
$(".gameboard-tile").on('click', function(e) {
    console.log("A tile has been clicked");
    var initialShipPosition = e.target.id.substring(14, 16);
    var numInitialShipPosition = parseInt(initialShipPosition);
    gameManager.player1.getShipByType(gameManager.getSelectedShip()).setShipLocation(numInitialShipPosition);
    console.log(numInitialShipPosition);
});






































// $(".gameboard-tile").click(function(e){
//   var initialShipPosition = e.target.id.substring(14, 15);
//   var num = parseInt(initialShipPosition);
//   gameManager.player1.selectAShip(num);
// });


// rewrite this into 3 lines


// $(".tile").click(function(e) {
//   gameManager.markTile();
// })
