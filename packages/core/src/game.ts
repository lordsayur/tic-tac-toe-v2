export type State = "x" | "o" | "-";

export type BoardState = State[][];

export class Game {
  private _currentBoardState: number = 0;
  private _boardStates: BoardState[] = [];

  start(boardStates?: { states: BoardState[]; currentState: number }) {
    if (boardStates) {
      if (boardStates.currentState + 1 > boardStates.states.length) {
        throw new Error("current board state is out of range");
      }
      this._boardStates = boardStates.states;
      this._currentBoardState = boardStates.currentState;
      return;
    }

    this._boardStates.push(initialState());
  }

  get currentBoardState() {
    return this._boardStates[this._currentBoardState];
  }

  get boardStates() {
    return this._boardStates;
  }
}

export function initialState(): BoardState {
  return [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
}
