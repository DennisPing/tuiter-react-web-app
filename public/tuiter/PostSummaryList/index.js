import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return `
    <ul class="list-group rounded-3 mt-2">
        ${posts.map((post) => PostSummaryItem(post)).join("")}
    </ul>
    `;
};
export default PostSummaryList;
