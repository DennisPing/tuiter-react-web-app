import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import { toggleLikeTuit, toggleRetuit } from "../reducers/tuit-reducer";

// Code borrowed from: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
const kFormatter = (num) => {
  return Math.abs(num) > 9999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
    : Math.sign(num) * Math.abs(num);
};

const TuitStat = ({ id, comments, retuits, retuited, likes, liked }) => {
  const dispatch = useDispatch();
  const toggleLikeTuitHandler = (id) => {
    dispatch(toggleLikeTuit(id));
  };

  const toggleRetuitHandler = (id) => {
    dispatch(toggleRetuit(id));
  };

  return (
    <div className="row row-cols-4 text-secondary m-auto">
      <div className="col p-0">
        <span className="wd-hover-icon p-1">
          <FontAwesomeIcon icon={["far", "comment"]} className="rounded-circle p-1 wd-icon-sq" />
          <span className="ms-2">{kFormatter(comments)}</span>
        </span>
      </div>
      <div className="col p-0">
        <span
          className="wd-hover-icon p-1"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleRetuitHandler(id);
          }}
        >
          <FontAwesomeIcon
            icon={["fas", "retweet"]}
            className={`rounded-circle p-1 wd-icon-sq ${retuited ? "text-success" : ""}`}
          />
          <span className={`ms-2 ${retuited ? "text-success" : ""}`}>{kFormatter(retuits)}</span>
        </span>
      </div>
      <div className="col p-0">
        <span
          className="wd-hover-icon p-1"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleLikeTuitHandler(id);
          }}
        >
          <FontAwesomeIcon
            icon={liked ? ["fas", "heart"] : ["far", "heart"]}
            className={`rounded-circle p-1 wd-icon-sq ${liked ? "text-danger" : ""}`}
          />
          <span className={`ms-2 ${liked ? "text-danger" : ""}`}>{kFormatter(likes)}</span>
        </span>
      </div>
      <div className="col p-0">
        <span className="wd-hover-icon p-1">
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
  id: PropTypes.number,
  comments: PropTypes.number,
  retuits: PropTypes.number,
  retuited: PropTypes.bool,
  likes: PropTypes.number,
  liked: PropTypes.bool,
};

export default TuitStat;
