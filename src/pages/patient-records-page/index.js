import { Box, Button, Flex } from "@chakra-ui/react";

const PatientRecordsPage = () => {
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
        <Button>Patient Records Page</Button>
      </Box>
    </Flex>
  );
};

export default PatientRecordsPage;
