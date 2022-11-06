import { BoardCellValue, Player } from '../models';

export const generateEmptyBoard = (size: number) => {
  return Array(size * size).fill('None');
};

export const getNextTurn = (currentTurn: Player): Player => {
  return currentTurn === 'X' ? 'O' : 'X';
};

const convertBoardDataToMatrix = (
  boardData: BoardCellValue[],
  boardSize: number,
): BoardCellValue[][] => {
  return boardData.reduce(
    (rows, value, index) =>
      (index % boardSize === 0
        ? rows.push([value])
        : rows[rows.length - 1].push(value)) && rows,
    [] as any,
  );
};

export const checkWinner = (
  boardData: BoardCellValue[],
  lastCellSelection: number,
  boardSize: number,
): Player | null => {
  const lastSelection = boardData[lastCellSelection];
  if (lastSelection === 'None') return null;
  const lastPlayer = lastSelection as Player;
  const boardDataMatrix = convertBoardDataToMatrix(boardData, boardSize);
  const matrixRowIndex = Math.floor(lastCellSelection / boardSize);
  const matrixColumnIndex = lastCellSelection % boardSize;

  // Check Horizontal
  const horizontalRow = boardDataMatrix[matrixRowIndex];
  const horizontalRowSet = new Set(horizontalRow);
  const winnerOnHorizontal = horizontalRowSet.size === 1;
  if (winnerOnHorizontal) {
    return lastPlayer;
  }

  // Check Vertical
  let columnsSet = new Set();
  for (const boardRows of boardDataMatrix) {
    columnsSet.add(boardRows[matrixColumnIndex]);
  }
  const winnerOnVertical = columnsSet.size === 1;
  if (winnerOnVertical) {
    return lastPlayer;
  }

  // Check Diagonal
  const descendantDiagonal: BoardCellValue[] = [];
  const ascendantDiagonal: BoardCellValue[] = [];
  for (let row = 0; row < boardDataMatrix.length; row++) {
    for (let col = 0; col < boardDataMatrix.length; col++) {
      if (row === col) {
        descendantDiagonal.push(boardDataMatrix[row][col]);
      }
    }
  }
  for (let row = 0; row < boardDataMatrix.length; row++) {
    for (let col = 0; col < boardDataMatrix.length; col++) {
      if (row + col === boardDataMatrix.length - 1) {
        ascendantDiagonal.push(boardDataMatrix[row][col]);
      }
    }
  }

  const descendantDiagonalSet = new Set(descendantDiagonal);
  const ascendantDiagonalSet = new Set(ascendantDiagonal);
  const winnerOnDiagonal =
    (descendantDiagonal[0] === lastPlayer &&
      descendantDiagonalSet.size === 1) ||
    (ascendantDiagonal[0] === lastPlayer && ascendantDiagonalSet.size === 1);

  if (winnerOnDiagonal) {
    return lastPlayer;
  }

  return null;
};
