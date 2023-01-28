import { ChakraProvider, extendTheme, Flex, Grid, HStack } from '@chakra-ui/react'
import '@fontsource/inter/variable.css'
  
import * as components from "./components";
import * as foundations from './foundations';

// 1. Import the utilities
import { createBreakpoints } from '@chakra-ui/theme-tools'

// 1.1 Import Views
import NavBar from "./views/Navbar";
import Header from "./views/Header";
import Footer from "./views/Footer";

export const App = () => {

  // 2. Update the breakpoints as key-value pairs
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  })
   
  const myTheme = extendTheme({
      ...foundations,
      components: { ...components,
      Button: {
        // 1. We can update the base styles
        baseStyle: {
          fontWeight: 'bold', // Normally, it is "semibold"
        },
        // 2. We can add a new button size or extend existing
        sizes: {
          xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
          },
        },
        // 3. We can add a new visual variant
        variants: {
          'with-shadow': {
            bg: 'red.400',
            boxShadow: '0 0 2px 2px #efdfde',
          },
          // 4. We can override existing variants
          solid: (props) => ({
            bg: props.colorMode === 'dark' ? 'blue.300' : 'blue.500',
          }),
        },
      },
     },
    breakpoints,
    styles: {
      global: {
        // styles for the `body`
        body: {
          color: 'gray.300',
          bg: '#0a0a0a',
        },
        // styles for the `a`
        a: {
          color: 'gray.200',
          _hover: {
            textDecoration: 'underline',
          },
        },
        // styles for `p`
        p: {
          color: 'gray.100',
        },
      },
    },
  })
  return (
    <ChakraProvider theme={myTheme}>
      <Grid>
        <NavBar />
        <Header />
        <Footer />
      </Grid>
    </ChakraProvider>
  )
}


export default App;
