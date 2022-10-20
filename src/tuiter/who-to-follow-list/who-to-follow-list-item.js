import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const WhoToFollowListItem = ({ who }) => {
  return (
    <a href="#" className="list-group-item list-group-item-action px-2">
      <div className="row align-items-center wd-who-height">
        <div className="col-2 align-self-center">
          <img src={who.avatarIcon} className="img-fluid p-1 border-0 rounded-circle" />
        </div>
        <div className="col-6 px-0 text-nowrap">
          <div>
            <strong>{who.userName}&nbsp;</strong>
            <FontAwesomeIcon icon={faCircleCheck} className="text-primary" />
          </div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-4 align-self-center">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
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
