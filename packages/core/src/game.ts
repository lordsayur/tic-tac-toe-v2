export type State = "x" | "o" | "-";

export type BoardState = State[][];

export class Game {
  private _currentBoardState: number = 0;
  private _boardStates: BoardState[] = [];

  start(boardState?: {
    initialState: BoardState[];
    currentBoardState: number;
  }) {
    if (boardState) {
      this._boardStates = boardState.initialState;
      this._currentBoardState = boardState.currentBoardState;
      return;
    }

    this._boardStates.push([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  }

  get currentBoardState() {
    return this._boardStates[this._currentBoardState];
  }

  get boardStates() {
    return this._boardStates;
  }
}
