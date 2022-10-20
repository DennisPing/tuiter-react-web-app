import PropTypes from "prop-types";
import NavSidebarItem from "./nav-sidebar-item";
import navArray from "./navs.json";

const NavSidebarList = ({ active }) => {
  return (
    <>
      {navArray.map((nav) => (
        <NavSidebarItem key={nav.id} active={active} nav={nav} />
      ))}
    </>
  );
};

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group rounded-3">
        <NavSidebarList active={active} />
      </div>
      <a href="#" className="btn btn-primary rounded-pill w-100 mt-2" role="button">
        Tweet
      </a>
    </>
  );
};

NavSidebarList.propTypes = {
  active: PropTypes.string,
};

NavigationSidebar.propTypes = {
  active: PropTypes.string,
};

export default NavigationSidebar;
