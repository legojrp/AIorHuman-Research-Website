  import React from "react";
  import { Box, Text, Button, SimpleGrid, Divider, Heading } from "@chakra-ui/react";
  
  const QuizPost = ({ postText, onSelect, postIndex, selectedChoice }) => {

    const renderTextWithHashtags = (text) => {
        const parts = text.split(/(\#\w+)/); // Split by hashtags
        return parts.map((part, index) => {
          if (part.startsWith("#")) {
            return (
              <Text as="span" color="blue.400" key={index}>
                {part}
              </Text>
            );
          }
          return part;
        });
      };

    return (
      <Box
        bg="gray.900"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        mb={6}
        transition="transform 0.1s ease-in-out"
        width="45%"
        _hover={{ transform: "scale(1.02)" }}
      >
        <Heading size="md" mb={4} color="white.300">
            <Text fontSize="lg" color="white.500">
                Anonymous
            </Text>
          <Text fontSize="md" color="gray.500" mt={2}>
            @Someone
          </Text>
        </Heading>
        {/* Post Text */}
        <Text fontSize="lg" color="white" mb={4} lineHeight="1.6">
        {renderTextWithHashtags(postText)}
        </Text>
        <Divider borderColor="gray.700" mb={4} />
  
        {/* Buttons */}
        <SimpleGrid columns={2} spacing={4}>
          <Button
            size="md"
            bgGradient={selectedChoice() === "human" ? "linear(to-r, green.400, teal.400)" : "linear(to-r, blackAlpha.800, blackAlpha.800)"}
            color="white"
            _hover={{
              bgGradient: selectedChoice() === "human" ? "linear(to-r, green.300, teal.300)" : "linear(to-r, blackAlpha.800, blackAlpha.800)",
              boxShadow: "0px 0px 15px #38B2AC" ,
            }}
            onClick={() => onSelect("human")}
          >
            Human
          </Button>
          <Button
            size="md"
            bgGradient={selectedChoice() === "notHuman" ? "linear(to-r, red.400, orange.400)" : "linear(to-r, blackAlpha.800, blackAlpha.800)"}
            color="white"
            _hover={{
              bgGradient: selectedChoice() === "notHuman" ? "linear(to-r, red.300, orange.300)" : "linear(to-r, blackAlpha.700, blackAlpha.700)",
              boxShadow: "0px 0px 15px #E53E3E",
            }}
            onClick={() => onSelect("notHuman")}
          >
            Not Human
          </Button>
        </SimpleGrid>
      </Box>
    );
  };

  export default QuizPost;