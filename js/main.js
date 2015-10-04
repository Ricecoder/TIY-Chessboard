

  (function(globals){
  // Don't worry if that seems a little funky...

    /**
     * Internal representation of the game board in its current state.
     *
     * @see game.board
     * @see game.tracer
     * @see initial
     * @var {Array} of {Array} of {String|null}
     */
    var board = initial(); // initialize the `board`

    /**
     * List of moves for the "Catalan Opening: Closed Variation" suitable for use
     * as arguments to `applyMove` below.
     *
     * @see applyMove
     * @var {Array} of...?
     */
    var moves = [
      {from:{rank: 6, file: 3},
       to:{rank: 4, file: 3}
     },

     {from:{rank: 0, file: 6},
      to:{rank: 2, file: 5}
    },

      {from:{rank: 6, file: 2},
       to:{rank: 4, file: 2}
     },

     {from:{rank: 1, file: 4},
      to:{rank: 2, file: 4}
    },

      {from:{rank: 6, file: 6},
       to:{rank: 5, file: 6}
     },

     {from:{rank: 1, file: 3},
      to:{rank: 3, file: 3}
    },

      {from:{rank: 7, file: 5},
       to:{rank: 6, file: 6}
     },

     {from:{rank: 0, file: 5},
      to:{rank: 1, file: 5}
    },

      {from:{rank: 7, file: 6},
       to:{rank: 5, file: 5}
     },

    ]; // END moves


    //var current = var counter??
    
    // var current; TODO: do we need this?

    // You don't need to understand `globals` yet...
    var game = globals.game = {
      /**
       * Provide a _copy_ of the game board in order to update the View from it
       *
       * @return {Array} of {Array} of {String|null}
       */
      board: function(){
        return board.map(function(row){
          return row.slice();
        });
      },
      /**
       * Reset the internal game board to it's initial state.
       *
       * @return {Object} the game object for Method Chaining
       */
      reset: function(){
        board = initial();

        return this;
      },
      /**
       * Advance the internal game board to the next move.
       *
       * @return {Object} the game object for Method Chaining
       * @todo Make this work!
       */
      next: function(){          //need function that iterates through moves starting
                                //with the last move and going forward one move.
        return this;
      },
      /**
       * Advance the internal game board to the previous move.
       *
       * @return {Object} the game object for Method Chaining
       * @todo Make this work!
       */
      prev: function(){
        // need a function that iterates backwards through the moves array one move.
        return this;
      },
      /**
       * Advance the internal game board to the last move.
       *
       * @return {Object} the game object for Method Chaining
       * @todo Make this work!
       */
      end: function(){
        //need a function that applies all moves at one.
        return this;
      },
      /**
       * Provide a printable representation of the game board for use as a tracer
       *
       * @return {String} representation of `board`
       * @todo Refactor to use Array methods?
       */
      tracer: function(){
        var bullet = '';

        for ( rank = 0; rank < board.length; rank++ ){
          bullet += '|';
          for ( var file = 0; file < board[rank].length; file++ ){
            bullet += (board[rank][file] || ' ') + '|';
          }
          bullet += '\n';
        }

        return bullet;
      },



      /**
       * Apply a move to the game board, given a `from` and `to` position that both
       * contain values for `rank` and `file`.
       *
       * @param {Object} from with `rank` and `file`
       * @param {Object} to with `rank` and `file`
       * @return undefined
       *
       * @todo Fill me in! ...and remove this comment.
       */
      applyMove: function (from, to){
        var firstMove = moves[0];
        var secondMove = moves[1];
        var thirdMove = moves[2];
        var fourthMove = moves[3];
        var fifthMove = moves[4];
        var sixthMove = moves[5];
        var seventhMove = moves[6];
        var eightMove = moves[7];
        var ninthMove = moves[8];

        // board[to.rank][to.file] = board[from.rank][from.file];
        // board[from.rank][from.file] = null;

        board.moves[0].to.rank.to.file =  board.moves[0].from.rank.from.file;
        board.moves[0].from.rank.from.file = null;

        // board[4][3] = board[6][3];
        // board[6][3] = null;

        console.log(game.tracer(game.applyMove));


      } // END applyMove
    }; // END game

    /**
     * Provide the initial state of the game board, useful for any game.
     *
     * @return {Array} of {Array} of {String|null}
     */
    function initial(){
      return [
        [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
        [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
        [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
      ];
    }; // END initial

  // You are not expected to understand anything below this line...
  })(window || module && module.exports || this);
