import { createSlice } from "@reduxjs/toolkit";
import tuitArray from "../data/tuits.json";

const currentUser = {
  username: "Dennis Ping",
  handle: "DennisPing",
  avatarIcon: "https://mushucdn.b-cdn.net/Dennis_Headshot_Portrait.jpg",
};

const templateTuit = {
  ...currentUser,
  time: "1m",
  comments: 0,
  retuits: 0,
  likes: 0,
};

const tuitSlice = createSlice({
  name: "tuit",
  initialState: tuitArray,
  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },
    toggleLikeTuit(state, action) {
      const tuit = state.find((tuit) => tuit._id === action.payload);
      if (tuit) {
        tuit.liked = !tuit.liked;
        tuit.liked ? tuit.likes++ : tuit.likes--;
      }
    },
    toggleRetuit(state, action) {
      const tuit = state.find((tuit) => tuit._id === action.payload);
      if (tuit) {
        tuit.retuited = !tuit.retuited;
        tuit.retuited ? tuit.retuits++ : tuit.retuits--;
      }
    },
  },
});
export const { createTuit, deleteTuit, toggleLikeTuit, toggleRetuit } = tuitSlice.actions;
export default tuitSlice.reducer;
