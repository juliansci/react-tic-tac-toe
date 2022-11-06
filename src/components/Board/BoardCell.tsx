import { Flex, GridItem } from '@chakra-ui/react';
import { BoardCellValue } from '../../models';
import { FaRegCircle, FaTimes } from 'react-icons/fa';

type BoardCellProps = {
  value: BoardCellValue;
  position: number;
  handleCellClick: (numberCell: number) => void;
};

const BoardCell = ({ value, position, handleCellClick }: BoardCellProps) => {
  const renderValue =
    value === 'None' ? null : value === 'X' ? <FaTimes /> : <FaRegCircle />;
  const isSelected = value !== 'None';

  return (
    <GridItem
      w={{ base: 12, md: 20 }}
      h={{ base: 12, md: 20 }}
      borderColor="white"
      border="1px"
      cursor={isSelected ? 'default' : 'pointer'}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        h="full"
        w="full"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="bold"
        onClick={() => handleCellClick(position)}
      >
        {renderValue}
      </Flex>
    </GridItem>
  );
};

export default BoardCell;
