import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return `
    <ul class="list-group rounded-3">
        <li class="list-group-item fw-bold">Who to follow</li>
        ${who.map((whoItem) => WhoToFollowListItem(whoItem)).join("")}
    </ul>
    `;
};
export default WhoToFollowList;
