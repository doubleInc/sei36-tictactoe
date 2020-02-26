/*
    Project ZER0 - Tic Tac Toe
    by Ali A.(doubleInc)

    ...
*/

let gameState = function() {
  return new Array(9).fill(""); //[ '', '', '', '', '', '', '', '', '' ]
};

var currentGame;

var gameStatus = false; // game in progress or not.

let currentPlayer = 1; // 'X' = 1, 'O' = 0

//start a new game
function startGame() {
  gameStatus = true;
  gameStatus;

  currentPlayer = 1; // x to start
  //reset board
  currentGame = gameState();
  //Dom update
}

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

winPerms.length;

function checkBoard(gameState = currentGame) {
  let roundWon = false; //track a victory

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
        break;
      } else {
        continue;
      }
    }
  }

  if (roundWon) {
    //update html
    gameStatus = false;
    return "win";
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    //update html
    gameStatus = false;
    return "draw";
  }
  //game in progress
  gameStatus = true;
  return "in progress";

  //player change;
}
