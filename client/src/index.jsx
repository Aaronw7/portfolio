import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Heading, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TabSection from './Components/TabSection.jsx';

function App() {
  return (
    <ChakraProvider>
      <Heading>AARON WANG</Heading>
      <TabSection />
    </ChakraProvider>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);