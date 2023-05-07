import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Product = () => {
  const [productId, setProductID] = useState('');
  const [size, setSize] = useState('');
  const { products } = useContext(ProductContext);
  const [error, setError] = useState('');

  const handleSubmit = async (productId, size) => {
    try {
      await axios.post('http://localhost:3000/products', {
        productId,
        size,
      });
      // navigate('/login')
    } catch (err) {
      setError(err.response?.data);
    }
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      {products.map((product) => (
        <Link to={`/singleproduct/${product._id}`} key={product._id}>
          <Box
            key={product._id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m={4}
          >
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                  {product.brand} {product.model}
                </Text>
                <Text
                  ml={2}
                  fontSize="sm"
                  color="gray.500"
                  fontWeight="semibold"
                >
                  ({product.options.join(', ')})
                </Text>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {product.description}
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {product.size.join(', ')}
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" color="gray.600" fontSize="sm">
                  {product.reviews.length} reviews
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Heading as="h4" size="md">
                  {product.discount
                    ? `$${(
                      (product.price * (100 - product.discount)) /
                      100
                    ).toFixed(2)}`
                    : `$${product.price}`}
                </Heading>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {/* <Button
                  colorScheme="blue"
                  variant="solid"
                  size="md"
                  onClick={() => {
                    setProductID(product._id);
                    setSize(7);
                    handleSubmit(product._id, 7);
                  }}
                >
                  Add to Cart
                </Button> */}
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default Product;
