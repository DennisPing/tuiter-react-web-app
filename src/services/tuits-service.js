import axios from "axios";

// const API_BASE = process.env.REACT_APP_API_BASE;
const API_BASE = process.env.REACT_APP_API_RENDER;
const TUITS_API = `${API_BASE}/tuits`;

export const findTuits = async () => {
  const resp = await axios.get(TUITS_API);
  return resp.data;
};

export const deleteTuit = async (tid) => {
  const resp = await axios.delete(`${TUITS_API}/${tid}`);
  return resp.data;
};

export const createTuit = async (tuit) => {
  const resp = await axios.post(TUITS_API, tuit);
  return resp.data;
};

export const updateTuit = async (tuit) => {
  const resp = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return resp.data;
};
