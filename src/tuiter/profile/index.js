import { useSelector } from "react-redux";

import ProfileBio from "./profile-bio";
import ProfileTuits from "./profile-tuits";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  return (
    <div className="list-group rounded-4">
      <ProfileBio profile={profile} />
      <>
        {loading && <li className="list-group-item">Loading...</li>}
        <ProfileTuits handle={profile.handle} tuits={tuits} />
      </>
    </div>
  );
};

export default ProfileComponent;
