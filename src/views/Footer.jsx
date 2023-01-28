import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Box } from '@chakra-ui/react'

export const Footer = () => (
  <Box as="section" background="#0a0a0a" overflow="hidden">
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: '12',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '4',
          md: '5',
        }}
      >
        <Stack justify="space-between" direction="row" align="center">
          <img 
            src='https://i.imgur.com/CvnchS1.png' 
            style={{
              maxWidth:'100px',
            }}
          />
          <Text fontSize="sm" color="subtle">
          Derive Finance &copy; {new Date().getFullYear()}.
          </Text>
        </Stack>
      </Stack>
    </Container>
  </Box>
)

export default Footer;