import React from 'react';
import { Stack, HStack, Flex, Box, Image, Text, Heading, Button, UnorderedList, ListItem } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Projects() {
  return (
    <Stack spacing="0px">
      <Flex pt={10} pb={20}>
        <Flex w="40%" justifyContent={'flex-end'}>
          <Box
            display='flex'
            borderRadius={'19px'}
            borderWidth={'4px'}
            borderColor={'black'}
            h={{ base: '218px', sm: '288px', md: '358px', lg: '428px', xl: '498px' }}
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
              h={{ base: '210px', sm: '280px', md: '350px', lg: '420px', xl: '490px' }}
            />
          </Box>
        </Flex>
        <Flex w="60%" justifyContent='center'>
          <Flex w="60%" direction='column' alignItems='center'>
            <Box mb="4">
              <Heading size="xl">Chatter</Heading>
            </Box>
            <Box mb="4">
              <Text>A real-time chat application I made on a MERN stack to reinforce my understanding of full-stack web development while exploring new technologies</Text>
            </Box>
            <Box mb="4">
              <Heading size='md'>Technologies</Heading>
              <UnorderedList h='120px' w='300px' display='flex' flexDirection='column' flexWrap='wrap'>
                <ListItem>ReactJS</ListItem>
                <ListItem>NodeJS</ListItem>
                <ListItem>Babel/Webpack</ListItem>
                <ListItem>ChakraUI</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>SocketIO</ListItem>
                <ListItem>Moment</ListItem>
                <ListItem>Multer</ListItem>
                <ListItem>Deployed on AWS</ListItem>
              </UnorderedList>
            </Box>
            <HStack spacing={8}>
              <Button
                bg='#bbdff1'
                onClick={() => window.open("https://github.com/Aaronw7/chatter")}
                leftIcon={<BsGithub size="28px" />}
              >
                Github
              </Button>
              <Button
                bg='#e8b091'
                onClick={() => window.open("http://chatterapp.net/")}
                rightIcon={<ExternalLinkIcon size="28px" />}
              >
                Visit the Site
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex pt={20} pb={14} bg='#bbdff1'>
        <Flex w="50%" justifyContent='center'>
          <Flex w="70%" direction='column' alignItems='center'>
            <Box mb="4">
              <Heading size="xl">Portfolio</Heading>
            </Box>
            <Box mb="4">
              <Text>This portfolio website was built entirely on React and NodeJS!</Text>
              <Text>I wanted to use this space to document my progress and journey.</Text>
            </Box>
            <Box mb="4">
              <Heading size='md'>Technologies</Heading>
              <UnorderedList>
                <ListItem>ReactJS</ListItem>
                <ListItem>NodeJS</ListItem>
                <ListItem>Babel/Webpack</ListItem>
                <ListItem>ChakraUI</ListItem>
                <ListItem>Nodemailer</ListItem>
                <ListItem>Deployed on AWS</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Button
                bg='#91cbe8'
                onClick={() => window.open("https://github.com/Aaronw7/chatter")}
                leftIcon={<BsGithub size="28px" />}
              >
                Github
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Flex w="50%" justifyContent='center'>
          <Box
            display='flex'
            borderWidth={'4px'}
            borderColor={'black'}
            h={{ base: '128px', sm: '168px', md: '208px', lg: '248px', xl: '288px' }}
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