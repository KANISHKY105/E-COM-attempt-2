import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Heading,
    Text,
} from "@chakra-ui/react";

const Help = () => {
    const [HelpData, setHelpData] = useState([
        {
            question: "What is your return policy?",
            answer:
                "We accept returns within 30 days of purchase. The item must be in its original condition and packaging.",
        },
        {
            question: "How do I track my order?",
            answer:
                "Once your order ships, we'll send you a messages so you can keep an eye on your delivery.",
        },
        {
            question: "How can I get in touch with customer service?",
            answer:
                "You can reach our customer service team by phone or email. Our contact information is listed on the Contact Us page.",
        },
    ]);

    return (
        <Box maxW="600px" mx="auto" my="8">
            <Heading mb="4">Frequently Asked Questions</Heading>
            <Accordion allowToggle>
                {HelpData.map((Help, index) => (
                    <AccordionItem key={index}>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                {Help.question}
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text>{Help.answer}</Text>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default Help;