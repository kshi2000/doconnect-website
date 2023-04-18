import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import { useState } from "react";

import FileInput from "./FileInput";
import TextInput from "./TextInput";
import ChatBotMenu from "./ChatBotMenu";
import { chatBotMenuOptions } from "../../constants";
import Message from "./Message";

const ChatWindow = ({ onClick }) => {
  const [isTextInput, setIsTextInput] = useState(true);
  const [messages, setMessages] = useState([]);

  const handleEnteredQuery = (enteredMessage) => {
    if (enteredMessage === null || enteredMessage.length === 0) return;
    setMessages((prevMessages) => [...prevMessages, enteredMessage]);
  };

  const handleMenuOptionChange = (index) => {
    if (index === (chatBotMenuOptions.length - 1).toString()) {
      return onClick();
    }

    setIsTextInput((prevState) => !prevState);
  };

  return (
    <Card w="sm" h="md" background="blackAlpha.900">
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading color="white" size="md">
          DOConnect Chatbot
        </Heading>
        <ChatBotMenu onMenuOptionChange={handleMenuOptionChange} />
      </CardHeader>
      <CardBody
        overflow="scroll"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <Message
          children="Please upload a file, or type in a query"
          isChatBotMessage
        />
        {messages.map((msg, index) => (
          <Message key={index} children={msg} />
        ))}
      </CardBody>
      <CardFooter>
        {isTextInput ? (
          <TextInput onSubmitClicked={handleEnteredQuery} />
        ) : (
          <FileInput />
        )}
      </CardFooter>
    </Card>
  );
};

export default ChatWindow;
