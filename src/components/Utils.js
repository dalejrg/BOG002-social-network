import { deleteObjPost } from "../Firebase/Storage.js"

export function reset() {
    const template = document.querySelector("#template");
    if (template) {
        template.innerHTML = "";
    }
}

export function cleanPost() {
    const containerPost = document.querySelector("#render");
    if (containerPost) {
        containerPost.innerHTML = "";
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
    const auth = firebase.auth();
    const idUser = auth.currentUser.uid;
    const userName = auth.currentUser.displayName;
    console.log("que aparece?", userName)
    containerPost.innerHTML = `
<div class="newPost">
    <div class="headerPost">

    <div class="user">
    <div class="name">${userName}</div>
    <div class="timePost">${new Date().toLocaleDateString('es-CO')}</div>
    </div>

    <div class="options">
    <button id="dots"><img class="btn-options" src=./assets/btn-options.svg alt="options"></button>
    </div>

    <nav class="optionPost">
    <ul>
    <li><button id="editPost">Edit</button></li>
    <li><button id="deletePost-${doc.id}">Delete</button></li>
    </ul>
    </nav>

    </div>
    
    <div><img class="imgPost" src= ${doc.image}></div>
    <div class="socialPost">
    <div><img class="like" src=./assets/like.svg alt="like"></div>
    <div><img class="share" src=./assets/share.svg alt="share"></div>
    </div>
    <div><p class="textPost">${doc.description}</p></div>
    <div><input type="text" class="comment" placeholder="Write a comment"/></div>
</div>
<!-- Es una prueba -->
${previewHTML}
`;
    /*const btnDots = document.querySelector('#dots')
    btnDots.addEventListener("click", () => {
    });*/

    const edit = document.querySelector('#editPost')
    edit.addEventListener("click", () => {});

    const deletePost = document.querySelector(`#deletePost-${doc.id}`)
    deletePost.addEventListener("click", () => {
        deleteObjPost(`${doc.id}`);
    })
}