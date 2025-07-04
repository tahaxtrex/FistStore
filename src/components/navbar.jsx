import { Flex, Box, Text, HStack, Button, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';



const NavBar = () => {
  console.log("nav bar")
  const { colorMode, toggleColorMode } = useColorMode()
  return (
      <Box p={4} bg="gray.50">
      <Flex justifyContent="space-between" align="center">
        <Link to="/">
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='1.5em'
            fontWeight='extrabold'  >
            Welcome To Xtrex Store
          </Text>
        </Link>
        <HStack spacing={4}>
          <Link to="/create">
            <AddIcon boxSize={6} />
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'Light'} </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
