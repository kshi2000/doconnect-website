import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Avatar,
  Button,
  Heading,
  Text,
  Box,
  Tooltip,
  Image,
} from "@chakra-ui/react";

import { AiFillLike, AiOutlinePlus } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Settings for the slider
const settings = {
  adaptiveHeight: true,
  fade: true,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PostCard = ({ content, images }) => {
  return (
    <Card mt={10} boxShadow="dark-lg">
      <CardHeader>
        <Flex>
          <Flex>
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Flex flexDirection="column" justifyContent="space-between" mx={5}>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Flex>
          </Flex>
          <Button flex="1" variant="ghost" leftIcon={<AiFillLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<AiOutlinePlus />}>
            Follow
          </Button>
        </Flex>
      </CardHeader>
      <CardBody w="full" display="unset">
        <Text>{content}</Text>
        <Tooltip label="Drag me">
          <Box overflowX="hidden" mt={5}>
            <Slider {...settings}>
              {images.map((imageObj, index) => (
                <Image
                  alt={imageObj.url}
                  draggable={false}
                  key={index}
                  objectFit="contain"
                  src={imageObj.url}
                />
              ))}
            </Slider>
          </Box>
        </Tooltip>
      </CardBody>
    </Card>
  );
};

export default PostCard;
