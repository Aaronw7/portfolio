import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';

export default function AboutMe() {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Box display="flex" justifyContent="center">
          <Image
            rounded={'md'}
            alt={'personal image'}
            src={
              'https://i.imgur.com/3khkMf3.jpeg'
            }
            objectFit={'cover'}
            fit={'cover'}
            align={'center'}
            h={{ base: '240px', sm: '320px', md: '400px', lg: '480px', xl: '560px' }}
          />
        </Box>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              AARON WANG
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Software Developer
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Welcome to my portfolio!
              </Text>
              <Text fontSize={'lg'}>
                I am a new Full Stack Developer coming from an engineering background in the Energy Sector.
                It has been my dream for the past few years to enter tech and I am finally taking the leap of faith.
                Thank you for taking the time to look around!
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Technical Skills
              </Text>
              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Front End:
                  </Text>{' '}
                  JavaScript, Typescript, React, Angular, HTML, CSS</ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Back End:
                  </Text>{' '}
                  Node.js, Express, PostgreSQL, MongoDB, MySQL, RESTful API Development</ListItem>{' '}
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Testing/Deployment:
                  </Text>{' '}
                  Jest, Mocha, Chai, AWS: EC2 / RDS / S3
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Developer Tools:
                  </Text>{' '}
                  Vim, Git, npm, Nx, Webpack, Babel, Agile Methodology, Scrum, TDD
                </ListItem>
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Previous Experience
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    University of California, Irvine
                  </Text>{' '}
                  Chemical Engineering
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Schlumberger
                  </Text>{' '}
                  Field Engineer
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Cordoba Corporation
                  </Text>{' '}
                  Gas Pipeline Engineer
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}