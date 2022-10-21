import PropTypes from "prop-types";
import NavSidebarItem from "./nav-sidebar-item";
import navArray from "./navs.json";
import { useLocation } from "react-router";

const NavSidebarList = ({ active }) => {
  return (
    <>
      {navArray.map((nav) => (
        <NavSidebarItem key={nav.id} active={active} nav={nav} />
      ))}
    </>
  );
};

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const paths = pathname.split("/");
  const active = paths[2];
  return (
    <>
      <div className="list-group rounded-4">
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
