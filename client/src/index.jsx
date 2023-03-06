import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Stack, Heading, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react';
import TabSection from './Components/TabSection.jsx';

function App() {
  return (
    <ChakraProvider>
      <Stack direction='row' mt={1} ml={1} style={{ position: 'sticky', top: '0' }} bg='rgba(255, 255, 255, 0.9)'>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          w='40px'
          h='40px'
          borderRadius='md'
          bg='#67b7df'
          color='white'
        >
          <Text fontWeight='bold' fontSize='lg'>
            AW
          </Text>
        </Box>
        <Heading size='md' pt={2}>AARON WANG</Heading>
      </Stack>
      <TabSection />
    </ChakraProvider>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);