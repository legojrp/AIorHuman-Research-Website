import { Box, Heading, Text, SimpleGrid, VStack, Divider, Button } from "@chakra-ui/react";

import { FaArrowAltCircleLeft } from "react-icons/fa";
const Disclaimer = () => {
  return (
    <Box bg="black" color="white" minH="100vh" py={10} px={6}>
      {/* Header */}
      <Button
        variant="ghost"
        colorScheme="blue"
        size="lg"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <FaArrowAltCircleLeft /> &nbsp;Back
        
      </Button>
      <Heading size="xl" fontWeight="bold" textAlign="center" mb={8}>
        Disclaimer
      </Heading>
      
      {/* Side-by-Side View */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
        {/* What's Recorded */}
        <Box bg="gray.800" p={6} borderRadius="lg" boxShadow="lg">
          <Heading size="md" mb={4} color="green.300">
            What's Recorded
          </Heading>
          <VStack align="start" spacing={3} color="gray.400">
            <Text>- Your responses</Text>
            <Text>- Timestamp of your responses.</Text>
            <Text>- Any information you provide</Text>
            <Text>- Anonomized record of your responses (to find trends among participants across multiple questions).</Text>
          </VStack>
        </Box>

        {/* What's NOT Recorded */}
        <Box bg="gray.800" p={6} borderRadius="lg" boxShadow="lg">
          <Heading size="md" mb={4} color="red.300">
            What's NOT Recorded
          </Heading>
          <VStack align="start" spacing={3} color="gray.400">
            <Text>- Personal identifiable information.</Text>
            <Text>- Your IP address or location.</Text>
            <Text>- Any information outside of quiz responses.</Text>
            <Text>- Any other information that is not listed. </Text>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Additional Text Section */}
      <Divider borderColor="gray.600" mb={8}/>
      <Box bg="gray.900" p={6} borderRadius="lg" boxShadow="lg" textAlign="center">
        <Text color="gray.400" mb={4}>
          You will be shown how many questions you got correct. 
        </Text>
        <Text color="gray.400" mb={4}>
          Your responses may be included in the document analysis of the study results. 
        </Text>
        <Text fontSize="xl" color="white.400" >
        By participating, you agree to the collection of anonymized data outlined above.
        </Text>
      </Box>

      {/* Action Button */}
      <Box textAlign="center" mt={10}>
        <Button 
          size="lg" 
          bgGradient="linear(to-r, blue.400, purple.400)" 
          color="white"
          _hover={{ bgGradient: "linear(to-r, blue.300, purple.300)", boxShadow: "0px 0px 20px #9D4EDD" }}
          px={10}
          onClick={() => {
            window.location.href = "/quiz";
          }}
        >
          Proceed to Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Disclaimer;
