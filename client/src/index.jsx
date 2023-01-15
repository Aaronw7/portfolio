import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Heading, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TabSection from './Components/TabSection.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <ChakraProvider>
      <Heading>AARON'S PORTFOLIO</Heading>
      <Box as='button' borderRadius='md' bg='tomato' color='white'>
        SideBar!
      </Box>
      <TabSection />
      <Contact />
    </ChakraProvider>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);