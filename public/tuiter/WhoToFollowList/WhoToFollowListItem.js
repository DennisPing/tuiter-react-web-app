const WhoToFollowListItem = (who) => {
  return `
    <a href="#" class="list-group-item list-group-item-action px-2">
        <div class="row">
            <div class="col-2 align-self-center">
                <img src=${who.avatarIcon} class="img-fluid rounded-circle">
            </div>
            <div class="col-6 px-0 text-nowrap">
                <div>
                    <span>${who.userName}</span>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div>@${who.handle}</div>
            </div>
            <div class="col-4 align-self-center">
                <button class="btn btn-primary rounded-pill float-end">Follow</button>
            </div>
        </div>
    </a>
    `;
};
export default WhoToFollowListItem;
