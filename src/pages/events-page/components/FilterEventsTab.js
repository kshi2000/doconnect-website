import { HStack, IconButton, Input, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const FilterEventsTab = () => (
  <HStack
    position="unset"
    p={5}
    my={10}
    spacing={2}
    backgroundColor="title.filterTab"
    justifyContent="space-between"
    w="full"
  >
    <Input
      placeholder="Filter by Keyword"
      backgroundColor="white"
      position="unset"
    />
    <Select
      placeholder="Select Location"
      backgroundColor="white"
      position="unset"
    ></Select>
    <Input
      placeholder="From date"
      backgroundColor="white"
      w={["sm", "md", "lg", "5xl"]}
      position="unset"
      type="date"
    />
    <Input
      placeholder="To date"
      backgroundColor="white"
      w={["sm", "md", "lg", "5xl"]}
      position="unset"
      type="date"
    />
    <IconButton colorScheme="blue" position="unset" icon={<SearchIcon />} />
  </HStack>
);

export default FilterEventsTab;
