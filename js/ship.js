function Ship (shipType, shipSize, locationArray) {
  this.shipType = shipType;
  this.shipSize = shipSize || 0;
  this.shipLocation = ["No current location."];

  this.setShipLocation = function (id) {
    this.shipLocation.length = 0;
    for (var i = 0; i < this.shipSize; i++) {
      this.shipLocation.push(id + i);
      $("#board-position" + (id + i)).css("background-color", "red");
    }
  }
}

Ship.prototype.getShipProperties = function() {
  return this;
};


// Ship.prototype.displayShipOnBoard = function() {
//   var ship = $('<div class="' + this.shipType + '"></div');
//   this.$ship = $(ship);
//   this.$ship
//     .append('<p id="' + this.shipType + '-name">' + this.shipType + '</p>')
//     .append('<p id="' + this.shipType + '-ship-length">' + this.shipSize + '</p>')
//     .append('<p id="' + this.shipType + '-ship-location">' + this.getLocation + '</p>')
//     .on('click', function(e) {
//       console.log($(this).attr('class'), 'clicked');
//     });
//   $('#ships').append(this.$ship);



  // gameManager.player1.getShipByType("Submarine").placeShipOnBoard();


  // $(".gameboard-tile").on('click', function(e) {
  //   console.log(e);
  //   console.log("A tile has been clicked");
  //   var initialShipPosition = e.target.id.substring(14, 16);
  //   console.log(initialShipPosition);

    // console.log(this.shipLocation);

    // this.shipLocation.push(initialShipPosition);
    // return initialShipPosition;
  // });

// $(".gameboard-tile").click(function(e){
//   var initialShipPosition = e.target.id.substring(14, 15);
//   var num = parseInt(initialShipPosition);
//   gameManager.player1.selectAShip(num);
// });
// };

// Ship.prototype.placeShipOnBoard = function(num) {
//   this.shipLocation = [];
//   for (var i = 0; i < this.shipSize; i++) {
//     this.shipLocation.push(num + i);
//   }
// };

Ship.prototype.shipHit = function(targetPosition) {
  var checkNum = this.shipLocation.indexOf(targetPosition);
  if (checkNum === -1) {
    console.log("This was a miss on position " + targetPosition);
  }
  else {
    var shipHitLocation = this.shipLocation.splice(checkNum, 1);
    console.log("This was a hit on position " + targetPosition);
    if (this.shipLocation.length === 0) {
      console.log("Your " + this.shipType + " was sunk!");
    }
    return this.shipLocation;
  }
};
