import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box as="footer" bg="gray.900" color="white">
            <Flex
                direction={["column", "column", "row"]}
                justify="space-between"
                align="flex-start"
                px={4}
                py={[8, 12]}
                maxW="container.lg"
                mx="auto"
            >
                <Box w={["100%", "100%", "30%"]} mb={[8, 8, 0]}>
                    <h3 className="text-xl font-bold mb-4">Shop</h3>
                    <ul>
                        <li>
                            <Link to="/products" className="hover:text-gray-300">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-300">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </Box>
                <Box w={["100%", "100%", "30%"]} mb={[8, 8, 0]}>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <ul className="flex">
                        <li>
                            <a href="#" className="mr-4 pr-2">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 pr-2">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 pr-2">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 pr-2">
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                </Box>
                <Box w={["100%", "100%", "40%"]}>
                    <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
                    <p className="mb-4">
                        Sign up for exclusive offers, new product releases, and more!
                    </p>
                    <form className="flex flex-wrap items-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 w-full md:w-auto mb-4 md:mb-0 mr-0 md:mr-4 rounded-full bg-gray-800 border-2 border-gray-600 text-white"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-full bg-white text-gray-900 hover:bg-gray-200"
                        >
                            Sign Up
                        </button>
                    </form>
                </Box>
            </Flex>
            <Box bg="gray.800" py={4} textAlign="center">
                <p className="text-gray-500 text-sm">
                    &copy; 2023  shopIndia. All rights reserved.
                </p>
            </Box>
        </Box>
    );
};

export default Footer;
