import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Disclaimer from './Disclaimer';
import Quiz from './Quiz';
import { Box} from '@chakra-ui/react';
function App() {
  return (
    <BrowserRouter>
      <Box bg="black" color="white" minH="100vh" py={10} px={6}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
