export class Game {
  private _currentBoardState: number = 0;
  private _boardStates: string[][][] = [];

  start() {
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
