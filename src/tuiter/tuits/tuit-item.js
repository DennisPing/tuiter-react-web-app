import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const ImageCaption = ({ tuit }) => {
  if (tuit.imageTitle) {
    return (
      <div className="card my-2 border-0 rounded-4">
        <img src={tuit.image} className="card-img-top border wd-top-rounded-corners" />
        <div className="card-body pt-2 border-start border-end border-bottom wd-bottom-rounded-corners">
          <div className="card-link text-secondary text-decoration-none">{tuit.imageDomain}</div>
          <h5 className="card-title mb-1">{tuit.imageTitle}</h5>
          <p className="card-text text-secondary">{tuit.imageText}</p>
        </div>
      </div>
    );
  } else {
    return <img src={tuit.image} className="img-fluid rounded-4 border my-2" />;
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
            <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-1" />
            <span className="text-secondary me-1">@{tuit.handle}</span>
            <span className="text-secondary"> - {tuit.time}</span>
            <i className="bi bi-three-dots text-secondary fs-5 float-end" />
          </div>
          <div>{tuit.title}</div>
          <ImageCaption tuit={tuit} />
          <div className="d-flex text-secondary">
            <div className="flex-fill">
              <i className="bi bi-chat" />
              <span className="ms-2">{tuit.comments}</span>
            </div>
            <div className="flex-fill">
              <i className="bi bi-repeat" />
              <span className="ms-2">{tuit.retweets}</span>
            </div>
            <div className="flex-fill">
              <i className="bi bi-heart" />
              <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="flex-fill">
              <i className="bi bi-upload" />
            </div>
          </div>
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
    comments: PropTypes.string,
    retweets: PropTypes.string,
    likes: PropTypes.string,
    socialAction: PropTypes.shape({
      action: PropTypes.string,
      username: PropTypes.string,
    }),
  }),
};

SocialIcon.propTypes = {
  socialAction: PropTypes.shape({
    action: PropTypes.string,
    username: PropTypes.string,
  }),
};

SocialName.propTypes = SocialIcon.propTypes;
ImageCaption.propTypes = TuitItem.propTypes;

export default TuitItem;
