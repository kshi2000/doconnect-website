import { Flex } from "@chakra-ui/react";

import OverlayImage from "./components/OverlayImage";
import NavBoard from "./components/NavBoard";

const LandingPage = () => {
  return (
    <Flex justifyContent="flex-end">
      <OverlayImage />
      <NavBoard />
    </Flex>
  );
};

export default LandingPage;
