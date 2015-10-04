
(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
/*
  document.querySelector(SELECTOR)
    .addEventListener(TYPE, CALLBACK);
  // AKA
  jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  }
*/

  // Controller for "next move"...
  jQuery('#forward').on('click', function(event){
    // console.log("tracer1");
    game.next();
    console.log(game.tracer());
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery('#back').on('click', function(event){
    // console.log("tracer 2");
    game.prev();
    console.log(game.tracer());
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery('button#end').on('click', function(event){
    // console.log("tracer 3");
    game.end();
    console.log(game.tracer());
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery('button#rewind').on('click', function(event){
    // console.log("tracer 4");
    game.reset();
    console.log(game.tracer());

  });

  jQuery('button#play').on('click', function(event){
    // console.log("tracer 5");
    game.play();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
