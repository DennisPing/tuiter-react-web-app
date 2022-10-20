import PostSummaryList from "../post-summary-list";
import "./index.css";

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
            <i className="fa-solid fa-magnifying-glass position-absolute bottom-0 mb-2 h-50 ms-3"></i>
          </div>
        </div>
        <div className="px-2 align-self-center">
          <i className="fa-solid fa-gear fa-2x text-primary float-end"></i>
        </div>
      </div>

      <nav className="nav nav-pills nav-fill mt-2">
        <a className="nav-link active" href="../for-you.html">
          For you
        </a>
        <a className="nav-link" href="../trending.html">
          Trending
        </a>
        <a className="nav-link" href="../news.html">
          News
        </a>
        <a className="nav-link" href="../sports.html">
          Sports
        </a>
        <a className="nav-link d-none d-md-block" href="../entertainment.html">
          Entertainment
        </a>
      </nav>

      <div className="position-relative mb-2">
        <img
          src="https://mushucdn.b-cdn.net/Starship-Mk1-Day.webp"
          className="img-fluid mt-2 rounded-3"
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
