import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";

const NavSidebarItem = ({ active, nav }) => {
  return (
    <Link
      to={nav.link}
      className={`list-group-item list-group-item-action py-3 ${active === nav.id ? "active" : ""}`}
    >
      <div className="row align-items-center">
        <i className={`col-3 ${nav.icon}`} />
        <span className="col ps-2 d-none d-xl-inline-block wd-fs-custom">{nav.text}</span>
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
