import { Flex, 
     Box, 
     Text,
     HStack,
     Button,
     useColorMode,
     useColorModeValue} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';



const NavBar = () => {
  console.log("nav bar")
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const { colorMode, toggleColorMode } = useColorMode()
  return (
      <Box p={4} bg={bgColor}>
      <Flex justifyContent="space-between" align="center">
        <Link to="/">
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='1.7em'
            fontWeight='extrabold'  >
            Welcome To Fist Store
          </Text>
        </Link>
        <HStack spacing={4}>
            <Link to="/create">
            <Text bgGradient='linear(to-l,rgb(164, 158, 171),rgb(84, 0, 101))'
            bgClip='text'
            fontWeight='extrabold'
            >ADD</Text>
            </Link>
          <Link to="/create">
            <AddIcon boxSize={8} />
          </Link>
          <Button onClick={toggleColorMode} ml={7} p>
            {colorMode === 'light' ? 'Dark' : 'Light'} </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
