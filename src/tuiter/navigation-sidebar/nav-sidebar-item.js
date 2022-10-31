import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";

const NavSidebarItem = ({ active, nav }) => {
  return (
    <Link
      to={nav.link}
      className={`list-group-item list-group-item-action py-3 ${
        active === nav.id ? "active fw-bold" : ""
      }`}
    >
      <div className="d-flex align-items-center">
        <i className={`${nav.icon}`} />
        <span className="ps-3 d-none d-xl-inline-block fs-5 wd-prebold" data-value={nav.text}>
          {nav.text}
        </span>
      </div>
    </Link>
  );
};

NavSidebarItem.propTypes = {
  active: PropTypes.string,
  nav: PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
};
export default NavSidebarItem;
