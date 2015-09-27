function Ship (shipType, shipSize, shipLocationArray, player) {
  this.shipType = shipType;
  this.shipSize = shipSize || 0;
  this.shipLocation = ["No current location."];
  this.Player = player;
}

Ship.prototype = {
  getShipProperties: function() {
    return this;
  },
  displayShipOnBoard: function() {
    $('#gameboard').append('<p>' + this.shipType + '</p>');
    $('#gameboard').append('<p>' + this.shipSize + '</p>');
    $('#gameboard').append('<p>' + this.shipLocation + '</p>');
  },
  placeShipOnBoard: function(num) {
    this.shipLocation = [];
    for (var i = 0; i < this.shipSize; i++) {
      this.shipLocation.push(num + i);
    }
  },
  shipHit: function(targetPosition) {
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
  }
}
