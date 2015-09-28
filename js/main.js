// var gameManager = new GameManager();
// gameManager.startGame();

$(".gameboard-tile").click(function(e){
  var initialShipPosition = e.target.id.substring(14, 15);
  var num = parseInt(initialShipPosition);
  gameManager.player1.selectAShip(num);
});


// rewrite this into 3 lines


$(".Submarine").click(function() {
    gameManager.setSelectedShip(3);
  });

$(".Patrol Boat").click(function() {
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

// $(".tile").click(function(e) {
//   gameManager.markTile(e.target.id);
// })
