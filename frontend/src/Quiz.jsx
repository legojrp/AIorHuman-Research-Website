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
      fetch("http://localhost:5000/api/")
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
    
    const handleSelect = (postIndex, choice) => {
      setSelectedPosts((prev) => {
        const existingSelectionIndex = prev.findIndex((post) => post.postIndex === postIndex);
        if (existingSelectionIndex !== -1) {
          const updatedPosts = [...prev];
          updatedPosts[existingSelectionIndex] = { postIndex, choice };
          return updatedPosts;
        }
        return [...prev, { postIndex, choice }];
      });
    };
    
    const getSelected = (postIndex) => {
      const selectedPost = selectedPosts.find((post) => post.postIndex === postIndex);
      return selectedPost ? selectedPost.choice : undefined;
    };

    useEffect(() => {
      console.log(selectedPosts);
    }, [selectedPosts]);
  
    return (
      <Box bg="black" color="white" minH="100vh" py={10} px={6}>
        {/* Header */}
        <Heading size="xl" fontWeight="bold" textAlign="center" mb={8}>
          Quiz: Identify the AI
        </Heading>
  
        {/* Posts */}
        <VStack spacing={6}>
          {posts.map((postText, index) => (
            <QuizPost
              key={index}
              postText={postText}
              postIndex={index}
              onSelect={(choice) => handleSelect(index, choice)}
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
          >
            Submit Answers
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default Quiz;
  