import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Select,
  Stack,
  Text,
  useToast,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ProductContext } from '../context/ProductContext';
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState({});
  const [size, setSize] = useState(6);
  const [color, setColor] = useState('');
  const toast = useToast();
  const imageWidth = useBreakpointValue({ base: "100%", md: "50%" });

  const [error, setError] = useState('')
  const [productId, setProductId] = useState(id)
  const [psize, setPSize] = useState(6)

  useEffect(() => {
    const getProduct = async () => {
      const product = products.find(item => item._id === id);
      setProduct(product);
    };
    getProduct();
  }, [id, products]);

  const handleAddToCart = async () => {

    if (!color) {
      toast({
        title: 'Please select a color',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!size) {
      toast({
        title: 'Please select a size',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const addToCart = async (productId, psize) => {
      try {
        const response = await axios.post("http://localhost:3000/products", {
          productId: productId,
          size: psize,
        }, {
          withCredentials: true
        }
        );
        console.log(response);
      } catch (err) {
        setError(err.response.data);
      }
    };
    addToCart(productId, psize);
    toast({
      title: 'Item added to cart',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={6}>
      <Flex flexWrap="wrap" flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1" width={imageWidth}>
          <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Citadel_Amazon_TV_Show_Promotional_Poster_v2.jpg/220px-Citadel_Amazon_TV_Show_Promotional_Poster_v2.jpg" alt={product.model} />
        </Box>
        <Box flex="1" pl={{ base: 0, md: 12 }}>
          <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={2}>
            {product.brand} {product.model}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} mb={6}>
            ${product.price}
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} mb={6}>
            {product.description}
          </Text>
          <Stack spacing={4} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>Select Color</FormLabel>
              <Select placeholder="Select color" value={color} onChange={e => setColor(e.target.value)}>
                {product.options && product.options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Select Size</FormLabel>
              <Select placeholder="Select size" value={psize} onChange={e => setPSize(e.target.value)}>
                {product.size && product.size.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </Select>
            </FormControl>
            <Button colorScheme="green" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
