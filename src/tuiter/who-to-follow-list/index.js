import whoArray from "./whos.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  return (
    <ul className="list-group rounded-3">
      <li className="list-group-item fw-bold">Who to follow</li>
      {whoArray.map((who) => {
        return <WhoToFollowListItem key={who._id} who={who} />;
      })}
    </ul>
  );
};
export default WhoToFollowList;