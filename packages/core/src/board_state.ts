export class BoardStateFactory {
  get initialState(): BoardState {
    return [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
  }

  create(cell?: CellDetails, boardState?: BoardState): BoardState {
    const newBoardState = boardState ?? this.initialState;

    if (cell) {
      return this.update(newBoardState, cell);
    }

    return newBoardState;
  }

  update(boardState: BoardState, cell: CellDetails): BoardState {
    boardState[cell.row - 1][cell.col - 1] = cell.value;

    return boardState;
  }
}

export type Cell = "x" | "o" | "-";
export type BoardState = Cell[][];

export type CellDetails = {
  row: number;
  col: number;
  value: Cell;
};
