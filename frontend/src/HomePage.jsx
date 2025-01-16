import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  SimpleGrid,
  Button
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box minH="100vh" bg="black">
        <Box>
            {/* Hero Section */}
            <Box 
            bg="black" 
            color="white" 
            py={10} 
            px={6} 
            textAlign="center"
            >
            <Heading size="2xl" fontWeight="bold" mb={4}>
                AI or Human on Social Media
            </Heading>
            <Text fontSize="xl" color="gray.400" mb={6}>
                Can you tell if social media posts are created by AI or humans? 
            </Text>
            <Button 
                colorScheme="blue" 
                size="lg" 
                bgGradient="linear(to-r, blue.400, purple.400)" 
                _hover={{ bgGradient: "linear(to-r, blue.300, purple.300)", boxShadow: "0px 0px 20px #9D4EDD" }}
                px={10}
                onClick={() => {
                    window.location.href = "/disclaimer";
                }}
            >
                Take the Quiz
            </Button>
        </Box>


    {/* Content Sections */}
        <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            spacing={10} 
            px={6} 
            py={10}
            >
            <Box bg="gray.800" p={6} borderRadius="lg" boxShadow="lg">
                <Heading size="md" mb={3} color="white">How It Works</Heading>
                <Text color="gray.400">
                You will see a series of social media posts. Your task is to determine if the posts were created by AI or humans.
                </Text>
            </Box>

            <Box bg="gray.800" p={6} borderRadius="lg" boxShadow="lg">
                <Heading size="md" mb={3} color="white">About the Research</Heading>
                <Text color="gray.400">
                This study explores the relationship between AI-generated content and human-generated content on social media. By determining if the posts were created by AI or humans, we can gain insights into the potential impact of AI-generated content on social media. 
                </Text>
            </Box>
            <Box bg="gray.800" p={6} borderRadius="lg" boxShadow="lg">
                <Heading size="md" mb={3} color="white">Contact</Heading>
                <Text color="gray.400">
                If you have any questions, please feel free to reach out to me at <Link color="blue.400" href="mailto:johnrenfordpatch@gmail.com">johnrenfordpatch@gmail.com</Link>
                </Text>

            </Box>
            <Box bg="gray.800" p={6} borderRadius="lg" boxShadow="lg">
                <Heading size="md" mb={3} color="white">Who am I?</Heading>
                <Text color="gray.400">
                I am a high school student who is doing this for my AP Research Project. My personal website is at <Link color="blue.400" href="https://patchindustries.com">patchindustries.com</Link>. I have always been interested in Computer Science, and with the advancements in AI, I want to learn more of the side effects for people. 
                </Text>

            </Box>
        </SimpleGrid>


        <Box 
            bg="black" 
            py={6} 
            px={6} 
            borderTop="1px solid" 
            borderColor="blue.400"
            >
            <Text fontSize="sm" color="gray.500" textAlign="center">
                
            </Text>
        </Box>
    </Box>
    </Box>
  );
};
export default HomePage;
