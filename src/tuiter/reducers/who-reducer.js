import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/whos.json";

const whoSlice = createSlice({
  name: "who",
  initialState: whoArray,
});

export default whoSlice.reducer;
