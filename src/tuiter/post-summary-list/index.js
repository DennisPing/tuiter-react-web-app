import { useSelector } from "react-redux";

import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  const postsArray = useSelector((state) => state.post);
  return (
    <ul className="list-group rounded-4">
      {postsArray.map((post) => {
        return <PostSummaryItem key={post._id} post={post} />;
      })}
    </ul>
  );
};
export default PostSummaryList;
