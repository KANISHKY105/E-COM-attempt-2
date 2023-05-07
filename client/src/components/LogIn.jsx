import React, { useState, useContext } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Box,
    Text,
    Alert,
    AlertIcon,
} from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/LoggedIn';
const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const auth = useContext(AuthContext);

    const handlelogin = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await axios.post("http://localhost:3000/login", {
                username: email,
                password: password,
            }, {
                withCredentials: true
            }
            );
            console.log(response.data);
            navigate('/')
            auth.setIsLoggedIn(true)
            auth.loggedEmail(email)
            setIsLoading(false)

        } catch (err) {
            setError(err.response?.data);
            setIsLoading(false)
        }
    }
    return (
        <Box maxW="500px" mx="auto" mt="8">
            <Text fontSize="4xl" textAlign="center" mb="8">
                Sign in your Account
            </Text>
            {auth.isLoggedIn ? (
                <Alert status="success" mb={8}>
                    <AlertIcon />
                    You are now logged in!
                </Alert>
            ) : null}
            {error ? (
                <Alert status="error" mb={8}>
                    <AlertIcon />
                    {error}
                </Alert>
            ) : null}
            <form onSubmit={handlelogin}>
                <Stack spacing="4">
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="blackAlpha" isLoading={isLoading}>
                        Sign In
                    </Button>
                </Stack>
            </form>
            <Link to='/register'>
                <Text m={5}>New User ? Register</Text>
            </Link>
        </Box>
    )

}

export default Login
