// Function called WhoToFollowListItem that takes argument 'who'
const WhoToFollowListItem = () => {
  return `
    <ul class="list-group rounded-3">
        <li class="list-group-item fw-bold">Who to follow</li>
        <a href="#" class="list-group-item list-group-item-action px-2">
            <div class="row">
                <div class="col-2 align-self-center">
                    <img src="https://mushucdn.b-cdn.net/java-logo.png" class="img-fluid rounded-circle">
                </div>
                <div class="col-6 px-0 text-nowrap">
                    <div>
                        <span>Java</span>
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="text-secondary">@Java</div>
                </div>
                <div class="col-4 align-self-center">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </a>
        <a href="#" class=" list-group-item list-group-item-action px-2">
            <div class="row">
                <div class="col-2 align-self-center">
                    <img src="https://mushucdn.b-cdn.net/relativity-space-logo.webp"
                        class="img-fluid rounded-circle">
                </div>
                <div class="col-6 px-0 text-nowrap">
                    <div>
                        <span>Relativity Space</span>
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="text-secondary">@RelativitySpace</div>
                </div>
                <div class="col-4 align-self-center">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action px-2">
            <div class="row">
                <div class="col-2 align-self-center">
                    <img src="https://mushucdn.b-cdn.net/virgin-galactic.svg"
                        class="img-fluid rounded-circle">
                </div>
                <div class="col-6 px-0 text-nowrap">
                    <div>
                        <span>Virgin Galactic</span>
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="text-secondary">@VirginGalactic</div>
                </div>
                <div class="col-4 align-self-center">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action px-2">
            <div class="row">
                <div class="col-2 align-self-center">
                    <img src="https://mushucdn.b-cdn.net/nasa-logo.png" class="img-fluid rounded-circle">
                </div>
                <div class="col-6 px-0 text-nowrap">
                    <div>
                        <span>NASA</span>
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="text-secondary">@NASA</div>
                </div>
                <div class="col-4 align-self-center">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action px-2">
            <div class="row">
                <div class="col-2 align-self-center">
                    <img src="https://mushucdn.b-cdn.net/tesla-logo.png" class="img-fluid rounded-circle">
                </div>
                <div class="col-6 px-0 text-nowrap">
                    <div>
                        <span>Tesla</span>
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="text-secondary">@Tesla</div>
                </div>
                <div class="col-4 align-self-center">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="text-primary">Show more</div>
        </a>
    </ul>
    `;
};
export default WhoToFollowListItem;

$("#wd-follow-sidebar").append(`
    <div class="container">
        ${WhoToFollowListItem()}
    </div>
`);
