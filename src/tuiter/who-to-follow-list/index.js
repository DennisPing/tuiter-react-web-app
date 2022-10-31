import { useSelector } from "react-redux";

import TermsOfService from "./terms-of-service";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  return (
    <div>
      <ul className="list-group rounded-4">
        <li className="list-group-item fw-bold px-3">Who to follow</li>
        {whoArray.map((who) => (
          <WhoToFollowListItem key={who._id} who={who} />
        ))}
        <a href="#" className="list-group-item list-group-item-action">
          <div className="text-primary">Show more</div>
        </a>
      </ul>
      <TermsOfService />
    </div>
  );
};
export default WhoToFollowList;
