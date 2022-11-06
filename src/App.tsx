import { Stack } from '@chakra-ui/react';
import Board from './components/Board';
import GameControls from './components/GameControls';
import GameInformation from './components/GameInformation';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Stack gap={2} maxW="sm" w="full">
        <GameControls />
        <GameInformation />
      </Stack>
      <Stack pt={8}>
        <Board />
      </Stack>
    </Layout>
  );
}

export default App;
