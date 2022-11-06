import { atom } from 'recoil';
import { Game } from '../../models';
import {
  DEFAULT_BOARD_SIZE,
  DEFAULT_FIRST_TURN_VALUE,
} from '../../utils/constants';
import { localStorageEffect } from '../effects';
const GAME_STORAGE_KEY = 'GAME_STORAGE';

const gameAtom = atom<Game>({
  key: 'gameAtom',
  default: {
    turn: DEFAULT_FIRST_TURN_VALUE,
    boardSize: DEFAULT_BOARD_SIZE,
  },
  effects: [localStorageEffect<Game>(GAME_STORAGE_KEY)],
});

export default gameAtom;
