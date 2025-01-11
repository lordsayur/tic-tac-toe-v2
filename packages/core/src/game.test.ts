import { describe, expect, it } from "vitest";
import { BoardState, Game, initialState } from "./game";

describe("Game", () => {
  describe("start", () => {
    describe("without board states", () => {
      it("should initialize board state with '-' by default", () => {
        // arrange
        const game = new Game();

        // act
        game.start();

        // assert
        expect(game.boardStates).toHaveLength(1);
        expect(game.currentBoardState).toStrictEqual<BoardState>(
          initialState(),
        );
      });
    });

    describe("with board states", () => {
      it("should initialize board state with specified state", () => {
        // arrange
        const game = new Game();

        // act
        game.start({
          states: [
            [
              ["x", "-", "-"],
              ["-", "-", "-"],
              ["-", "-", "-"],
            ],
          ],
          currentState: 0,
        });

        // assert
        expect(game.boardStates).toHaveLength(1);
        expect(game.currentBoardState).toStrictEqual<BoardState>([
          ["x", "-", "-"],
          ["-", "-", "-"],
          ["-", "-", "-"],
        ]);
      });

      it("should throw invalid current state exception", () => {
        // arrange
        const game = new Game();

        // act
        expect(() =>
          game.start({
            states: [
              [
                ["x", "-", "-"],
                ["-", "-", "-"],
                ["-", "-", "-"],
              ],
            ],
            currentState: 1,
          }),
        ).toThrowError("current board state is out of range");
      });
    });
  });
});
