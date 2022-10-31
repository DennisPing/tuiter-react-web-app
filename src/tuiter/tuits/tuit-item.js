import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuit-reducer";

import TuitStat from "./tuit-stats";
import "./index.css";

const MediaContent = ({ tuit }) => {
  // No image
  if (!tuit.image) {
    return <></>;
  }
  // Just an image
  else if (!tuit.mediaCard) {
    return <img src={tuit.image} className="img-fluid rounded-4 border mb-2" />;
  }
  // Image with media card
  else {
    return (
      <div className="card mb-2 border-0 rounded-4">
        <img src={tuit.image} className="card-img-top border wd-top-rounded-corners" />
        <div className="card-body pt-2 border-start border-end border-bottom wd-bottom-rounded-corners">
          <div className="card-link text-secondary text-decoration-none">
            {tuit.mediaCard.imageDomain}
          </div>
          <h5 className="card-title mb-1">{tuit.mediaCard.mediaTitle}</h5>
          <p className="card-text text-secondary">{tuit.mediaCard.mediaText}</p>
        </div>
      </div>
    );
  }
};

const SocialIcon = ({ socialAction }) => {
  if (socialAction) {
    let icon = "";
    switch (socialAction.action) {
      case "retweeted":
        icon = "bi bi-repeat";
        break;
      case "liked":
        icon = "bi bi-heart-fill";
        break;
      case "follows":
        icon = "bi bi-person-fill";
        break;
    }
    return (
      <div>
        <i className={`${icon} small text-secondary float-end`} />
      </div>
    );
  }
  return <></>;
};

const SocialName = ({ socialAction }) => {
  if (socialAction) {
    return (
      <div className="small text-secondary fw-bold">{`${socialAction.username} ${socialAction.action}`}</div>
    );
  }
  return <></>;
};

const Verified = ({ verified }) => {
  if (verified) {
    return <FontAwesomeIcon icon={["fas", "circle-check"]} className="text-primary me-1" />;
  }
  return <></>;
};

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <a href={tuit.link} className="list-group-item list-group-item-action py-3">
      <div className="row">
        <div className="col-auto pe-3">
          <SocialIcon socialAction={tuit.socialAction} />
          <img src={tuit.avatarIcon} className="wd-icon-width rounded-circle" />
        </div>
        <div className="col ps-0">
          <SocialName socialAction={tuit.socialAction} />
          <div className="align-items-center">
            <span className="fw-bold me-1">{tuit.username}</span>
            <Verified verified={tuit.verified} />
            <span className="text-secondary me-1">@{tuit.handle}</span>
            <span className="text-secondary"> - {tuit.time}</span>
            <i
              className="bi bi-x-lg text-secondary rounded-circle float-end wd-more"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                deleteTuitHandler(tuit._id);
              }}
            />
          </div>
          <div className="mb-2">{tuit.text}</div>
          <MediaContent tuit={tuit} />
          <TuitStat
            comments={tuit.comments}
            retweets={tuit.retweets}
            likes={tuit.likes}
            liked={tuit.liked}
          />
        </div>
      </div>
    </a>
  );
};

TuitItem.propTypes = {
  tuit: PropTypes.shape({
    avatarIcon: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    mediaCard: PropTypes.shape({
      mediaTitle: PropTypes.string.isRequired,
      mediaText: PropTypes.string.isRequired,
      mediaDomain: PropTypes.string.isRequired,
    }),
    comments: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    liked: PropTypes.bool,
    socialAction: PropTypes.shape({
      action: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
    verified: PropTypes.bool,
  }),
};

SocialIcon.propTypes = {
  socialAction: PropTypes.shape({
    action: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

Verified.propTypes = {
  verified: PropTypes.bool,
};

SocialName.propTypes = SocialIcon.propTypes;
MediaContent.propTypes = TuitItem.propTypes;

export default TuitItem;
