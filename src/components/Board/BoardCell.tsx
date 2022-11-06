import { Flex, GridItem } from '@chakra-ui/react';
import { BoardCellValue } from '../../models';
import PlayerIcon from '../PlayerIcon';

type BoardCellProps = {
  value: BoardCellValue;
  position: number;
  handleCellClick: (numberCell: number) => void;
};

const BoardCell = ({ value, position, handleCellClick }: BoardCellProps) => {
  const isSelected = value !== 'None';

  return (
    <GridItem
      w={{ base: 12, md: 20 }}
      h={{ base: 12, md: 20 }}
      borderWidth="3px"
      borderColor={'teal.400'}
      bg="#1A202C"
      cursor={isSelected ? 'default' : 'pointer'}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        h="full"
        w="full"
        fontWeight="bold"
        onClick={() => handleCellClick(position)}
      >
        <PlayerIcon player={value} />
      </Flex>
    </GridItem>
  );
};

export default BoardCell;
