import PostCard from "./PostCard";

const PostsCatalogue = ({ posts }) => {
  return posts.map((post, ind) => (
    <PostCard key={ind} content={post.content} images={post.images} />
  ));
};

export default PostsCatalogue;
