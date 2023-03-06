import React, { useState } from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Tooltip
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsPerson } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [tooltipText, setTooltipText] = useState('Click to copy');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('+1(626)757-1286');
      setCopied(true);
      setTooltipText('Copied!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => {
        if (res.ok) {
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          alert('Message failed to send.');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error sending message.');
      });
  };

  return (
    <Container maxW='full' mt={0} centerContent overflow='hidden'>
      <Flex>
        <Box
          bg='#46464f'
          color='white'
          borderRadius='lg'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color='#DCE2FF'>
                    Fill up the form to contact me!
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start'>
                      <Tooltip hasArrow label={tooltipText} closeOnClick={false}>
                        <Button
                          onClick={handleCopy}
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='#DCE2FF'
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color='#1970F1' size='20px' />}>
                          +1 (626) 757-1286
                        </Button>
                      </Tooltip>
                      <Button
                        onClick={() => {
                          window.location.href = 'mailto:aaronwang.eng@gmail.com';
                        }}
                        size='md'
                        height='48px'
                        width='250px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color='#1970F1' size='20px' />}>
                        aaronwang.eng@gmail.com
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='225px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{}}
                        leftIcon={<MdLocationOn color='#1970F1' size='20px' />}>
                        Los Angeles, California
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    ml={12}
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems='flex-start'>
                    <IconButton
                      aria-label='linkedin'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<SiLinkedin size='28px' />}
                      onClick={() => window.open('https://www.linkedin.com/in/aaronwang96/')}
                    />
                    <IconButton
                      aria-label='github'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size='28px' />}
                      onClick={() => window.open('https://github.com/Aaronw7')}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg='white' borderRadius='lg'>
                  <Box m={8} color='#0B0E3F'>
                    <VStack spacing={5}>
                      <FormControl id='name'>
                        <FormLabel>Name</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<BsPerson color='gray.800' />}
                          />
                          <Input type='text' size='md' value={name} onChange={handleNameChange} autoComplete='off'/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<MdOutlineEmail color='gray.800' />}
                          />
                          <Input type='text' size='md' value={email} onChange={handleEmailChange} autoComplete='off'/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor='gray.300'
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          value={message}
                          onChange={handleMessageChange}
                          autoComplete='off'
                        />
                      </FormControl>
                      <FormControl id='name' float='right'>
                        <Button
                          variant='solid'
                          bg='#0D74FF'
                          color='white'
                          _hover={{}}
                          onClick={handleSubmit}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}