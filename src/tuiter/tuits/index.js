import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <>
      {loading && <li className="list-group-item">Loading...</li>}

      {tuits
        .slice(0)
        .reverse()
        .map((tuit) => (
          <TuitItem key={tuit._id} tuit={tuit} />
        ))}
    </>
  );
};
export default TuitList;
