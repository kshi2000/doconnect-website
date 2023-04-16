import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Input,
  CloseButton,
  IconButton,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

const ChatWindow = ({ onClick }) => {
  const [file, setFile] = useState();

  const onFileChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
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
        <CloseButton onClick={onClick} color="white" />
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
        <Text color="white">Please upload a patient record</Text>
      </CardBody>
      <CardFooter>
        <InputGroup>
          <Box>
            <Input onChange={onFileChange} type="file" />
            <Box
              pointerEvents="none"
              pl={3}
              pt={2}
              backgroundColor="white"
              position="absolute"
              bottom={0}
              top={0}
              left={0}
              right={0}
            >
              <Text>{file?.name ?? "Upload a file"}</Text>
            </Box>
          </Box>
          <InputRightElement children={<IconButton icon={<IoSend />} />} />
        </InputGroup>
      </CardFooter>
    </Card>
  );
};

export default ChatWindow;
