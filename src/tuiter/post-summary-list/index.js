import { useSelector } from "react-redux";

import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  const tuitsArray = useSelector((state) => state.post);
  return (
    <ul className="list-group rounded-4">
      {tuitsArray.map((tuit) => {
        return <PostSummaryItem key={tuit._id} tuit={tuit} />;
      })}
    </ul>
  );
};
export default PostSummaryList;
