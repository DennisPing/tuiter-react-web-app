import { useSelector } from "react-redux";

import TuitItem from "./tuit-item";

const TuitList = () => {
  const tuitsArray = useSelector((state) => state.tuit);
  return (
    <>
      {tuitsArray.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </>
  );
};
export default TuitList;
