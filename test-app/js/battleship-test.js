// var startGame = function(){
//  return false;
// }
assert(startGame(), "Battleship game starts");

assert(Ship(), "Returns contructor properties");

assert(Players(), "Returns the functionality of Player 1 or Play 2");

assert(Scoreboard(), "Returns score of current player");

assert(submarine = (3, "Submarine"), "Checking if Submarine instance is correct");

assert(destroyer = (3, "Destroyer"),"Checking the destroyer instance");

assert(patrolBoat = (2, "Patrol Boat"),"Checking the instance of Ship function, patrolBoat");

assert(battleship = (4, "Battleship"), "Checks battleship instance");

assert(aircraftCarrier = (5,"Aircraft Carrier"), "Checks instance of aircraftCarrier");

assert(shipSink(), "Checks for ships that are sinked");

assert(shipHits(),"Checks whether ship is hit or missed");

assert(shipMiss(), "Checks for missed spots on the gameboard")

assert(buildGameBoard(), "Returns the array of arrays to show the gameboard as result");


