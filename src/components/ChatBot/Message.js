import { Box, Flex, Text } from "@chakra-ui/react";

const Message = ({ isChatBotMessage, children }) => (
  <Flex justifyContent={isChatBotMessage ? "flex-start" : "flex-end"} my={2}>
    <Box
      maxW="90%"
      overflow="clip"
      borderRadius="lg"
      p={2}
      w="fit-content"
      backgroundColor={isChatBotMessage ? "blue.100" : "purple"}
    >
      <Text
        textAlign={isChatBotMessage ? "start" : "end"}
        color={isChatBotMessage ? "black" : "white"}
      >
        {children}
      </Text>
    </Box>
  </Flex>
);
export default Message;
