import PropTypes from "prop-types";

import TuitItem from "../tuits/tuit-item";

const ProfileTuits = ({ handle, tuits }) => {
  return (
    <>
      {tuits
        .filter((tuit) => tuit.handle === handle)
        .map((tuit) => (
          <TuitItem key={tuit._id} tuit={tuit} />
        ))}
    </>
  );
};

ProfileTuits.propTypes = {
  handle: PropTypes.string.isRequired,
  tuits: PropTypes.array.isRequired,
};

export default ProfileTuits;
