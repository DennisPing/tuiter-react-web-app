import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const ImageCaption = ({ card }) => {
  if (card.imageTitle) {
    return (
      <div className="card my-2 rounded-4">
        <img src={card.image} className="card-img-top wd-rounded-corners" />
        <div className="card-body pt-2">
          <div className="card-link text-secondary text-decoration-none">{card.imageDomain}</div>
          <h5 className="card-title mb-1">{card.imageTitle}</h5>
          <p className="card-text text-secondary">{card.imageText}</p>
        </div>
      </div>
    );
  } else {
    return <img src={card.image} className="img-fluid rounded-4 my-2" />;
  }
};

const HomeCard = ({ card }) => {
  return (
    <a href={card.link} className="list-group-item list-group-item-action">
      <div className="row my-2">
        <div className="col-auto py-1">
          <img src={card.avatarIcon} className="wd-icon-width rounded-circle" />
        </div>
        <div className="col ps-0">
          <div className="align-items-center">
            <span className="fw-bold me-1">{card.username}</span>
            <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-1" />
            <span className="text-secondary me-1">@{card.handle}</span>
            <span className="text-secondary"> - {card.time}</span>
            <i className="bi bi-three-dots text-secondary fs-5 float-end" />
          </div>
          <div>{card.title}</div>
          <ImageCaption card={card} />
          <div className="d-flex text-secondary">
            <div className="flex-fill">
              <i className="bi bi-chat"></i>
              <span className="ms-2">{card.comments}</span>
            </div>
            <div className="flex-fill">
              <i className="bi bi-repeat"></i>
              <span className="ms-2">{card.retweets}</span>
            </div>
            <div className="flex-fill">
              <i className="bi bi-heart"></i>
              <span className="ms-2">{card.likes}</span>
            </div>
            <div className="flex-fill">
              <i className="bi bi-upload"></i>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

ImageCaption.propTypes = {
  card: PropTypes.shape({
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
  }),
};

HomeCard.propTypes = ImageCaption.propTypes;

export default HomeCard;
