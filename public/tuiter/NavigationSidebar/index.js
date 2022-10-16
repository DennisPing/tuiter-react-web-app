const NavigationSidebar = () => {
  return `
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="../home.html" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-house-chimney"></i><span class="mx-2 d-none d-xl-inline-block">Home</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action active">
            <i class="fa-solid fa-hashtag"></i><span class="mx-2 d-none d-xl-inline-block">Explore</span>
        </a>
        <a href="../notifications.html" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bell"></i><span class="mx-2 d-none d-xl-inline-block">Notifications</span>
        </a>
        <a href="../messages.html" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-envelope"></i><span class="mx-2 d-none d-xl-inline-block">Messages</span>
        </a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bookmark"></i><span class="mx-2 d-none d-xl-inline-block">Bookmarks</span>
        </a>
        <a href="../lists.html" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-list-ul"></i><span class="mx-2 d-none d-xl-inline-block">Lists</span>
        </a>
        <a href="../profile.html" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-user"></i><span class="mx-2 d-none d-xl-inline-block">Profile</span>
        </a>
        <a href="../more.html" class="list-group-item list-group-item-action">
            <span class="fa-stack wd-stacked-icon">
                <i class="fa-regular fa-circle fa-stack-1x"></i>
                <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse fa-sm"></i>
            </span>
            <span class="mx-2 d-none d-xl-inline-block">More</span>
        </a>
      </div>
      <div class="d-grid mt-2">
        <a href="../tuit.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `;
};
export default NavigationSidebar;

$("#wd-nav-sidebar").append(`
    <div class="container">
        ${NavigationSidebar()}
    </div>
`);
