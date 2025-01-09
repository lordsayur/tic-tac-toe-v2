export type State = "x" | "o" | "-";

export type BoardState = State[][];

export class Game {
  private _currentBoardState: number = 0;
  private _boardStates: BoardState[] = [];

  start(initialState?: BoardState) {
    if (initialState) {
      this._boardStates.push(initialState);
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
