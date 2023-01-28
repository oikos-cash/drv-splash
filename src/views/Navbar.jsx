import {
    Box,
    Container,
    Divider,
    HStack,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
  import { Button } from '@chakra-ui/react'
  import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
  import { ButtonGroup, IconButton, Stack, Text } from '@chakra-ui/react'

  export const Navbar = () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
      <Box
        as="section"
      >
        <Box
          as="nav"
          bg="#010101"
          py={{
            base: '4',
            lg: '5',
          }}
        >
          <Container>
            <HStack spacing="10" justify="space-between">
              <img 
                src='https://i.imgur.com/UBsqUVN.png' 
                style={{
                  maxWidth:'50px'
                }}
              />
              <HStack spacing="10">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://twitter.com/DeriveFinance"
                    aria-label="Twitter"
                    icon={<FaTwitter fontSize="1.25rem" />}
                  />
                  <IconButton 
                    as="a" 
                    href="https://github.com/derivefinance" 
                    aria-label="GitHub" 
                    icon={<FaGithub fontSize="1.25rem" />} 
                  />
                </ButtonGroup>
              </HStack>
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }

export default Navbar;