import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TuitItem from "../tuits/tuit-item";

const PostSummaryItem = ({ tuit }) => {
  return (
    <a href="#" className="list-group-item list-group-item-action">
      <div className="row">
        <div className="col-9 col-md-10">
          <div className="text-secondary">{tuit.topic}</div>
          <div>
            <strong>{tuit.username}&nbsp;</strong>
            {tuit.verified && (
              <FontAwesomeIcon icon={["fas", "circle-check"]} className="text-primary" />
            )}
            <span className="text-secondary"> - {tuit.time}</span>
          </div>
          <div className="">{tuit.text}</div>
        </div>
        <div className="col-3 col-md-2 py-2 align-self-center">
          <img src={tuit.avatarIcon} className="img-fluid rounded-3 float-end" />
        </div>
      </div>
    </a>
  );
};

PostSummaryItem.propTypes = TuitItem.propTypes;

export default PostSummaryItem;
