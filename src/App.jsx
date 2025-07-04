import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CreatePage from './pages/createpage';
import Home from './pages/home';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <Box minH="100vh">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
