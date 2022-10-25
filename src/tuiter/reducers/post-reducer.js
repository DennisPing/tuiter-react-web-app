import { createSlice } from "@reduxjs/toolkit";
import postsArray from "../data/posts.json";

const postSlice = createSlice({
  name: "post",
  initialState: postsArray,
});

export default postSlice.reducer;
