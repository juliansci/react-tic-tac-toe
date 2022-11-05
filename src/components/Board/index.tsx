import { Grid, GridItem } from '@chakra-ui/react';

const BoardCell = () => {
  return <GridItem w={20} h={20} borderColor="white" border="1px" />;
};

const Board = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      <BoardCell />
      <BoardCell />
      <BoardCell />
      <BoardCell />
      <BoardCell />
      <BoardCell />
      <BoardCell />
      <BoardCell />
      <BoardCell />
    </Grid>
  );
};

export default Board;
