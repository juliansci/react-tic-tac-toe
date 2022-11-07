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
      bg="gray.800"
      cursor={isSelected ? 'default' : 'pointer'}
      _hover={{
        background: isSelected ? 'gray.800' : 'gray.700',
        borderColor: 'teal.300',
        transform: 'all',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in-out',
      }}
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
