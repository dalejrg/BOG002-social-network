export function reset() {
    const template = document.querySelector("#template");
    if (template) {
        template.innerHTML = "";
    }
}

export function showPassword(input, show, hide) {
    input.type = ("type", "text");
    show.style.display = "none";
    hide.style.display = "block";
}

export function hidePassword(input, hide, show) {
    input.type = ("type", "password");
    hide.style.display = "none";
    show.style.display = "block";
}

export function homeListener(menuIcon) {
    menuIcon.classList.toggle("open");
}

export function menuPrincipal(navegator) {
    navegator.classList.toggle("is_active");
}

export function renderPost(doc) {
    const containerPost = document.querySelector("#render");
    const previewHTML = containerPost.innerHTML;
    containerPost.innerHTML = `
  <div class="newPost">
      <div class="headerPost">
      <div class="user">
      <div class="name">Username</div>
      <div class="timePost">3 hrs</div>
      </div>
      <div class="options">
      <button id="editPost"><img class="btn-options" src=./assets/btn-options.svg alt="options"></button>
      </div>
      </div>
      <div><img class="imgPost" src= ${doc.image}></div>
      <div class="social">
      <div><img class="like" src=./assets/like.svg alt="like"></div>
      <div><img class="share" src=./assets/share.svg alt="share"></div>
      </div>
      <div><p class="textPost">${doc.description}</p></div>
      <div><input type="text"  id="comment" placeholder="Write a comment"/></div>
  </div>
  ${previewHTML}
  `;
    //return containerPost
}