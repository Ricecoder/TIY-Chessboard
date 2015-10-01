/***
Get to testing!
    * [x] What kind of thing is `game.board`...? What does it do?
    * [x] How about `game.reset`? What does it _return_? Any side-effects?
    * [ ] Resetting a board with no moves is lame, HOW U EVEN `game.applyMove`?
    * [ ] First move is free, next one costs $10.
    * [ ] Just calling `game.applyMove` is cheating; `game.next`...!
    * [ ] Now that you've got some moves, maybe `game.reset` is more interesting?
    * [ ] You can `game.next` but can you `game.prev`...?
    * [ ] Y'know, `game.end` is really a lot of `game.next`...
    * [ ] That `game.play`, tho... How U even `setInterval`?
  * [ ] Wipe the tracer bullets out before you push!

***/
(function(globals){


it('should be a function', function(){
  chai.expect(game.board).to.be.a('function'); //game is the name of the object that board is a property of

});

it('should return an array', function(){
  chai.expect(game.board()).to.be.an('array');
});

it('should be a function', function(){
  chai.expect(game.reset).to.be.a('function');
});

it('should return an object', function(){
  chai.expect(game.reset()).to.be.an('object');
});



})(window || module && module.exports || this);
