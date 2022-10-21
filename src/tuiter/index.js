import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import { Routes, Route } from "react-router";

function Tuiter() {
  return (
    <div className="row">
      <div className="col-auto">
        <NavigationSidebar />
      </div>
      <div className="col col-lg-7 col-xl-6">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="home" element={<HomeComponent />} />
          <Route path="explore" element={<ExploreComponent />} />
        </Routes>
      </div>
      <div className="col d-none d-lg-block">
        <WhoToFollowList />
      </div>
    </div>
  );
}
export default Tuiter;
