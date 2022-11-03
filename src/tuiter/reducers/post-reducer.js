import { createSlice } from "@reduxjs/toolkit";
import tuitArray from "../data/tuits.json";

const postSlice = createSlice({
  name: "post",
  initialState: tuitArray,
});

export default postSlice.reducer;
