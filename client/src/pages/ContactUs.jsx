import React, { useState } from 'react';
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast,
} from '@chakra-ui/react';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        // ...

        // show success message to user
        toast({
            title: 'Message sent!',
            description: 'We will get back to you as soon as possible.',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

        // clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Box maxW="600px" mx="auto" mt="8">
            <Heading as="h1" mb="8" fontSize="4xl" textAlign="center">
                Contact Us
            </Heading>
            <form onSubmit={handleFormSubmit}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="email" isRequired mt="4">
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl id="message" isRequired mt="4">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" colorScheme="blackAlpha" mt="8">
                    Send Message
                </Button>
            </form>
        </Box>
    );
};

export default ContactUs;
