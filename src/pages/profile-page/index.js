import { Container } from "@chakra-ui/react";

import ProfileCard from "./components/ProfileCard";
import ExperienceCard from "./components/TimeLineCard";
import EducationCard from "./components/TimeLineCard";
import MyEventsCard from "./components/MyEventsCard";

const ProfilePage = () => {
  return (
    <Container my={2} variant="responsive">
      <ProfileCard />
      <ExperienceCard heading="Experience" />
      <EducationCard heading="Education" />
      <MyEventsCard />
    </Container>
  );
};

export default ProfilePage;
