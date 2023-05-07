import React, { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Favorites = () => {
  useEffect(() => {
    document.title = "Favorite | Nike Clone";
  }, []);

  return (
    <Box mt={4}>
      <Heading as="h1" size="xl" textAlign="center">
        Favorites
      </Heading>
      <Box mt={10} textAlign="center">
        <Text fontSize="xl" mb={4}>
          Items added to your Favorites will be saved here.
        </Text>
      </Box>
    </Box>
  );
};

export default Favorites;
