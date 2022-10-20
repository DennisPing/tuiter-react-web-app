import PropTypes from "prop-types";

const NavSidebarItem = ({ active, nav }) => {
  return (
    <a
      href={nav.link}
      className={`list-group-item list-group-item-action py-3 ${active === nav.id ? "active" : ""}`}
    >
      <div className="row align-items-center">
        <i className={`col-2 ${nav.icon}`} />
        <span className="col ps-3 pe-0 d-none d-xl-inline-block fs-5">{nav.text}</span>
      </div>
    </a>
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
