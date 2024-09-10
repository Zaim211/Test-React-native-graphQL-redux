import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
}

interface PostsState {
  posts: Post[];
  selectedPost?: Post;
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    selectPost(state, action: PayloadAction<Post>) {
      state.selectedPost = action.payload;
    },
  },
});

export const { setPosts, selectPost } = postsSlice.actions;
export default postsSlice.reducer;
