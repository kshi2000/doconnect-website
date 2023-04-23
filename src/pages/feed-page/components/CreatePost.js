import { Box, Textarea, useToast } from "@chakra-ui/react";

import FormFooter from "./FormFooter";
import { useState } from "react";

const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState("");
  const toast = useToast();

  const onSubmit = (images) => {
    if (!images || !images.length || !content) {
      toast({
        title: "Please add an image, and enter some content",
        status: "error",
        isClosable: true,
      });
      return;
    }
    setContent("");
    onPostCreated(content, images);
  };

  return (
    <Box my={5} w="full" border="navBar" borderRadius="lg">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        _focus={{ boxShadow: "none" }}
        border="none"
        resize="none"
        placeholder="Start typing to create new post ..."
      />
      <FormFooter onSubmit={onSubmit} />
    </Box>
  );
};

export default CreatePost;
