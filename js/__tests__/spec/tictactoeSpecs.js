//
describe("TicTacToe possible outcomes[win/draw/inprogress].", function() {
  const incompleteMatch = [1, 1, 0, 0, 0, 1, 1, 0, ""];
  const drawnMatch = [1, 1, 0, 0, 0, 1, 1, 0, 0];
  const wonMatch = [1, 1, 1, 0, 0, 1, 1, 0, 0];
  //
  startGame();
  it("Should indicate Match is in progress.", function() {
    //startGame();
    expect(checkBoard(incompleteMatch)).toEqual("in progress");
    // status should be true
    expect(gameStatus).toEqual(true);
  });

  it("Should indicate Match drawn.", function() {
    expect(checkBoard(drawnMatch)).toEqual("draw");
    // game status should be over
    expect(gameStatus).toEqual(false);
  });
  it("Should indicate Match was won.", function() {
    expect(checkBoard(wonMatch)).toEqual("win");
    // game status should be over
    expect(gameStatus).toEqual(false);
  });
  it("Blank board on start of game.", function() {
    // reset board
    startGame();
    // game status should be true
    expect(gameStatus).toEqual(true);
  });

  it("If no board state provided to f:checkBoard, 'currentGame' value should be in progress.", function() {
    //
    startGame();
    expect(checkBoard()).toEqual("in progress");
    expect(gameStatus).toEqual(true);
  });
});
