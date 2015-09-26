var gameManager = new GameManager();
gameManager.startGame();

$(".tile").click(function(e){
  var initialShipPosition = e.target.id.substring(9, 11);
  var num = parseInt(initialShipPosition);
  gameManager.setLocation(num);
});

$("#submarine").click(function() {
    gameManager.setSelectedShip(3);
  });

$("#patrol-boat").click(function() {
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

$(".tile").click(function(e) {
  gameManager.markTile(e.target.id);
})
