import { useSelector } from "react-redux";

import ProfileBio from "./profile-bio";
import ProfileTuits from "./profile-tuits";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);
  const tuitsArray = useSelector((state) => state.tuit);
  return (
    <div className="list-group rounded-4">
      <ProfileBio profile={profile} />
      <ProfileTuits handle={profile.handle} tuits={tuitsArray} />
    </div>
  );
};
export default ProfileComponent;
