import {
  Card,
  Avatar,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  CardHeader,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

import ProfileForm from "./ProfileForm";

const ProfileCard = ({
  name = "John Doe",
  position = "Resident Doctor at NYU Langone Health",
  email = "johndoe@gmail.com",
  city = "New York",
}) => {
  const [profileDetails, setProfileDetails] = useState({
    name,
    position,
    email,
    city,
  });
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <>
      <Card
        py={1}
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor="background.profile"
        direction="row"
        variant="outline"
      >
        <Avatar boxSize="52" bg="black" />

        <Stack alignItems="flex-start">
          <CardHeader px={0}>
            <Heading variant="h2">{profileDetails.name}</Heading>
          </CardHeader>
          <CardBody p={0}>
            <Box>
              <Text variant="heading4" fontWeight="semibold">
                {profileDetails.position}
              </Text>
            </Box>
            <Box>
              <Text>{profileDetails.city}</Text>
            </Box>
            <Box>
              <Text>{profileDetails.email}</Text>
            </Box>
          </CardBody>

          <CardFooter px={0}>
            <Button onClick={() => setFormOpen(true)}>Edit</Button>
          </CardFooter>
        </Stack>
      </Card>
      {isFormOpen && (
        <ProfileForm
          onCancelClicked={() => setFormOpen(false)}
          onSubmit={(formDetails) => setProfileDetails(formDetails)}
        />
      )}
    </>
  );
};

export default ProfileCard;
