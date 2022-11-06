import { atom } from 'recoil';
import { BoardCellValue } from '../../models';
import { generateEmptyBoard } from '../../utils';
import { DEFAULT_BOARD_SIZE } from '../../utils/constants';
import { localStorageEffect } from '../effects';

const initialBoard = generateEmptyBoard(DEFAULT_BOARD_SIZE);
const BOARD_STORAGE_KEY = 'BOARD_STORAGE';

const boardAtom = atom<BoardCellValue[]>({
  key: 'boardAtom',
  default: initialBoard,
  effects: [localStorageEffect<BoardCellValue[]>(BOARD_STORAGE_KEY)],
});

export default boardAtom;
