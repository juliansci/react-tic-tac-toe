import { Box, ScaleFade } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { CgShapeCircle } from 'react-icons/cg';
import { BoardCellValue } from '../../models';

type BoardCellProps = {
  player: BoardCellValue;
};

const PlayerIcon = ({ player }: BoardCellProps) => {
  const renderValue =
    player === 'None' ? null : player === 'X' ? (
      <Box color="yellow.400" fontSize={{ base: '2xl', md: '4xl' }}>
        <FaTimes />
      </Box>
    ) : (
      <Box color="orange.500" fontSize={{ base: '3xl', md: '5xl' }}>
        <CgShapeCircle />
      </Box>
    );
  return (
    <ScaleFade initialScale={0.2} in={!!renderValue}>
      {renderValue}
    </ScaleFade>
  );
};

export default PlayerIcon;
