import { Box, Container, Heading, Text, Stack, Image } from "@chakra-ui/react";
import React from "react";
const About = () => {
    return (
        <Container maxW="container.lg" mt="8">
            <Heading as="h1" size="2xl" mb="8" textAlign="center">
                About Us
            </Heading>
            <Box
                d="flex"
                alignItems="center"
                justifyContent="center"
                mb="8"
                boxShadow="md"
                borderRadius="lg"
                overflow="hidden"
            >
            </Box>
            <Stack spacing="8" textAlign="justify">
                <Text fontSize={{ base: "xl", md: "2xl" }}>
                    We are a group of four developers who created this ecommerce website
                    for shoes. Our goal is to provide a smooth and convenient shopping
                    experience for our customers.
                </Text>
                <Text fontSize={{ base: "xl", md: "2xl" }}>
                    Our team is made up of experienced developers with a passion for
                    creating beautiful and functional websites. We utilized ReactJS and
                    ChakraUI to build this website.
                </Text>
                <Text fontSize={{ base: "xl", md: "2xl" }}>
                    Thank you for choosing our website for your shopping needs. We hope you
                    enjoy your experience and please don't hesitate to reach out to us if
                    you have any questions or feedback.
                </Text>
            </Stack>
            <Box mt="8" textAlign="center">
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                    Meet the Team
                </Text>
                <Stack direction={{ base: "column", md: "row" }} mt="4" spacing={{ base: "4", md: "12" }} justifyContent="center">
                    <Box>
                        <Image
                            src="/images/team-member1.jpg"
                            alt="Team Member 1"
                            borderRadius="full"
                            boxSize={{ base: "150px", md: "200px" }}
                            mb="4"
                            mx="auto"
                            boxShadow="md"
                        />
                        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" textAlign="center">
                            Prateek Yadav
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
                            Front-end Developer
                        </Text>
                    </Box>
                    <Box>
                        <Image
                            src="/images/team-member2.jpg"
                            alt="Team Member 2"
                            borderRadius="full"
                            boxSize={{ base: "150px", md: "200px" }}
                            mb="4"
                            mx="auto"
                            boxShadow="md"
                        />
                        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" textAlign="center">
                            Kanishk Yadav
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
                            Back-end Developer
                        </Text>
                    </Box>
                    <Box>
                        <Image
                            src="/images/team-member3.jpg"
                            alt="Team Member 3"
                            borderRadius="full"
                            boxSize={{ base: "150px", md: "200px" }}
                            mb="4"
                            mx="auto"
                            boxShadow="md"
                        />
                        <Text fontSize="lg" fontWeight="bold" textAlign="center">
                            Manish Yadav
                        </Text>
                        <Text fontSize="md" textAlign="center">
                            Front-end Developer
                        </Text>
                    </Box>
                    <Box>
                        <Image
                            src="/images/team-member4.jpg"
                            alt="Team Member 4"
                            borderRadius="full"
                            boxSize="200px"
                            mb="4"
                            mx="auto"
                            boxShadow="md"
                        />
                        <Text fontSize="lg" fontWeight="bold" textAlign="center">
                            Vishal Yadav
                        </Text>
                        <Text fontSize="md" textAlign="center">
                            Front-end Developer
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
};

export default About;
