import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Code borrowed from: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
const kFormatter = (num) => {
  return Math.abs(num) > 9999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
    : Math.sign(num) * Math.abs(num);
};

const TuitStat = ({ comments, retweets, likes, liked }) => {
  return (
    <div className="d-flex text-secondary">
      <div className="flex-fill">
        <div className="wd-hover-icon">
          {/* <i className="bi bi-chat rounded-circle wd-icon-sq p-1" /> */}
          <FontAwesomeIcon icon={["far", "comment"]} className="rounded-circle p-1 wd-icon-sq" />
          <span className="ms-2">{kFormatter(comments)}</span>
        </div>
      </div>
      <div className="flex-fill">
        <span className="wd-hover-icon">
          {/* <i className="bi bi-repeat rounded-circle wd-icon-sq" /> */}
          <FontAwesomeIcon icon={["fas", "retweet"]} className="rounded-circle p-1 wd-icon-sq" />
          <span className="ms-2">{kFormatter(retweets)}</span>
        </span>
      </div>
      <div className="flex-fill">
        <span className="wd-hover-icon">
          {/* <i className={liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"} /> */}
          <FontAwesomeIcon
            icon={liked ? ["fas", "heart"] : ["far", "heart"]}
            className={
              liked ? "text-danger rounded-circle p-1 wd-icon-sq" : "rounded-circle p-1 wd-icon-sq"
            }
          />
          <span className={`ms-2 ${liked ? "text-danger" : ""}`}>{kFormatter(likes)}</span>
        </span>
      </div>
      <div className="flex-fill">
        <span className="wd-hover-icon">
          {/* <i className="bi bi-upload rounded-circle p-1" /> */}
          <FontAwesomeIcon
            icon={["fas", "arrow-up-from-bracket"]}
            className="rounded-circle p-1 wd-icon-sq"
          />
        </span>
      </div>
    </div>
  );
};

TuitStat.propTypes = {
  comments: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool,
};

export default TuitStat;
