import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PostSummaryItem = ({ post }) => {
  return (
    <a href="#" className="list-group-item list-group-item-action">
      <div className="row">
        <div className="col-9 col-md-10 px-2">
          <div className="text-secondary">{post.topic}</div>
          <div>
            <strong>{post.userName}&nbsp;</strong>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span className="text-secondary"> - {post.time}</span>
          </div>
          <div className="">{post.title}</div>
        </div>
        <div className="col-3 col-md-2 py-2 align-self-center">
          <img src={post.image} className="img-fluid rounded-3 float-end" />
        </div>
      </div>
    </a>
  );
};

PostSummaryItem.propTypes = {
  post: PropTypes.shape({
    topic: PropTypes.string,
    userName: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default PostSummaryItem;
