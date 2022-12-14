import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import { updateTuitThunk } from "../../services/tuits-thunks";
import { toggleLikeTuit, toggleRetuit, toggleDislike } from "../reducers/tuit-reducer";

// Code borrowed from: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
const kFormatter = (num) => {
  return Math.abs(num) > 9999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
    : Math.sign(num) * Math.abs(num);
};

const TuitStat = ({ id, comments, retuits, retuited, likes, liked, dislikes, disliked }) => {
  const dispatch = useDispatch();

  const toggleLikeTuitHandler = (id) => {
    dispatch(toggleLikeTuit(id));
    dispatch(
      updateTuitThunk({
        _id: id,
        liked: !liked,
        likes: liked ? likes - 1 : likes + 1,
      })
    );
  };

  const toggleRetuitHandler = (id) => {
    dispatch(toggleRetuit(id));
    dispatch(
      updateTuitThunk({
        _id: id,
        retuited: !retuited,
        retuits: retuited ? retuits - 1 : retuits + 1,
      })
    );
  };

  const toggleDislikeTuitHandler = (id) => {
    dispatch(toggleDislike(id));
    dispatch(
      updateTuitThunk({
        _id: id,
        disliked: !disliked,
        dislikes: disliked ? dislikes - 1 : dislikes + 1,
      })
    );
  };

  return (
    <div className="row row-cols-5 text-secondary mb-2 wd-prevent-select">
      <div className="col ps-2 pe-0">
        <span className="wd-hover-icon d-inline-block">
          <FontAwesomeIcon icon={["far", "comment"]} className="rounded-circle align-middle p-2 wd-icon-sq" />
          <span className="mx-1 align-middle">{kFormatter(comments)}</span>
        </span>
      </div>
      <div className="col p-0">
        <span
          className="wd-hover-icon d-inline-block"
          onClick={() => {
            toggleRetuitHandler(id);
          }}
        >
          <FontAwesomeIcon
            icon={["fas", "retweet"]}
            className={`rounded-circle align-middle p-2 wd-icon-sq ${retuited ? "text-success" : ""}`}
          />
          <span className={`mx-1 align-middle ${retuited ? "text-success" : ""}`}>{kFormatter(retuits)}</span>
        </span>
      </div>
      <div className="col p-0">
        <span
          className="wd-hover-icon d-inline-block"
          onClick={() => {
            toggleLikeTuitHandler(id);
          }}
        >
          <FontAwesomeIcon
            icon={liked ? ["fas", "heart"] : ["far", "heart"]}
            className={`rounded-circle align-middle p-2 wd-icon-sq ${liked ? "text-danger" : ""}`}
          />
          <span className={`mx-1 align-middle ${liked ? "text-danger" : ""}`}>{kFormatter(likes)}</span>
        </span>
      </div>
      <div className="col p-0">
        <span
          className="wd-hover-icon d-inline-block"
          onClick={() => {
            toggleDislikeTuitHandler(id);
          }}
        >
          <FontAwesomeIcon
            icon={disliked ? ["fas", "thumbs-down"] : ["far", "thumbs-down"]}
            className={`rounded-circle align-middle p-2 wd-icon-sq fa-flip-horizontal ${
              disliked ? "text-warning" : ""
            }`}
          />
          <span className={`mx-1 align-middle ${disliked ? "text-warning" : ""}`}>{kFormatter(dislikes)}</span>
        </span>
      </div>
      <div className="col p-0">
        <span className="wd-hover-icon d-inline-block">
          <FontAwesomeIcon
            icon={["fas", "arrow-up-from-bracket"]}
            className="rounded-circle align-middle p-2 wd-icon-sq"
          />
        </span>
      </div>
    </div>
  );
};

TuitStat.propTypes = {
  id: PropTypes.string,
  comments: PropTypes.number,
  retuits: PropTypes.number,
  retuited: PropTypes.bool,
  likes: PropTypes.number,
  liked: PropTypes.bool,
  dislikes: PropTypes.number,
  disliked: PropTypes.bool,
};

export default TuitStat;
