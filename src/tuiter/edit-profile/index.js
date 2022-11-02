import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextareaAutosize from "react-textarea-autosize";

const EditProfileComponent = () => {
  // First, hold the profile data from the state
  const profile = useSelector((state) => state.profile);
  // Then, modify the currProfile object
  const [currProfile, setProfile] = useState(profile);

  // Exit button handler
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const exitHandler = () => {
    const paths = pathname.split("/");
    const prev = paths.slice(0, paths.length - 1).join("/");
    navigate(prev);
  };

  return (
    <div className="list-group rounded-4">
      <div className="list-group-item d-flex align-items-center wd-profile-header">
        <FontAwesomeIcon
          icon={["fas", "xmark"]}
          className="me-3 align-self-center rounded-circle p-2 wd-profile-back"
          onClick={() => exitHandler()}
        />
        <h5 className="my-0">Edit Profile</h5>
        <button type="button" className="btn btn-dark rounded-pill ms-auto fw-bold">
          Save
        </button>
      </div>
      <div className="list-group-item p-0 position-relative">
        <img src={profile.bannerPicture} className="wd-profile-banner" />
        <img
          src={profile.profilePicture}
          className="position-absolute rounded-circle border border-4 border-white wd-profile-pic"
        />
      </div>
      <div className="list-group-item wd-profile-gap">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="editNameInput"
            placeholder="Name"
            value={currProfile.username}
            maxLength={64}
            onChange={(e) => setProfile({ ...currProfile, username: e.target.value })}
          />
          <label htmlFor="editNameInput">Name</label>
        </div>
        <div className="form-floating my-3">
          <TextareaAutosize
            type="text"
            className="form-control"
            id="editBioInput"
            placeholder="Bio"
            value={currProfile.bio}
            maxLength={255}
            onChange={(e) => setProfile({ ...currProfile, bio: e.target.value })}
          />
          <label htmlFor="editBioInput">Bio</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="editLocationInput"
            placeholder="Location"
            value={currProfile.location}
            maxLength={64}
            onChange={(e) => setProfile({ ...currProfile, location: e.target.value })}
          />
          <label htmlFor="editLocationInput">Location</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="editLocationInput"
            placeholder="Website"
            value={currProfile.website}
            maxLength={64}
            onChange={(e) => setProfile({ ...currProfile, website: e.target.value })}
          />
          <label htmlFor="editLocationInput">Website</label>
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
