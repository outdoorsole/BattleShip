var gameManager = new GameManager();
gameManager.init();

//user will click a player before selecting ships, passing index # instead of string
$(".player1").click(function() {
    gameManager.setSelectedPlayer(0);
});

$(".player2").click(function() {
    gameManager.setSelectedPlayer(1);
});

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

    var ship = gameManager.getSelectedPlayer().getShipByType(gameManager.getSelectedShip()).setShipLocation(numInitialShipPosition);

    console.log(ship);
    console.log(gameManager.getSelectedPlayer().getShipByType(gameManager.getSelectedShip()));

    // console.log(gameManager.getSelectedPlayer().getShipByType("Submarine").setShipLocation(6));
    console.log(typeof gameManager.getSelectedShip());
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
