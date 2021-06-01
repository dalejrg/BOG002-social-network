import { deleteObjPost, updateObjPost, likeObjPost } from "../Firebase/Storage.js"


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

export function cleanChat() {
    const containerChat = document.querySelector("#inputMessage");
    if (containerChat) {
        containerChat.value = "";
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



const auth = firebase.auth();
export function renderPost(doc) {
    const containerPost = document.querySelector("#render");
    const div = document.createElement("div")
        //const previewHTML = containerPost.innerHTML;
    div.insertAdjacentHTML("afterbegin",
        `<div class="newPost">
    <div class="headerPost">
    <div class="user">
    <div class="name">${doc.name}</div>
    <div class="timePost">${(new Date(doc.date.seconds * 1000)).toLocaleDateString('es-CO')}</div>
    </div>
    
    <div>
        <button id="more-btn" class="more-btn-${doc.id}">
            <span class="more-dot"></span>
            <span class="more-dot"></span>
            <span class="more-dot"></span>
        </button>
    </div>

    <nav id="optionPost" class="optionPost">
        <ul>
            <li><button class="button_general" id="editPost-${doc.id}">Edit</button></li>
            <li><button class="button_general" id="deletePost-${doc.id}">Delete</button></li>
        </ul>
    </nav>
    </div>

    <div><img class="imgPost" src= ${doc.image}></div>

    <div class="socialPost">
    <div class="likeP">
    <button class="btn-like" id="like-${doc.id}"><img class="default-like" src=./assets/like.svg></button>
    <p class="counter">${doc.likesCount}</p>
    </div>
    <button class="btn-share"><img class="share" src=./assets/share.svg></button>
    <div class="likeCounter">
    <div><img class="liked-${doc.id}" src=./assets/gleamLike.svg alt="liked"></div>
    </div>
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
`)
    containerPost.appendChild(div);
    // ${previewHTML}

    // const btnDots = document.querySelector("#more-btn");
    // const menu = document.querySelector(".optionPost");
    // btnDots.addEventListener("click", () => {
    //     menuPrincipal(menu)
    // });

    containerPost.addEventListener('click', e => {
        const popUp = document.querySelector(".optionPost");
        if (e.target.classList.contains(`more-btn-${doc.id}`)) {
            popUp.style.display = 'block'
            console.log("traeme la clase")
        }
    })


    //Liked post 
    const btnLike = document.querySelector(`#like-${doc.id}`)
    const likedIcon = document.querySelector(`.liked-${doc.id}`)
    likedIcon.style.display = 'none'
    btnLike.addEventListener('click', () => {
        likedIcon.style.display = 'block'
        setTimeout(() => {
            const incrementer = firebase.firestore.FieldValue.increment(1)
            likeObjPost(`${doc.id}`, incrementer)
        }, 1000);
    });

    //Update post
    const edit = document.querySelector(`#editPost-${doc.id}`);
    const editPost = document.querySelector('.formPost')
    const editText = document.querySelector('.inputPost')
    const savePost = document.querySelector('.savePost')
    const p = document.querySelector('.textPost');
    edit.addEventListener('click', () => {
        editPost.style.display = 'block'
        editText.setAttribute('placeholder', `${doc.description}`)
        p.style.display = 'none'
        savePost.addEventListener('click', () => {
            const userId = auth.currentUser.uid;
            const editedText = document.querySelector('.inputPost').value;
            if (userId === doc.idUser) {
                updateObjPost(`${doc.id}`, editedText);
            } else { console.error('tu no publicaste este post') }
        })

    });

    //Delete post
    const deletePost = document.querySelector(`#deletePost-${doc.id}`)
    deletePost.addEventListener('click', () => {
        const idUser = auth.currentUser.uid;
        if (doc.idUser === idUser) {
            deleteObjPost(`${doc.id}`);
        } else { console.error('tu no publicaste este post') }
    })
}