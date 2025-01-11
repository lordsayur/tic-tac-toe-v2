export class BoardStateFactory {
  get initialState(): BoardState {
    return [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
  }

  create(cell?: CellDetails) {
    if (cell) {
      return this.update(this.initialState, cell);
    }

    return this.initialState;
  }

  update(boardState: BoardState, cell: CellDetails) {
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
