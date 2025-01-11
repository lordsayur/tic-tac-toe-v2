import { describe, expect, it } from "vitest";
import { BoardState, Game, initialState } from "./game";
import { TestLog } from "./test-utils/test_log";

describe("Game", () => {
  describe("start", () => {
    describe("without board states", () => {
      it("should initialize board state with '-' by default", () => {
        TestLog.arrange();
        const game = new Game();

        TestLog.act();
        game.start();

        TestLog.assert();
        expect(game.boardStates).toHaveLength(1);
        expect(game.currentBoardState).toStrictEqual<BoardState>(
          initialState(),
        );
      });
    });

    describe("with board states", () => {
      it("should initialize board state with specified state", () => {
        TestLog.arrange();
        const game = new Game();

        TestLog.act();
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

        TestLog.assert();
        expect(game.boardStates).toHaveLength(1);
        expect(game.currentBoardState).toStrictEqual<BoardState>([
          ["x", "-", "-"],
          ["-", "-", "-"],
          ["-", "-", "-"],
        ]);
      });

      it("should throw invalid current state exception", () => {
        TestLog.arrange();
        const game = new Game();

        TestLog.act();
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
