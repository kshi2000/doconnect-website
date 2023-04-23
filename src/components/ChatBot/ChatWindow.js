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

  const parseMessageAndRespond = async (enteredMessage) => {
    //await message from chatbot, given a waiting duration of 2 sec by default
    const chatbotMessage = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("from Chatbot " + enteredMessage), 2000);
    });

    //add the chatbot response to the message list
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: chatbotMessage, isChatBotMessage: true },
    ]);
  };

  const handleEnteredQuery = (enteredMessage) => {
    if (enteredMessage === null || enteredMessage.length === 0) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: enteredMessage, isChatBotMessage: false },
    ]);

    parseMessageAndRespond(enteredMessage);
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
        {messages.map((msgObj, index) => (
          <Message
            isChatBotMessage={msgObj.isChatBotMessage}
            key={index}
            children={msgObj.message}
          />
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
