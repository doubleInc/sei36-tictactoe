/*
    Project ZER0 - Tic Tac Toe
    by Ali A.(doubleInc)

    ...
*/

// animations
$(document).ready(function() {
  // show overlay
  $(".btn").on("click", function(e) {
    e.preventDefault();
    $(".slider").addClass("show");
    $(".slider").animate(
      {
        opacity: "1"
      },
      500,
      "linear"
    );

    // start game
    startGame();
    //console.log(gameStatus); //->true
  });

  //hide overlay
  $("#close-overlay").on("click", function(e) {
    e.preventDefault();
    $(".slider")
      .animate(
        {
          opacity: "0"
        },
        100,
        "linear"
      )
      .queue(function(next) {
        $(".slider").removeClass("show");
        next();
        // reset board
        resetGame();
        $("#game-info").text("");
      });
  });

  //game dom stuff
  let moves = 0; //track number of moves
  // Get board number
  $("#game-board>div").on("click", function() {
    let boardIndex = Number($(this).attr("data-id"));

    //console.log(boardIndex);

    if (
      gameStatus === true &&
      currentPlayer === 1 &&
      currentGame[boardIndex] === ""
    ) {
      currentGame[boardIndex] = "X";
      //update dom
      $(this)
        .children("h1")
        .text("X");
      moves++;
    } else if (
      gameStatus === true &&
      currentPlayer === 0 &&
      currentGame[boardIndex] === ""
    ) {
      currentGame[boardIndex] = "O";
      $(this)
        .children("h1")
        .text("O");
      moves++;
    } else {
      // board slot already taken
      return;
    }

    if (moves > 4) {
      const outcome = checkBoard();
      // check for win or a draw
      if (outcome.matchWon === true) {
        $("#game-info").text(`${outcome.playerWon} wins!`);
      } else if (outcome.matchWon === "draw") {
        $("#game-info").text(`Match was drawn!`);
      }
    }

    // change players
    handlePlayerChange();
    console.log(currentGame, currentPlayer, gameStatus);
  });

  // reset game board
  $("#reset").on("click", function() {
    //alert($(this).attr("data-id"));
    resetGame();
    $("#game-info").text("");
    console.log("Game reset! ");
  });
});

// game logic

const gameState = function() {
  return new Array(9).fill(""); //[ '', '', '', '', '', '', '', '', '' ]
};

// game board state
var currentGame;

var gameStatus = false; // game in progress or not.

var currentPlayer = 1; // 'X' = 1, 'O' = 0

//start a new game
function startGame() {
  gameStatus = true;

  currentPlayer = 1; // x to start
  //reset board
  currentGame = gameState();
  //Dom update
}

// player change
function handlePlayerChange() {
  //if player X, swap to O else swap to X
  currentPlayer = currentPlayer === 1 ? 0 : 1;
  // html update
}

// jquery functions
const resetGame = function() {
  const eles = $("#game-board h1");
  eles.each(function(index, element) {
    $(this).text("");
  });
  startGame();
};

//possible winning paterns
const winPerms = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkBoard(gameState = currentGame) {
  let roundWon = false; //track a victory
  let playerWon = ""; //store winning player

  for (let i = 0; i < winPerms.length; i++) {
    const winCondition = winPerms[i];
    // array to hold current win permutation
    let [a, b, c] = [
      gameState[winCondition[0]],
      gameState[winCondition[1]],
      gameState[winCondition[2]]
    ];

    if ([a, b, c].includes("") === false) {
      // no blanks in current win permutation

      if (a === b && b === c) {
        roundWon = true;
        playerWon = a;
        break;
      } else {
        continue;
      }
    }
  }

  if (roundWon) {
    //update html
    gameStatus = false;
    return {
      playerWon,
      matchWon: roundWon
    };
  }
  // draw
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    //update html
    gameStatus = false;
    return {
      matchWon: "draw"
    };
  }
  //game in progress
  gameStatus = true;
  return "in progress";

  //player change;
}
