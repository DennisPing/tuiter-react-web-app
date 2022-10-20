import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListUl,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group rounded-3">
      <a href="#" className="list-group-item list-group-item-action">
        Tuiter
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          active === "home" ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={faHouseChimney} />
        <span className="d-none d-xl-inline-block ms-2">Home</span>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          active === "explore" ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={faHashtag} />
        <div className="d-none d-xl-inline-block ms-2">Explore</div>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          active === "notifications" ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={faBell} />
        <div className="d-none d-xl-inline-block ms-2">Notifications</div>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          active === "messages" ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <div className="d-none d-xl-inline-block ms-2">Messages</div>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          active === "bookmarks" ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={faBookmark} />
        <div className="d-none d-xl-inline-block ms-2">Bookmarks</div>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          active === "lists" ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={faListUl} />
        <div className="d-none d-xl-inline-block ms-2">Lists</div>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          active === "profile" ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={faUser} />
        <div className="d-none d-xl-inline-block ms-2">Profile</div>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          active === "more" ? "active" : ""
        }`}
      >
        <i className="fa-stack wd-stacked-icon align-middle">
          <FontAwesomeIcon
            icon={faCircle}
            className="fa-stack-1x wd-nudge-circle"
          />
          <FontAwesomeIcon icon={faEllipsis} className="fa-stack-1x fa-sm" />
        </i>
        <div className="mx-2 d-none d-xl-inline-block ms-2">More</div>
      </a>
    </div>
  );
};

NavigationSidebar.propTypes = {
  active: PropTypes.string,
};

export default NavigationSidebar;
