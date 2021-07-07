import React from "react";
import Post from "./Post/Post.jsx";
import { Box, CircularProgress } from "@chakra-ui/react";

import { GoodUl, NoPostsFoundText } from "./Posts.elements.js";

const Posts = ({ posts, loading }) => {
  return loading ? (
    <Box mt={60}>
      <CircularProgress isIndeterminate color="#fd4d4d" />
    </Box>
  ) : (
    <>
      {posts.length > 0 ? (
        <GoodUl>
          {posts?.map((post) => (
            <Post post={post} key={post._id.toString()} />
          ))}
        </GoodUl>
      ) : (
        <NoPostsFoundText>No posts were found</NoPostsFoundText>
      )}
    </>
  );
};

export default Posts;
