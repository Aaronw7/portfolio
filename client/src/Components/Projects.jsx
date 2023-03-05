import React from 'react';
import { Stack, Flex, Box, Image, Text, Heading, Button } from '@chakra-ui/react';

export default function Projects() {
  return (
    <Stack spacing="0px">
      <Flex pb={10}>
        <Flex w="40%" justifyContent={'flex-end'}>
          <Box
            display='flex'
            borderRadius={'19px'}
            borderWidth={'4px'}
            borderColor={'black'}
            >
            <Image
              borderRadius={'13px'}
              alt={'chatter'}
              src={
                'https://i.imgur.com/GN8oIvV.png'
              }
              objectFit={'cover'}
              fit={'cover'}
              align={'center'}
              h={{ base: '240px', sm: '320px', md: '400px', lg: '480px', xl: '560px' }}
            />
          </Box>
        </Flex>
        <Flex w="60%" direction='column' alignItems='center'>
          <Box mb="4">
            <Heading as="h2" size="lg">Chatter</Heading>
          </Box>
          <Box mb="4">
            <Text>Paragraph 1</Text>
          </Box>
          <Box mb="4">
            <Text>List 1</Text>
          </Box>
          <Box mb="4">
            <Text>Paragraph 2</Text>
          </Box>
          <Box>
            <Button>Visit the Site</Button>
          </Box>
        </Flex>
      </Flex>
      <Flex pt={10} pb={4} bg='#bbdff1'>
        <Flex w="50%" direction='column' alignItems='center'>
          <Box mb="4">
            <Heading as="h2" size="lg">Portfolio</Heading>
          </Box>
          <Box mb="4">
            <Text>Paragraph 1</Text>
          </Box>
          <Box mb="4">
            <Text>List 1</Text>
          </Box>
          <Box mb="4">
            <Text>Paragraph 2</Text>
          </Box>
          <Box>
            <Button>Visit the Site</Button>
          </Box>
        </Flex>
        <Flex w="50%">
          <Box
            display='flex'
            borderWidth={'4px'}
            borderColor={'black'}
            >
            <Image
              alt={'chatter'}
              src={
                'https://i.imgur.com/CoSTv6n.png'
              }
              objectFit={'cover'}
              fit={'cover'}
              align={'center'}
              h={{ base: '120px', sm: '160px', md: '200px', lg: '240px', xl: '280px' }}
            />
          </Box>
        </Flex>
      </Flex>
    </Stack>
  )
}