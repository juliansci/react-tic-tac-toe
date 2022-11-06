import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import Board from './components/Board';
import Layout from './components/Layout';
import boardAtom from './recoil/board/atom';
import gameAtom from './recoil/game/atom';
import { generateEmptyBoard } from './utils';

function App() {
  const resetBoard = useResetRecoilState(boardAtom);
  const resetGame = useResetRecoilState(gameAtom);
  const [gameData, setGameData] = useRecoilState(gameAtom);
  const setBoardData = useSetRecoilState(boardAtom);

  const handleReset = () => {
    resetBoard();
    resetGame();
  };

  const handleBoardSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newBoardSize = +event.target.value;
    handleReset();
    setGameData({
      ...gameData,
      boardSize: newBoardSize,
    });
    setBoardData(generateEmptyBoard(newBoardSize));
  };

  return (
    <Layout>
      <Stack gap={2} maxW="sm" w="full">
        <Stack fontSize="3xl">
          {gameData.winner ? (
            <HStack>
              <Text>Winner:</Text>
              <Text fontWeight="bold">{gameData.winner}</Text>
            </HStack>
          ) : (
            <HStack>
              <Text>Turn:</Text>
              <Text fontWeight="bold">{gameData.turn}</Text>
            </HStack>
          )}
        </Stack>
        <FormControl>
          <FormLabel>Select board size</FormLabel>
          <Select onChange={handleBoardSizeChange} value={gameData.boardSize}>
            <option value="3">3x3</option>
            <option value="4">4x4</option>
            <option value="5">5x5</option>
            <option value="6">6x6</option>
          </Select>
        </FormControl>

        <Button onClick={handleReset}>RESET</Button>
      </Stack>
      <Stack pt={8}>
        <Board />
      </Stack>
    </Layout>
  );
}

export default App;
