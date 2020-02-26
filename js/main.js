/*
    Project ZER0 - Tic Tac Toe
    by Ali A.(doubleInc)

    ...
*/
// animations
$(document).ready(function() {
  $(".btn").on("click", function(e) {
    e.preventDefault();

    $(".slider").animate(
      {
        opacity: "1",
        marginTop: "-=500"
      },
      1000,
      "linear"
    );
  });
});

// $(document).ready(function() {
//   $(".animsition").animsition({
//     inClass: "fade-in-up",
//     outClass: "fade-out-up",
//     inDuration: 1500,
//     outDuration: 800,
//     linkElement: ".animsition-link",
//     // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//     loading: true,
//     loadingParentElement: "#main-container", //animsition wrapper element
//     loadingClass: "animsition-loading",
//     loadingInner: "", // e.g '<img src="loading.svg" />'
//     timeout: false,
//     timeoutCountdown: 5000,
//     onLoadEvent: true,
//     browser: ["animation-duration", "-webkit-animation-duration"],
//     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//     overlay: false,
//     overlayClass: "animsition-overlay-slide",
//     overlayParentElement: "body",
//     transition: function(url) {
//       window.location.href = url;
//     }
//   });
// });

// game logic

const gameState = function() {
  return new Array(9).fill(""); //[ '', '', '', '', '', '', '', '', '' ]
};

var currentGame;

var gameStatus = false; // game in progress or not.

var currentPlayer = 1; // 'X' = 1, 'O' = 0

//start a new game
function startGame() {
  gameStatus = true;
  gameStatus;

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
