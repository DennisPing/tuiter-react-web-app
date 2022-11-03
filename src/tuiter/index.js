import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import whoReducer from "./reducers/who-reducer";
import postReducer from "./reducers/post-reducer";
import tuitReducer from "./reducers/tuit-reducer";
import profileReducer from "./reducers/profile-reducer";
import EditProfileComponent from "./edit-profile";

const store = configureStore({
  reducer: {
    who: whoReducer,
    post: postReducer,
    tuit: tuitReducer,
    profile: profileReducer,
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
            <Route path="/" element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomeComponent />} />
            <Route path="explore" element={<ExploreComponent />} />
            <Route path="profile" element={<ProfileComponent />} />
            <Route path="profile/edit-profile" element={<EditProfileComponent />} />
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
