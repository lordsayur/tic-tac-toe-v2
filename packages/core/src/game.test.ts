import { describe, expect, it } from "vitest";
import { Game } from "./game";

describe("Game", () => {
  it("should initialize board state on start", () => {
    // arrange
    const game = new Game();

    // act
    game.start();

    // assert
    expect(game.boardStates).toHaveLength(1);
    expect(game.currentBoardState).toStrictEqual([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  });
});
