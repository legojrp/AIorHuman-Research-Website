import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, Box, extendTheme} from '@chakra-ui/react';


const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "black", // Set to your app's default dark background color
        color: "white",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <Box bg="black">
      <App />
    </Box>
  </ChakraProvider>
);

