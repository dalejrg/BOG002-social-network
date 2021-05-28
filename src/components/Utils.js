import { deleteObjPost, updateObjPost } from "../Firebase/Storage.js"

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
    //console.log("que aparece?", userName, idUser)
    containerPost.innerHTML = `
<div class="newPost">
    <div class="headerPost">
    <div class="user">
    <div class="name">${doc.name}</div>
    <div class="timePost">${new Date().toLocaleDateString('es-CO')}</div>
    </div>
    <div class="options">
    <button id="dots"><img class="btn-options" src=./assets/btn-options.svg alt="options"></button>
    </div>
    <nav class="optionPost">
    <ul>
    <li><button id="editPost-${doc.id}">Edit</button></li>
    <li><button id="deletePost-${doc.id}">Delete</button></li>
    </ul>
    </nav>
    </div>
    <div><img class="imgPost" src= ${doc.image}></div>
    <div class="socialPost">
    <div><img class="like" src=./assets/like.svg alt="like"></div>
    <div><img class="share" src=./assets/share.svg alt="share"></div>
    </div>
    <div><p class="textPost">${doc.description}</p>
    <form class="formPost">
    <div class="wrap">
    <input type="text" class="inputPost">
    <input type="submit" class="savePost" value="Save">
    </div>
    </form>
    </div>
    <div><input type="text" class="comment" placeholder="Write a comment"/></div>
</div>
${previewHTML}
`;
    /*const btnDots = document.querySelector('#dots')
    btnDots.addEventListener("click", () => {
    });*/


    const edit = document.querySelector(`#editPost-${doc.id}`);
    const editPost = document.querySelector('.formPost')
    const editText = document.querySelector('.inputPost')
    const savePost = document.querySelector('.savePost')
    const p = document.querySelector(".textPost");
    edit.addEventListener("click", () => {
        editPost.style.display = "block"
        editText.setAttribute("placeholder", `${doc.description}`)
        p.style.display = "none"
    savePost.addEventListener("click", ()=> {
        const userId = auth.currentUser.uid;
        console.log(doc.idUser)
        console.log(userId)
        if (userId === doc.idUser) {
            updateObjPost(`${doc.id}`, `${doc.description}`);
        } else { console.error("tu no publicaste este post") }
    })
    
    });



    //Delete post
    const deletePost = document.querySelector(`#deletePost-${doc.id}`)
    deletePost.addEventListener("click", () => {
        const idUser = auth.currentUser.uid;
        if (doc.idUser === idUser) {
            deleteObjPost(`${doc.id}`);
        } else { console.error("tu no publicaste este post") }
    })

    
        
}