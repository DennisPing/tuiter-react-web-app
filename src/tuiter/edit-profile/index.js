import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";

import { updateProfile } from "../reducers/profile-reducer";

const EditProfileComponent = () => {
  // First, hold the profile data from the state
  const profile = useSelector((state) => state.profile);
  // Then, modify the currProfile object
  const [currProfile, setProfile] = useState(profile);

  const dispatch = useDispatch();
  const updateProfileHandler = (profile) => {
    dispatch(updateProfile(profile));
  };

  return (
    <div className="list-group rounded-4">
      <div className="list-group-item d-flex align-items-center wd-profile-header">
        <FontAwesomeIcon
          icon={["fas", "xmark"]}
          className="me-3 align-self-center rounded-circle p-2 wd-profile-back"
          onClick={() => history.back()}
        />
        <h5 className="my-0">Edit Profile</h5>
        <button
          type="button"
          className="btn btn-dark rounded-pill ms-auto fw-bold"
          onClick={() => {
            updateProfileHandler(currProfile);
            history.back();
          }}
        >
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
        <div className="form-floating my-3">
          <input
            type="date"
            id="editBirthdayInput"
            value={new Date(currProfile.dob).toISOString().split("T")[0]}
            onChange={(e) =>
              setProfile({
                ...currProfile,
                dob: new Date(e.target.value).toISOString(),
              })
            }
            className="form-control"
          />
          <label htmlFor="editBirthdayInput">Birthdate</label>
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
