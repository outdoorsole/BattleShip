function Ship (shipType, shipSize, player, locationArray) {
  this.shipType = shipType;
  this.shipSize = shipSize || 0;
  this.Player = player;
  this.getLocation = ["No current location."];
}

Ship.prototype.getShipProperties = function() {
  return this;
};

Ship.prototype.displayShipOnBoard = function() {
  $('#ships').append('<div class="' + this.shipType + '"></div');
  $('#ships').append('<p id="' + this.shipType + '-name">' + this.shipType + '</p>');
  $('#ships').append('<p id="' + this.shipType + '-ship-length">' + this.shipSize + '</p>');
  $('#ships').append('<p id="' + this.shipType + '-ship-location">' + this.shipLocation + '</p>');
};

Ship.prototype.placeShipOnBoard = function(num) {
  this.shipLocation = [];
  for (var i = 0; i < this.shipSize; i++) {
    this.shipLocation.push(num + i);
  }
};

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
