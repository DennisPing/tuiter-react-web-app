const PostItem = (post) => {
  let thumbnailDesc = "";
  if (post.thumbnailTitle) {
    thumbnailDesc = `
    <li class="list-group-item bg-black">
      <div>${post.thumbnailTitle}</div>
      <div class="text-secondary">
        ${post.thumbnailBody}
      </div>
      <span class="text-secondary"><i class="fa-solid fa-link"></i></span>
      <span class="text-secondary">${post.thumbnailLink}</span>
    </li>
    `;
  }

  return `
  <div class="row border-bottom border-start border-end border-light">
    <div class="col-1 py-3 pe-0">
      <img src=${post.avatarIcon} class="img-fluid rounded-circle bg-white" />
    </div>

    <div class="col ps-0">
      <ul class="list-group">
        <li class="list-group-item bg-black border-0">
          <div>
            <span class="fw-bolder">${post.username}</span>
            <i class="fa-solid fa-circle-check"></i>
            <span class="text-secondary">${post.handle}</span>
            <span class="text-secondary"> - ${post.time} </span>
            <i class="fa-solid fa-ellipsis fs-5 text-secondary float-end"></i>
          </div>
          <div>
            ${post.title}
          </div>

          <!-- Content block -->
          <ul class="list-group my-2 rounded-3">
            <li class="list-group-item p-0 bg-black">
              <img src=${post.thumbnail} class="img-fluid rounded-3">
            </li>
            ${thumbnailDesc}
          </ul>

          <div class="d-flex text-secondary mb-2">
            <div class="flex-fill">
              <i class="fa-regular fa-comment"></i>
              <span class="ms-2">${post.numComments}</span>
            </div>
            <div class="flex-fill">
              <i class="fa-solid fa-retweet"></i>
              <span class="ms-2">${post.numRetweets}</span>
            </div>

            <div class="flex-fill">
              <i class="fa-regular fa-heart"></i>
              <span class="ms-2">${post.numLikes}</span>
            </div>
            <div class="flex-fill">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>  
  `;
};
export default PostItem;
