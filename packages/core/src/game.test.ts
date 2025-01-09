import { describe, expect, it } from "vitest";
import { BoardState, Game } from "./game";

describe("Game", () => {
  describe("start", () => {
    it("should initialize board state with '-' by default", () => {
      // arrange
      const game = new Game();

      // act
      game.start();

      // assert
      expect(game.boardStates).toHaveLength(1);
      expect(game.currentBoardState).toStrictEqual<BoardState>([
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
      ]);
    });

    it("should initialize board state with specified state", () => {
      // arrange
      const game = new Game();

      // act
      game.start({
        initialState: [
          [
            ["x", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"],
          ],
        ],
        currentBoardState: 0,
      });

      // assert
      expect(game.boardStates).toHaveLength(1);
      expect(game.currentBoardState).toStrictEqual<BoardState>([
        ["x", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
      ]);
    });
  });
});
