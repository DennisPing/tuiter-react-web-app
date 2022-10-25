import { useSelector } from "react-redux";

import TuitItem from "./tuit-item";

const TuitList = () => {
  const tuitsArray = useSelector((state) => state.tuit);
  return (
    <div className="list-group rounded-4">
      {tuitsArray.map((tuit) => (
        <TuitItem key={tuit.id} tuit={tuit} />
      ))}
    </div>
  );
};
export default TuitList;
