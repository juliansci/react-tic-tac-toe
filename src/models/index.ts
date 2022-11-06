export type Player = 'X' | 'O';

export type BoardCellValue = 'None' | Player;

export type Game = {
  turn: Player;
  boardSize: number;
  lastCellSelection?: number;
  winner?: Player;
};
