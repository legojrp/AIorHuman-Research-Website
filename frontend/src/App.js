import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Disclaimer from './Disclaimer';
import Quiz from './Quiz';
import { Box} from '@chakra-ui/react';
import SurveyResultPage from './Success';
function App() {
  return (
    <BrowserRouter>
      <Box bg="black" color="white" minH="100vh" py={10} px={6}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/success" element={<SurveyResultPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
