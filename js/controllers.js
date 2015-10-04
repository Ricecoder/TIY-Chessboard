
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
    view();

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

  //TESTING
//Moved to view-helpers.js

// function view () {
//   var $chessboard = jQuery('.chessboard tbody');
//   var gameboard = game.board;
//
//   jQuery(gameboard).each(function(rank, row){
//     jQuery(row).each(function(file, piece){
//       // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
//       var $square = $chessboard
//         .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
//         .find('td').eq(file) // Get the `td` inside the `tr` for the `file`
//
//       console.log($square.get(), rank, file, piece);
//       // Use the log, Luke!
//
//       if (piece) {
//
//         $square.text(piece);  //remove class from current add class to new current
//       }
//       else {
//         $square.text = " ";
//       }
//         // TODO: Convert `square` to class name(s)
//
//         // TODO: Add class name(s) to `td` instead
//     });
//
//   });
// };
// //END
// Am I supposed to recognize this?
})(window || module && module.exports || this)
