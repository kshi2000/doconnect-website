import { Box, Button, Flex } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Flex
      position="fixed"
      left={0}
      top={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Button>Landing Page</Button>
      </Box>
    </Flex>
  );
};

export default LandingPage;
