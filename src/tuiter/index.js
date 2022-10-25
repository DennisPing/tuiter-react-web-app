import { Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import TuitList from "./tuits";
import whoReducer from "./reducers/who-reducer";
import postReducer from "./reducers/post-reducer";
import tuitReducer from "./reducers/tuit-reducer";

const store = configureStore({
  reducer: {
    who: whoReducer,
    post: postReducer,
    tuit: tuitReducer,
  },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-auto">
          <NavigationSidebar />
        </div>
        <div className="col col-xl-6">
          <Routes>
            <Route path="/" element={<TuitList />} />
            <Route path="home" element={<TuitList />} />
            <Route path="explore" element={<ExploreComponent />} />
          </Routes>
        </div>
        <div className="col col-lg-auto col-xl d-none d-lg-block">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
