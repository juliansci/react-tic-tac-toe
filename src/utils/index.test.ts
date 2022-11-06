import '@testing-library/jest-dom';
import { checkWinner, generateEmptyBoard, getNextTurn } from '.';

describe('utils', () => {
  describe('generateEmptyBoard', () => {
    it('board size 3', () => {
      const boardSize = 3;
      const board = generateEmptyBoard(boardSize);
      expect(board).not.toBeNull();
      expect(board.length).toEqual(boardSize * boardSize);
      expect(board).toContain('None');
      expect(board).not.toContain('X');
      expect(board).not.toContain('Y');
    });
  });
  describe('getNextTurn', () => {
    it('current turn X', () => {
      const nextTurn = getNextTurn('X');
      expect(nextTurn).toEqual('O');
    });
    it('current turn O', () => {
      const nextTurn = getNextTurn('O');
      expect(nextTurn).toEqual('X');
    });
  });
  describe('checkWinner', () => {
    describe('checkWinner - board size 3', () => {
      let boardSize = 3;
      let boardData = generateEmptyBoard(boardSize);

      beforeEach(() => {
        boardData = generateEmptyBoard(boardSize);
      });

      it('with empty board', () => {
        const response = checkWinner(boardData, 0, boardSize);
        expect(response).toBeNull();
      });
      it('with no winner', () => {
        boardData[0] = 'X';
        boardData[1] = 'X';
        boardData[2] = 'O';
        boardData[3] = 'O';
        boardData[4] = 'O';

        const response = checkWinner(boardData, 4, boardSize);
        expect(response).toBeNull();
      });
      it('with no completed horizontal', () => {
        boardData[0] = 'X';
        boardData[3] = 'O';
        boardData[1] = 'X';
        boardData[4] = 'O';

        const response = checkWinner(boardData, 4, boardSize);
        expect(response).toBeNull();
      });
      it('with horizontal winner - first row', () => {
        boardData[0] = 'X';
        boardData[3] = 'O';
        boardData[1] = 'X';
        boardData[4] = 'O';
        boardData[2] = 'X';

        const response = checkWinner(boardData, 2, boardSize);
        expect(response).toEqual('X');
      });
      it('with horizontal winner - second row', () => {
        boardData[0] = 'X';
        boardData[3] = 'O';
        boardData[1] = 'X';
        boardData[4] = 'O';
        boardData[6] = 'X';
        boardData[5] = 'O';

        const response = checkWinner(boardData, 5, boardSize);
        expect(response).toEqual('O');
      });
      it('with horizontal winner - third row', () => {
        boardData[6] = 'X';
        boardData[3] = 'O';
        boardData[7] = 'X';
        boardData[4] = 'O';
        boardData[8] = 'X';

        const response = checkWinner(boardData, 8, boardSize);
        expect(response).toEqual('X');
      });
      it('with no completed vertical winner', () => {
        boardData[0] = 'X';
        boardData[1] = 'O';
        boardData[3] = 'X';
        boardData[4] = 'O';

        const response = checkWinner(boardData, 4, boardSize);
        expect(response).toBeNull();
      });
      it('with vertical winner - first column', () => {
        boardData[0] = 'X';
        boardData[1] = 'O';
        boardData[3] = 'X';
        boardData[4] = 'O';
        boardData[6] = 'X';

        const response = checkWinner(boardData, 6, boardSize);
        expect(response).toEqual('X');
      });
      it('with vertical winner - second column', () => {
        boardData[0] = 'X';
        boardData[1] = 'O';
        boardData[3] = 'X';
        boardData[4] = 'O';
        boardData[8] = 'X';
        boardData[7] = 'O';
        const response = checkWinner(boardData, 7, boardSize);
        expect(response).toEqual('O');
      });
      it('with vertical winner - third column', () => {
        boardData[2] = 'X';
        boardData[4] = 'O';
        boardData[8] = 'X';
        boardData[7] = 'O';
        boardData[5] = 'X';
        const response = checkWinner(boardData, 5, boardSize);
        expect(response).toEqual('X');
      });
      it('with descendant diagonal winner', () => {
        boardData[0] = 'X';
        boardData[1] = 'O';
        boardData[4] = 'X';
        boardData[7] = 'O';
        boardData[8] = 'X';
        const response = checkWinner(boardData, 8, boardSize);
        expect(response).toEqual('X');
      });
      it('with ascendant diagonal winner', () => {
        boardData[0] = 'X';
        boardData[6] = 'O';
        boardData[1] = 'X';
        boardData[4] = 'O';
        boardData[8] = 'X';
        boardData[2] = 'O';

        const response = checkWinner(boardData, 2, boardSize);
        expect(response).toEqual('O');
      });
      it('with no completed ascendant diagonal winner', () => {
        boardData[0] = 'X';
        boardData[6] = 'O';
        boardData[1] = 'X';
        boardData[4] = 'O';

        const response = checkWinner(boardData, 4, boardSize);
        expect(response).toBeNull();
      });
      it('with no completed descendant diagonal winner', () => {
        boardData[0] = 'X';
        boardData[1] = 'O';
        boardData[4] = 'X';
        boardData[7] = 'O';
        boardData[2] = 'X';

        const response = checkWinner(boardData, 2, boardSize);
        expect(response).toBeNull();
      });
    });
    describe('checkWinner - board size 5', () => {
      let boardSize = 5;
      let boardData = generateEmptyBoard(boardSize);

      beforeEach(() => {
        boardData = generateEmptyBoard(boardSize);
      });

      it('with empty board', () => {
        const response = checkWinner(boardData, 0, boardSize);
        expect(response).toBeNull();
      });
      it('with no winner', () => {
        boardData[0] = 'X';
        boardData[1] = 'X';
        boardData[2] = 'O';
        boardData[3] = 'O';
        boardData[4] = 'O';

        const response = checkWinner(boardData, 4, boardSize);
        expect(response).toBeNull();
      });
      it('with horizontal winner - first row', () => {
        boardData[0] = 'X';
        boardData[10] = 'O';
        boardData[1] = 'X';
        boardData[11] = 'O';
        boardData[2] = 'X';
        boardData[12] = 'O';
        boardData[3] = 'X';
        boardData[16] = 'O';
        boardData[4] = 'X';
        const response = checkWinner(boardData, 4, boardSize);
        expect(response).toEqual('X');
      });
      it('with horizontal winner - second row', () => {
        boardData[0] = 'X';
        boardData[5] = 'O';
        boardData[1] = 'X';
        boardData[6] = 'O';
        boardData[2] = 'X';
        boardData[7] = 'O';
        boardData[13] = 'X';
        boardData[8] = 'O';
        boardData[3] = 'X';
        boardData[9] = 'O';

        const response = checkWinner(boardData, 9, boardSize);
        expect(response).toEqual('O');
      });
      it('with horizontal winner - fifth row', () => {
        boardData[20] = 'X';
        boardData[5] = 'O';
        boardData[21] = 'X';
        boardData[6] = 'O';
        boardData[22] = 'X';
        boardData[7] = 'O';
        boardData[23] = 'X';
        boardData[12] = 'O';
        boardData[24] = 'X';

        const response = checkWinner(boardData, 24, boardSize);
        expect(response).toEqual('X');
      });
      it('with vertical winner - first column', () => {
        boardData[0] = 'X';
        boardData[1] = 'O';
        boardData[5] = 'X';
        boardData[6] = 'O';
        boardData[10] = 'X';
        boardData[7] = 'O';
        boardData[15] = 'X';
        boardData[12] = 'O';
        boardData[20] = 'X';

        const response = checkWinner(boardData, 20, boardSize);
        expect(response).toEqual('X');
      });
      it('with vertical winner - second column', () => {
        boardData[3] = 'X';
        boardData[1] = 'O';
        boardData[5] = 'X';
        boardData[6] = 'O';
        boardData[10] = 'X';
        boardData[11] = 'O';
        boardData[15] = 'X';
        boardData[16] = 'O';
        boardData[20] = 'X';
        boardData[21] = 'O';

        const response = checkWinner(boardData, 21, boardSize);
        expect(response).toEqual('O');
      });
      it('with vertical winner - fifth column', () => {
        boardData[0] = 'X';
        boardData[1] = 'O';
        boardData[5] = 'X';
        boardData[6] = 'O';
        boardData[10] = 'X';
        boardData[7] = 'O';
        boardData[15] = 'X';
        boardData[12] = 'O';
        boardData[20] = 'X';
        const response = checkWinner(boardData, 20, boardSize);
        expect(response).toEqual('X');
      });
      it('with descendant diagonal winner', () => {
        boardData[0] = 'X';
        boardData[1] = 'O';
        boardData[6] = 'X';
        boardData[7] = 'O';
        boardData[12] = 'X';
        boardData[13] = 'O';
        boardData[18] = 'X';
        boardData[19] = 'O';
        boardData[24] = 'X';

        const response = checkWinner(boardData, 24, boardSize);
        expect(response).toEqual('X');
      });
      it('with ascendant diagonal winner', () => {
        boardData[0] = 'X';
        boardData[4] = 'O';
        boardData[1] = 'X';
        boardData[8] = 'O';
        boardData[2] = 'X';
        boardData[12] = 'O';
        boardData[21] = 'X';
        boardData[16] = 'O';
        boardData[22] = 'X';
        boardData[20] = 'O';

        const response = checkWinner(boardData, 20, boardSize);
        expect(response).toEqual('O');
      });
    });
  });
});
