import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Heading, UnorderedList, InputGroup, Input, InputRightElement, Button} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Heading>AARON'S PORTFOLIO</Heading>
      <Input
        placeholder='SHOW UP?'
      />
      <UnorderedList></UnorderedList>
      <InputGroup>
        <Input/>
        <InputRightElement>
          <Button>Send</Button>
        </InputRightElement>
      </InputGroup>
    </ChakraProvider>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);