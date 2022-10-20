import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-auto col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col col-lg-7 col-xl-6">
          <ExploreComponent />
        </div>
        <div className="col d-none d-lg-block">
          <WhoToFollowList />
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
