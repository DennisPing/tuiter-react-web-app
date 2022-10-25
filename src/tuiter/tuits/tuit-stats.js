import PropTypes from "prop-types";

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
        <i className="bi bi-chat" />
        <span className="ms-2">{kFormatter(comments)}</span>
      </div>
      <div className="flex-fill">
        <i className="bi bi-repeat" />
        <span className="ms-2">{kFormatter(retweets)}</span>
      </div>
      <div className="flex-fill">
        <i className={liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"} />
        <span className={`ms-2 ${liked ? "text-danger" : ""}`}>{kFormatter(likes)}</span>
      </div>
      <div className="flex-fill">
        <i className="bi bi-upload" />
      </div>
    </div>
  );
};

TuitStat.propTypes = {
  comments: PropTypes.number,
  retweets: PropTypes.number,
  likes: PropTypes.number,
  liked: PropTypes.bool,
};

export default TuitStat;
