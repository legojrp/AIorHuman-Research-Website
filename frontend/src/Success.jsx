import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const SurveyResultPage = () => {
  const [score, setScore] = useState(null);
  const { location } = window;

  // Function to extract the score from the query parameters
  const getScoreFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('score');  // Extract the score from ?score=[value]
  };

  useEffect(() => {
    const scoreFromQuery = getScoreFromQuery();
    if (scoreFromQuery) {
      setScore(scoreFromQuery);
    }
  }, [location.search]);  // Re-run if query parameter changes

  return (
    <Box
      minH="100vh"
      bg="black"
      color="white"
      textAlign="center"
      py={10}
      px={6}
    >
      <Heading size="2xl" fontWeight="bold" mb={6}>
        Thank you!
      </Heading>

      <Text fontSize="xl" color="gray.400" mb={6}>
        You completed the quiz/survey! Your submission has been recorded.
      </Text>

      <Text fontSize="2xl" color="white.400" mb={6}>
        Please do not take this quiz again for the sanctity of the scores.
      </Text>

      {/* Display score if available */}
      {score && (
        <Box
          bg="gray.800"
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          mb={6}
        >
          <Heading size="lg" color="white">
            Your Score: {score}% correct.
          </Heading>
        </Box>
      )}

      {/* Button to go back to the homepage */}
      <Button
        colorScheme="blue"
        size="lg"
        bgGradient="linear(to-r, blue.400, purple.400)"
        _hover={{ bgGradient: "linear(to-r, blue.300, purple.300)", boxShadow: "0px 0px 20px #9D4EDD" }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default SurveyResultPage;
