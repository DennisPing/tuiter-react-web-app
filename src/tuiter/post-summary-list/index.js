import { useSelector } from "react-redux";

import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  return (
    <ul className="list-group rounded-4">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits
        .slice(0)
        .reverse()
        .map((tuit) => {
          return <PostSummaryItem key={tuit._id} tuit={tuit} />;
        })}
    </ul>
  );
};
export default PostSummaryList;
