import { createSlice } from "@reduxjs/toolkit";
import tuitArray from "../data/tuits.json";

const tuitSlice = createSlice({
  name: "tuit",
  initialState: tuitArray,
});

export default tuitSlice.reducer;
