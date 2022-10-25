import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import TuitStat from "./tuit-stats";
import "./index.css";

const ImageCaption = ({ tuit }) => {
  // No image
  if (!tuit.image) {
    return <></>;
  }
  // Just an image
  else if (!tuit.imageTitle) {
    return <img src={tuit.image} className="img-fluid rounded-4 border mb-2" />;
  }
  // Image with caption
  else {
    return (
      <div className="card mb-2 border-0 rounded-4">
        <img src={tuit.image} className="card-img-top border wd-top-rounded-corners" />
        <div className="card-body pt-2 border-start border-end border-bottom wd-bottom-rounded-corners">
          <div className="card-link text-secondary text-decoration-none">{tuit.imageDomain}</div>
          <h5 className="card-title mb-1">{tuit.imageTitle}</h5>
          <p className="card-text text-secondary">{tuit.imageText}</p>
        </div>
      </div>
    );
  }
};

const SocialIcon = ({ socialAction }) => {
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
};

const SocialName = ({ socialAction }) => {
  return (
    <div className="small text-secondary fw-bold">{`${socialAction.username} ${socialAction.action}`}</div>
  );
};

const Verified = ({ verified }) => {
  if (verified) {
    return <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-1" />;
  }
  return <></>;
};

const TuitItem = ({ tuit }) => {
  let socialIcon = <></>;
  let socialName = <></>;
  if (tuit.socialAction) {
    socialIcon = <SocialIcon socialAction={tuit.socialAction} />;
    socialName = <SocialName socialAction={tuit.socialAction} />;
  }

  return (
    <a href={tuit.link} className="list-group-item list-group-item-action py-3">
      <div className="row">
        <div className="col-auto">
          {socialIcon}
          <img
            src={tuit.avatarIcon}
            className="wd-icon-width rounded-circle row justify-content-center mx-0"
          />
        </div>
        <div className="col ps-0">
          {socialName}
          <div className="align-items-center">
            <span className="fw-bold me-1">{tuit.username}</span>
            <Verified verified={tuit.verified} />
            <span className="text-secondary me-1">@{tuit.handle}</span>
            <span className="text-secondary"> - {tuit.time}</span>
            <i className="bi bi-three-dots text-secondary fs-5 float-end" />
          </div>
          <div className="mb-2">{tuit.title}</div>
          <ImageCaption tuit={tuit} />
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
    avatarIcon: PropTypes.string,
    username: PropTypes.string,
    handle: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    imageTitle: PropTypes.string,
    imageText: PropTypes.string,
    imageDomain: PropTypes.string,
    imageLink: PropTypes.string,
    comments: PropTypes.number,
    retweets: PropTypes.number,
    likes: PropTypes.number,
    liked: PropTypes.bool,
    socialAction: PropTypes.shape({
      action: PropTypes.string,
      username: PropTypes.string,
    }),
    verified: PropTypes.bool,
  }),
};

SocialIcon.propTypes = {
  socialAction: PropTypes.shape({
    action: PropTypes.string,
    username: PropTypes.string,
  }),
};

Verified.propTypes = {
  verified: PropTypes.bool,
};

SocialName.propTypes = SocialIcon.propTypes;
ImageCaption.propTypes = TuitItem.propTypes;

export default TuitItem;
