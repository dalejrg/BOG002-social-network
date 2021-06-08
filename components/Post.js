import { reset, homeListener, menuPrincipal } from './Utils.js';
import { savePost } from '../Firebase/Storage.js';
import { signOut } from '../Firebase/Services.js';

export function Post() {
  reset();
  const templatePost = document.createElement('div');
  templatePost.setAttribute('id', 'home');
  templatePost.insertAdjacentHTML(
    'afterbegin',
    `<header class="headerHome">
      <div>
        <img class="logoHome" src="./assets/LogoHome.svg" alt="Gleam logo">
      </div>
      <div id="hamburger_menu">
        <button>
          <span class="top_line"></span>
          <span class="middle_line"></span>
          <span class="bottom_line"></span>
        </button>
      </div>
      <nav class="menuppal">
        <ul>
        <li>
        <a href="#/editprofile">
        <button class="button_general">
        <img class="logo-Post" src=./assets/edit-icon.svg alt="arrow">
        Edit Profile</button></a>
      </li>
      <li>
        <button id="signOut" class="button_general">
        <img class="logo-Post" src=./assets/logout-icon.svg alt="arrow">
        Log Out</button>
      </li>
        </ul>
      </nav>
    </header>
    <div id="container" class="posts">
    <div class="posts"> 
        <label id="labelPost"><a href="#/home">
        <button id="btnArrow"><img id="arrow" src = "./assets/post-arrow.svg"></button></a> Post </label>
        <input type = "file" id = "file" hidden>
        <label for="file" id = "labelImage"> <img id="upload" src = "./assets/logo-image.svg"> Upload Image </label>
        <textarea  placeholder = "Tell us what you have in mind …" id = "addText"></textarea>
        <button id = "addPost" class="button_general" > Add Post </button>
    </div>
    </div>
    <footer class="navBar">
        <div>
          <a href="#/home"><img class="logo-Home" src=./assets/Home.svg alt="arrow"></a>
        </div>
        <div>
          <a href="#/post"><img class="logo-Post" src=./assets/Post.svg alt="arrow"></a>
        </div>
        <div>
          <a href="#/chat"><img class="logo-Profile" src=./assets/inbox.svg alt="arrow"></a>
        </div>
    </footer>`,
  );
  return templatePost;
}

export function menuHam() {
  const nav = document.querySelector('#hamburger_menu button');
  const menuppal = document.querySelector('.menuppal');
  nav.addEventListener('click', () => {
    homeListener(nav);
    menuPrincipal(menuppal);
  });
}

export function postFb() {
  // Preview Image
  const inputFile = document.querySelector('#file');
  const image = document.querySelector('#upload');
  image.setAttribute('class', 'imgUpload');
  inputFile.onchange = (e) => {
    e.preventDefault();
    const [file] = inputFile.files;
    if (file) {
      image.src = URL.createObjectURL(file);
    }
  };
  // Add Post
  const addPost = document.querySelector('#addPost');
  addPost.addEventListener('click', () => {
    const file = document.querySelector('#file').files[0];
    const text = document.querySelector('#addText').value;
    const auth = firebase.auth();
    const idUser = auth.currentUser.uid;
    const userName = auth.currentUser.displayName;
    savePost(file, text, idUser, userName);
    setTimeout(() => {
      window.location.assign('#/home');
    }, 2000);
  });
}
export function userOutPost() {
  const logOut = document.querySelector('#signOut');
  logOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
  });
}
