import postsArray from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  return (
    <ul className="list-group rounded-3">
      {postsArray.map((post) => {
        return <PostSummaryItem key={post._id} post={post} />;
      })}
    </ul>
  );
};
export default PostSummaryList;
