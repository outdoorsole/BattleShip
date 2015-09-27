// var selectedShipLength = 10;

// assert(gameManager.setSelectedShip(selectedShipLength) === 10, "this returns the value of the ship length we set");

var gameManager = new GameManager();


var testGetShip = new Ship();

assert(testGetShip.getShipProperties().shipSize === 0, "To see if we have access to ship size property." );

var testPlayer = new Player();

assert(testPlayer.getPlayerProp().playerName === "", "Testing to ensure access to name property of Player.");

assert(testPlayer.getPlayerProp().shipHit.length === 0, "Testing to make sure shipHit array length is 0 at initiation of game.");

assert(testPlayer.getPlayerProp().shipMiss.length === 0, "Testing to make sure shipMiss array length is 0 at initiation of game.");




// gameboard
// players constructor
// construct ships


// assert(submarine === ship, "submarine should be an instance of ship if game has initiated and the ship constructor is available");
// assert(player2.missArr === [], "play two's array should be empty");
// assert("should invoke btn")
// assert(" ('click' should invoke game setup state")
// var objInstance = Object.create(PublicModule);  
// objInstance.init({  
//   valueSetOnInit: "value set during initialization"
// });


//err just trying something out - I know this is not
//the proper way to go about testing this/ it may not be necessary
//or considered too complicated but I was curious to see if it was possible


// describe("Button Click Event Tests", function() {
//   var spyEvent;
   
//   beforeEach(function() {
//     setUpHTMLFixture();
//   });
      
//   assert("should invoke the btnShowMessage click event.", function() {
//     spyEvent = spyOnEvent('#btnShowMessage', 'click');
//     $('#btnShowMessage').trigger( "click" );
       
//     expect('click').toHaveBeenTriggeredOn('#btnShowMessage');
//     expect(spyEvent).toHaveBeenTriggered();
//   });
      
// assert("should invoke the btnHideMessage click event.", function() {
//     spyEvent = spyOnEvent('#btnHideMessage', 'click');
//     $('#btnHideMessage').trigger( "click" );
       
//     expect('click').toHaveBeenTriggeredOn('#btnHideMessage');
//     expect(spyEvent).toHaveBeenTriggered();
//   });
// });

//by accessing player one and two we know that game manager
//has the ability to switch turns ?




// assert(, "returns a new instance of GameManager");
// assert(player1.missArr === [], "player one's array should be empty");
// assert(p1.hitCheck(AS) === "miss", "should miss because no ship objects on board");

