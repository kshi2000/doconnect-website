import { Container, Heading } from "@chakra-ui/react";
import { useState } from "react";

import CreatePost from "./components/CreatePost";
import PostsCatalogue from "./components/PostsCatalogue";

const FeedPage = () => {
  const [postData, setPostData] = useState([]);

  const handlePostCreated = (content, images) =>
    setPostData((postData) => [...postData, { content, images }]);

  return (
    <Container my={10} variant="responsive">
      <CreatePost onPostCreated={handlePostCreated} />
      <Heading textAlign="center" variant="h2" fontWeight="bold">
        Your Feed
      </Heading>
      <PostsCatalogue posts={postData} />
    </Container>
  );
};

export default FeedPage;
