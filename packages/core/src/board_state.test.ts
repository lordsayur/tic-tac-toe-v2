import { describe, expect, it } from "vitest";
import { BoardState, BoardStateFactory } from "./board_state";
import { TestLog } from "./test-utils/test_log";

describe("State", () => {
  it("should create initial state by default", () => {
    // arrange
    const factory = new BoardStateFactory();

    // act
    const result = factory.create();

    // assert
    expect(result).toStrictEqual<BoardState>([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  });

  it("should create state with specified cell", () => {
    TestLog.arrange();
    const factory = new BoardStateFactory();

    TestLog.act();
    const result = factory.create({ row: 1, col: 1, value: "x" });

    TestLog.act();
    expect(result).toStrictEqual([
      ["x", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  });

  it("should create state with specified cell from existing board state", () => {
    TestLog.arrange();
    const factory = new BoardStateFactory();
    const initialBoardState = factory.create({ row: 1, col: 1, value: "x" });

    TestLog.act();
    const result = factory.create(
      { row: 1, col: 2, value: "o" },
      initialBoardState,
    );

    TestLog.act();
    expect(result).toStrictEqual<BoardState>([
      ["x", "o", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  });
});
