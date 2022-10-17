import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
    <div class="m-2">
      <div class="d-flex">
          <div class="flex-grow-1">
              <div class="flex-fill position-relative">
                  <input type="text" class="form-control rounded-pill ps-5"
                      id="searchBar1" placeholder="Search Twitter">
                  <i class="fa-solid fa-magnifying-glass position-absolute bottom-0 mb-2 h-50 ms-3"></i>
              </div>
          </div>
          <div class="px-2 align-self-center">
            <i class="fa-solid fa-gear fa-2x text-primary float-end"></i>
          </div>
      </div>
    </div>

    <nav class="nav nav-tabs">
      <a class="nav-link rounded-0 active"
          href="../for-you.html">For you</a>
      <a class="nav-link rounded-0"
          href="../trending.html">Trending</a>
      <a class="nav-link rounded-0"
          href="../news.html">News</a>
      <a class="nav-link rounded-0"
          href="../sports.html">Sports</a>
      <a class="nav-link d-none d-md-block rounded-0"
          href="../entertainment.html">Entertainment</a>
    </nav>

    <div class="position-relative mb-2">
      <img src="./images/Starship-Mk1-Day.webp"
          class="img-fluid mt-2 rounded-3">
      <div class="position-absolute bottom-0 ms-2">
          <h2 class="fw-bold text-light">SpaceX's Starship</h2>
      </div>
    </div>
    ${PostSummaryList()}
  `;
};
export default ExploreComponent;
