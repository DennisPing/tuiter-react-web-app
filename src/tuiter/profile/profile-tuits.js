import PropTypes from "prop-types";

import TuitItem from "../tuits/tuit-item";

const ProfileTuits = ({ handle, tuits }) => {
  return (
    <>
      {tuits
        .filter((tuit) => {
          return tuit.handle === handle || tuit.retuited === true;
        })
        .slice(0)
        .reverse()
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
