/*
    Project ZER0 - Tic Tac Toe
    by Ali A.(doubleInc)

    ...
*/

let gameState = new Array(9).fill(""); //[ '', '', '', '', '', '', '', '', '' ]

let gameStatus = false; // game in progress or not.

let currentPlayer = 1; // 'X' = 1, 'O' = 0

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
gameState = [1, 0, 0, 0, 0, 1, 1, 0, 0];
checkBoard();

function checkBoard() {
  let roundWon = false; //track a victory
  for (let i = 0; i < winPerms.length; i++) {
    const winCondition = winPerms[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (winPerms[i].includes("")) {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    //update html
    gameStatus = false;
    return "Win";
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    //update html
    gameStatus = false;
    return "Draw";
  }

  //player change;
}
