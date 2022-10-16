const PostSummaryItem = (post) => {
  // Conditional check if num Tweets exists
  let tweets = "";
  if (post.tweets) {
    tweets = `<div class="text-secondary">${post.tweets} Tweets</div>`;
  }

  return `
    <a href="#" class="list-group-item list-group-item-action">
      <div class="row">
          <div class="col-9 col-md-10 px-2">
              <div class="text-secondary">
                   ${post.topic}
              </div>
              <div>
                  <span class="fw-bolder">${post.userName}</span>
                  <i class="fa-solid fa-circle-check"></i>
                  <span class="text-secondary"> - ${post.time} </span>
              </div>
              <div class="fw-bold">
                  ${post.title}
              </div>
              ${tweets}
          </div>
          <div class="col-3 col-md-2 align-self-center">
              <img src=${post.image} class="rounded-3 float-end" height="80px">
          </div>
      </div>
    </a>
    `;
};
export default PostSummaryItem;
