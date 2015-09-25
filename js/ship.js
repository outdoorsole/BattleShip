var Ship = function(shipSize,shipType,shipLocation){
  this.shipSize = shipSize || 0;
  this.shipType = shipType;
  this.shipLocation = [];
  this.timesHit = 0;
  this.shipHit = function() {
    this.timesHit += 1;
    return this.timesHit === this.shipSize;
  };
  return this;
}
