import { Grid } from '@chakra-ui/react';
import { Fragment, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import boardAtom from '../../recoil/board/atom';
import gameAtom from '../../recoil/game/atom';
import { checkWinner, getNextTurn } from '../../utils';
import BoardCell from './BoardCell';

const Board = () => {
  const [boardData, setBoardData] = useRecoilState(boardAtom);
  const [gameData, setGameData] = useRecoilState(gameAtom);

  const handleCellClick = (numberCell: number) => {
    if (gameData.winner) {
      return;
    }
    const cellIsSelected = boardData[numberCell] !== 'None';
    if (!cellIsSelected) {
      const newBoardData = [...boardData];
      newBoardData[numberCell] = gameData.turn;
      setBoardData(newBoardData);
      setGameData({
        ...gameData,
        turn: getNextTurn(gameData.turn),
        lastCellSelection: numberCell,
      });
    }
  };

  useEffect(() => {
    if (
      boardData &&
      (gameData?.lastCellSelection || gameData.lastCellSelection === 0) &&
      gameData?.boardSize &&
      !gameData.winner
    ) {
      const winner = checkWinner(
        boardData,
        gameData.lastCellSelection,
        gameData.boardSize,
      );
      if (winner) {
        setGameData({
          ...gameData,
          winner,
        });
      }
    }
  }, [boardData, gameData, setGameData]);

  if (!boardData || !boardData.length) return null;

  return (
    <Grid templateColumns={`repeat(${gameData.boardSize}, 1fr)`} gap={2}>
      {boardData.map((cell, i) => {
        return (
          <Fragment key={i}>
            <BoardCell
              value={cell}
              position={i}
              handleCellClick={handleCellClick}
            />
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default Board;
