/***
Get to testing!
    * [ ] What kind of thing is `game.board`...? What does it do?
    * [ ] How about `game.reset`? What does it _return_? Any side-effects?
    * [ ] Resetting a board with no moves is lame, HOW U EVEN `game.applyMove`?
    * [ ] First move is free, next one costs $10.
    * [ ] Just calling `game.applyMove` is cheating; `game.next`...!
    * [ ] Now that you've got some moves, maybe `game.reset` is more interesting?
    * [ ] You can `game.next` but can you `game.prev`...?
    * [ ] Y'know, `game.end` is really a lot of `game.next`...
    * [ ] That `game.play`, tho... How U even `setInterval`?
  * [ ] Wipe the tracer bullets out before you push!

***/

var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

/* example
    test('getting a list of multiples of 3', function () {
      expect(ten()).to.deep.equal([3, 6, 9]);
      expect(twenty()).to.deep.equal([3, 6, 9, 12, 15, 18]);
      expect(fifty()).to.deep.equal([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]);
    });
*/
test('what is game.board', function () {
  expect(game.board(1)).to.be.(["P"]); //game is the name of the object that board is a property of

}
)

var game = globals.game = {

board: function(){
  return board.map(function(row){
    return row.slice();
  });
}
