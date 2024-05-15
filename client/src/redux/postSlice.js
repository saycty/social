import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
    likePost(state, action) {
      const { postId, userId } = action.payload;
      const post = state.posts.find((post) => post._id === postId);
      if (post) {
        if (!post.likes.includes(userId)) {
          post.likes.push(userId);
        }
      }
    },
  },
});

export default postSlice.reducer;

export function SetPosts(post) {
  return (dispatch, getState) => {
    dispatch(postSlice.actions.getPosts(post));
  };
}