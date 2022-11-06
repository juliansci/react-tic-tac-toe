import { Stack, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import gameAtom from '../../recoil/game/atom';
import PlayerIcon from '../PlayerIcon';

const GameInformation = () => {
  const gameData = useRecoilValue(gameAtom);
  return (
    <Stack fontSize="3xl" alignItems="center" h={20}>
      {gameData.winner ? (
        <>
          <Text fontWeight="bold">Winner</Text>
          <PlayerIcon player={gameData.winner} />
        </>
      ) : (
        <>
          <Text fontWeight="bold">Turn</Text>
          <PlayerIcon player={gameData.turn} />
        </>
      )}
    </Stack>
  );
};

export default GameInformation;
