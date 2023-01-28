import {
    Box,
    Button,
    Flex,
    Heading,
    Img,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { Link } from 'react-router-dom';

  export function Header() {
    return (
      <Box as="section" pt="48" pb="24" background="#0a0a0a" overflow="hidden">
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex
            align="flex-start"
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-evenly"
            mb="40"
          >
            <Box>
              <Img
                pos="relative"
                w="20rem"
                src="https://i.imgur.com/yDrmLK5.png"
                opacity={0.75}
                alt="Derive Logo"
                display={{
                  base: 'initial',
                  lg: 'initial',
                  sm: 'none',
                }}
              />
            </Box>
            <Box
              flex="1"
              maxW={{
                lg: 'xl',
              }}
              pt="6"
            >
              <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
                Derive.fi
              </Heading>
              <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">
                Platform will be undergoing maintenance until further notice.
                We apologize for any inconvenience, if you have any funds locked join our Discord.
              </Text>
              <Button 
                background="linear-gradient(-45deg, #3c3c3c, #2b2b2b)"
                mt="6"
                minW="14rem"
                colorScheme="blue"
                size="lg"
                height="14"
                px="8"
                fontSize="md"
                fontWeight="bold"
                _hover={{
                  background:"linear-gradient(-45deg, #3c3c3c, #2b2b2b)",
                  mt:"8",
                  minW:"14rem",
                  colorScheme:"blue",
                  size:"lg",
                  height:"14",
                  px:"8",
                  fontSize:"md",
                  fontWeight:"bold",
                }}
              >
                <a href="https://discord.com/invite/VVDu6Er">Discord</a>
              </Button>
            </Box>
            <Box
              boxSize={{
                base: '20',
                lg: '8',
              }}
            />
          </Flex>
        </Box>
      </Box>
    )
  }

  export default Header;