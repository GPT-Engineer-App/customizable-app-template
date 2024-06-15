import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Protected = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate("/");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Protected Content</Heading>
        <Box>This content is protected and only visible to authenticated users.</Box>
        <Button colorScheme="teal" onClick={handleLogout}>Logout</Button>
      </VStack>
    </Container>
  );
};

export default Protected;