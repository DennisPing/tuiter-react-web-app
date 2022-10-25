import { createSlice } from "@reduxjs/toolkit";
import postArray from "../data/posts.json";

const postSlice = createSlice({
  name: "post",
  initialState: postArray,
});

export default postSlice.reducer;
