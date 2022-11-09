import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";

export const findTuitsThunk = createAsyncThunk("tuits/findTuits", async () => {
  return await service.findTuits();
});

export const deleteTuitThunk = createAsyncThunk("tuits/deleteTuit", async (tid) => {
  await service.deleteTuit(tid);
  return tid;
});

export const createTuitThunk = createAsyncThunk("tuits/createTuit", async (tuit) => {
  return await service.createTuit(tuit);
});

export const updateTuitThunk = createAsyncThunk("tuits/updateTuit", async (tuit) => {
  return await service.updateTuit(tuit);
});
