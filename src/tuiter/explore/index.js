import PostSummaryList from "../post-summary-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExploreComponent = () => {
  return (
    <>
      <div className="d-flex">
        <div className="flex-grow-1">
          <div className="flex-fill position-relative">
            <input
              type="text"
              className="form-control rounded-pill ps-5"
              id="searchBar"
              placeholder="Search Twitter"
            />
            <FontAwesomeIcon
              icon={["fas", "magnifying-glass"]}
              className="position-absolute bottom-0 mb-2 h-50 ms-3 text-secondary"
            />
          </div>
        </div>
        <div className="ps-3 align-self-center">
          <FontAwesomeIcon icon={["fas", "gear"]} className="fa-2x text-primary float-end" />
        </div>
      </div>

      <nav className="nav nav-pills nav-fill mt-2">
        <a className="nav-link active" href="#">
          For you
        </a>
        <a className="nav-link" href="#">
          Trending
        </a>
        <a className="nav-link" href="#">
          News
        </a>
        <a className="nav-link" href="#">
          Sports
        </a>
        <a className="nav-link d-none d-md-block" href="#">
          Entertainment
        </a>
      </nav>

      <div className="position-relative mb-2">
        <img
          src="https://mushucdn.b-cdn.net/Starship-Mk1-Day.webp"
          className="img-fluid mt-2 rounded-4"
        />
        <div className="position-absolute bottom-0 ms-2">
          <h2 className="fw-bold text-light">SpaceX Starship</h2>
        </div>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
