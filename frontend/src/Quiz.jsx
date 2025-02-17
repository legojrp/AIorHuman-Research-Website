import {
    Box,
    VStack,
    Text,
    Heading,
    Button,
    Divider,
    SimpleGrid,
  } from "@chakra-ui/react";
  
  import QuizPost from "./QuizPost";
import { useState, useEffect,  } from "react";
  
  const Quiz = () => {
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      baseUrl = window.location.origin;
      fetch(`${baseUrl}/api`)
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);
    
    
    
    // const posts = [
    //   "AI is revolutionizing the way we create and consume content!",
    //   "Can't believe how amazing this sunset looks. Nature never ceases to amaze me.",
    //   "Breaking: Scientists develop a new AI model that's 99% accurate in detecting sarcasm.",
    //   "Had an amazing day hiking! This view was breathtaking. #NatureLovers",
    // ];
  
    const [selectedPosts, setSelectedPosts] = useState([]);
    
    const handleSelect = (postIndex, choice, backendIndex) => {
      setSelectedPosts((prev) => {
        const existingSelectionIndex = prev.findIndex((post) => post.postIndex === postIndex);
        if (existingSelectionIndex !== -1) {
          const updatedPosts = [...prev];
          updatedPosts[existingSelectionIndex] = { postIndex, choice, backendIndex };
          return updatedPosts;
        }
        return [...prev, { postIndex, choice, backendIndex }];
      });
    };
    
    const getSelected = (postIndex) => {
      const selectedPost = selectedPosts.find((post) => post.postIndex === postIndex);
      return selectedPost ? selectedPost.choice : undefined;
    };

    useEffect(() => {
      console.log(selectedPosts);
    }, [selectedPosts]);

    const handleSubmit = () => {
      console.log(selectedPosts);
      const baseUrl = window.location.origin;  // Automatically gets the domain and port
      // fetch(`${baseUrl}/api`)
      fetch(`${baseUrl}/api/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedPosts),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.href = "/success?score=" + data.score;
        })
    }
  
    return (
      <Box bg="black" color="white" minH="100vh" py={10} px={6}>
        {/* Header */}
        <Heading size="xl" fontWeight="bold" textAlign="center" mb={8}>
          Identify the AI-generated Posts!
          <Text fontSize="md" color="gray.400">
            Scroll to move on
          </Text>
          <Text fontSize="md" color="gray.400">
          ↓
          </Text>
        </Heading>
  
        {/* Posts */}
        <VStack spacing={6}>
          {posts.map((postText, index) => (
            <QuizPost
              key={index}
              postText={postText["Post"]}
              backendIndex={postText["index"]}
              postIndex={index}
              onSelect={(choice) => handleSelect(index, choice, postText["index"])}
              selectedChoice={()=> getSelected(index)}
            />
          ))}
        </VStack>
  
        {/* Footer */}
        <Box textAlign="center" mt={10}>
          <Button
            size="lg"
            bgGradient="linear(to-r, blue.400, purple.400)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, blue.300, purple.300)",
              boxShadow: "0px 0px 20px #9D4EDD",
            }}
            px={10}
            onClick={handleSubmit}
          >
            Submit Answers
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default Quiz;
  