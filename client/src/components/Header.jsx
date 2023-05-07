import { AiOutlineSearch } from "react-icons/ai"
import React from 'react'
import { BiShoppingBag } from "react-icons/bi"
import { GrFavorite } from "react-icons/gr"
import { Box, Flex, Input, IconButton, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Box as="header" px={[4, 8]} py={5} bg="white">
      <Flex alignItems="center">
        <Flex flex={1} justifyContent="center">
          <img
            src="https://www.bing.com/th?id=OIP.Eow3_Gl9FZNS8zhNN9tcKwHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""
            height={60}
            width={70}
          />
        </Flex>
        <Flex flex={1} justifyContent="center" gap={10}>
          <Text as={Link} to='/men' cursor="pointer" _hover={{ color: "slateblue" }}>
            Men
          </Text>
          <Text as={Link} to='/women' cursor="pointer" _hover={{ color: "slateblue" }}>
            Women
          </Text>
          <Text as={Link} to='/kids' cursor="pointer" _hover={{ color: "slateblue" }}>
            Kids
          </Text>
        </Flex>
        <Flex flex={1} justifyContent="center" gap={10}>
          <Box bg="gray.200" borderRadius="xl" p={1} pl={2} pr={4} display="flex" alignItems="center">
            <AiOutlineSearch />
            <Input
              variant="unstyled"
              flex={1}
              ml={2}
              placeholder="Search"
              _focus={{ outline: "none" }}
            />
          </Box>
          <Flex justifyContent="center" gap={5}>
            <IconButton
              as={Link} to='/cart'
              aria-label="Shopping Bag"
              icon={<BiShoppingBag />}
              bg="transparent"
              _hover={{ bg: "gray.300", borderRadius: "full" }}
              rounded="full"
            />
            <IconButton
              as={Link} to='/fav'
              aria-label="Favorite"
              icon={<GrFavorite />}
              bg="transparent"
              _hover={{ bg: "gray.300", borderRadius: "full" }}
              rounded="full"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
