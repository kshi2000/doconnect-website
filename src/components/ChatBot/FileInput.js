import {
  IconButton,
  InputGroup,
  InputRightElement,
  Box,
  Input,
  Text,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

import { useState } from "react";

const FileInput = () => {
  const [file, setFile] = useState();

  const onFileChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  return (
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
  );
};

export default FileInput;
