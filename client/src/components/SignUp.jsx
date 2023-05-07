import { useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/register", {
                username: email,
                password: password,
            },
                {
                    withCredentials: true
                });
            console.log(response);
            navigate('/login')

        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <Box maxW="500px" mx="auto" mt="8">
            <Text fontSize="4xl" textAlign="center" mb="8">
                Register
            </Text>
            <form onSubmit={handleSubmit}>
                <Stack spacing="4">
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </FormControl>
                    {typeof error === "string" && (
                        <Text color="red.500" fontWeight="semibold">
                            {error}
                        </Text>
                    )}
                    <Button type="submit" colorScheme="blackAlpha">
                        Register
                    </Button>
                </Stack>
            </form>
            <Link to='/login'>
                <Text m={5}>Already registered??? Login</Text>
            </Link>
        </Box>
    );
};

export default SignUp;
