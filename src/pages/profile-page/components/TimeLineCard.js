import {
  Card,
  CardBody,
  CardHeader,
  UnorderedList,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

import TimeLineForm from "./TimeLineForm";
import TimeLineItem from "./TimeLineItem";

const TimeLineCard = ({ heading, detailsList = [] }) => {
  const [details, setDetails] = useState(detailsList);
  const [isFormOpened, setFormOpened] = useState(false);

  return (
    <>
      <Card my={8} boxShadow="2xl">
        <CardHeader display="flex" alignItems="center">
          <Heading variant="h4" fontWeight="bold">
            {heading}
          </Heading>
          <IconButton
            onClick={() => setFormOpened(true)}
            ml={1}
            size="xs"
            bg="white"
            icon={<AddIcon />}
          />
        </CardHeader>
        <CardBody>
          <UnorderedList>
            {details.map((detail, index) => (
              <TimeLineItem
                key={index}
                title={detail.title}
                subtitle={detail.subtitle}
              />
            ))}
          </UnorderedList>
        </CardBody>
      </Card>
      {isFormOpened && (
        <TimeLineForm
          heading={heading}
          onCancelClicked={() => setFormOpened(false)}
          onSubmit={(title, subtitle) =>
            setDetails((prev) => [...prev, { title, subtitle }])
          }
        />
      )}
    </>
  );
};

export default TimeLineCard;
