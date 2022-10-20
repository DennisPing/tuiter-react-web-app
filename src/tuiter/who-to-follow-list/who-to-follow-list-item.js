import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const WhoToFollowListItem = ({ who }) => {
  return (
    <a href="#" className="list-group-item list-group-item-action px-2">
      <div className="row">
        <div className="col-2 align-self-center">
          <img src={who.avatarIcon} className="img-fluid rounded-circle" />
        </div>
        <div className="col-6 px-0 text-nowrap">
          <div>
            <span className="fw-bold">{who.userName}&nbsp;</span>
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-4 align-self-center">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </a>
  );
};

WhoToFollowListItem.propTypes = {
  who: PropTypes.shape({
    userName: PropTypes.string,
    handle: PropTypes.string,
    avatarIcon: PropTypes.string,
  }),
};
export default WhoToFollowListItem;
