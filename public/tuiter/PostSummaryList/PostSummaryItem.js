const PostSummaryItem = (post) => {
  return `
    <li class="list-group-item">
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
        </div>
        <div class="col-3 col-md-2 align-self-center">
            <img src=${post.image} class="rounded-3 float-end" height="80px">
        </div>
    </div>
    </li>
    `;
};
export default PostSummaryItem;
