import React, { useContext } from 'react';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { AuthContext } from '../context/LoggedIn';

const Navbar = () => {
  const auth = useContext(AuthContext);

  return (
    <Box py={2} bg="gray.100" fontFamily="Comfortaa">
      <Flex justify="space-between" alignItems="center" px={{ base: 4, md: 8 }}>
        <Box>
          <Image h={8} w={8} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" alt="logo" />
        </Box>
        <Flex alignItems="center">
          {auth.isLoggedIn ? (
            <>
              <Text mr={4} fontSize="md" color="black" fontFamily="mono">
                {auth.email}
              </Text>
              <Link href="#" fontSize="md" color="black" onClick={() => auth.logout()} _hover={{ color: 'gray.500' }} fontFamily="mono">
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link as={RouteLink} to='/help' href="#" mr={4} fontSize="md" color="black" _hover={{ color: 'gray.500' }} fontFamily="mono">
                <Text cursor="pointer" _hover={{ color: "slateblue" }}>
                  Help
                </Text>
              </Link>
              <Link as={RouteLink} to='/register' href="#" mr={4} fontSize="md" color="black" _hover={{ color: 'gray.500' }} fontFamily="mono">
                Sign Up
              </Link>
              <Link as={RouteLink} to='/login' href="#" fontSize="md" color="black" _hover={{ color: 'gray.500' }} fontFamily="mono">
                Sign In
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
