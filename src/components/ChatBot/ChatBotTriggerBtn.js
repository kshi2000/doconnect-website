import { ChatIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const ChatBotTriggerBtn = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      borderRadius="full"
      colorScheme="green"
      boxSize={12}
      icon={<ChatIcon />}
    />
  );
};

export default ChatBotTriggerBtn;
