import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk } from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
};

const tuitSlice = createSlice({
  name: "tuits",
  initialState: initialState,
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits = action.payload;
    },
    [findTuitsThunk.rejected]: (state) => {
      state.loading = false;
      state.tuits = [];
    },
    [deleteTuitThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits = state.tuits.filter((tuit) => tuit._id !== action.payload);
    },
    [createTuitThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits.push(action.payload);
    },
    [updateTuitThunk.rejected]: (state, action) => {
      state.loading = false;
      // Revert the tuit back to its original state
      const tuit = state.tuits.find((tuit) => tuit._id === action.meta.arg._id);
      for (const key in action.meta.arg) {
        if (typeof tuit[key] === "boolean") {
          switch (key) {
            case "liked":
              tuit.liked = !tuit.liked;
              tuit.liked ? tuit.likes++ : tuit.likes--;
              break;
            case "retuited":
              tuit.retuited = !tuit.retuited;
              tuit.retuited ? tuit.retuits++ : tuit.retuits--;
              break;
            case "disliked":
              tuit.disliked = !tuit.disliked;
              tuit.disliked ? tuit.dislikes++ : tuit.dislikes--;
              break;
          }
        }
      }
    },
    [updateTuitThunk.fulfilled]: (state, action) => {
      state.loading = false;
      const idx = state.tuits.findIndex((tuit) => tuit._id == action.payload._id);
      state.tuits[idx] = action.payload;
    },
  },
  reducers: {
    toggleLikeTuit(state, action) {
      const tuit = state.tuits.find((tuit) => tuit._id === action.payload);
      if (tuit) {
        tuit.liked = !tuit.liked;
        tuit.liked ? tuit.likes++ : tuit.likes--;
      }
    },
    toggleRetuit(state, action) {
      const tuit = state.tuits.find((tuit) => tuit._id === action.payload);
      if (tuit) {
        tuit.retuited = !tuit.retuited;
        tuit.retuited ? tuit.retuits++ : tuit.retuits--;
      }
    },
    toggleDislike(state, action) {
      const tuit = state.tuits.find((tuit) => tuit._id === action.payload);
      if (tuit) {
        tuit.disliked = !tuit.disliked;
        tuit.disliked ? tuit.dislikes++ : tuit.dislikes--;
      }
    },
  },
});
export const { createTuit, deleteTuit, toggleLikeTuit, toggleRetuit, toggleDislike } = tuitSlice.actions;
export default tuitSlice.reducer;
