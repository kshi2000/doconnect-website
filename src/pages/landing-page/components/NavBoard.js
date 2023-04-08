import { Flex } from "@chakra-ui/react";

import NavCard from "./NavCard";
import { cardDetails } from "../data";

const NavBoard = () => {
  return (
    <Flex w="50%" flexDirection="column" alignItems="center">
      {cardDetails.map((card, index) => (
        <NavCard
          key={index}
          title={card.title}
          body={card.body}
          buttonText={card.buttonText}
        />
      ))}
    </Flex>
  );
};
export default NavBoard;
