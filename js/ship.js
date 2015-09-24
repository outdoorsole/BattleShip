var Ship = function(shipSize,shipType,shipLocation){
  this.shipSize = shipSize || 0;
  this.shipType = shipType;
  this.shipLocation = [];
  return this;
}
