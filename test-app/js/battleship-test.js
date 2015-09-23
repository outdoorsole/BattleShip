// var startGame = function(){
//  return false;
// }
assert(startGame(), "Battleship game starts");

assert(Ship(), "Returns contructor properties");

assert(Players(), "Returns the functionality of Player 1 or Play 2");

assert(Scoreboard(), "Returns score of current player");

assert(submarine instanceof Ship, "Checking if Submarine instance is correct");

assert(destroyer instanceof Ship,"Checking the destroyer instance");

assert(shipSink(), "Checks for ships that are sinked");

assert(shipHits(),"Checks whether ship is hit or missed");

assert(shipMiss(), "Checks for missed spots on the gameboard");

assert(buildGameBoard(), "Returns the array of arrays to show the gameboard as result");


