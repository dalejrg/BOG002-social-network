import { reset } from "./Utils.js";

export function editProfile () {
  reset();
  const template = document.createElement("div");
  template.setAttribute("id", "home");
  template.insertAdjacentHTML(
    "afterbegin",
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
<div id="container" class="edits">
    <div class="edit">
    <label id="labelPost">
    <button id="btnArrow"><img id="arrow" 
    src = "./assets/post-arrow.svg"></button> Edit Profile </label>
    <div class="labelEdit">
    <input type = "file" id = "file" hidden>
    <label for="file" id = "labelEditImage">
    <img id="uploadProfile" src = "./assets/logo-image.svg"> </label>
    </div>
    <div class="form_styles">
        <label for="text">Full name</label>
        <input type="text" id="name" required/>
        <div class="input__indicator"></div>
    </div>     
    <div class="form_styles">    
        <label for="text">Biography</label>
        <input type="text" id="bio" required/>
        <div class="input__indicator"></div> 
    </div>
    <button id = "saveChanges" class="button_general" > Save Changes </button>
    </div>
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
          <a href="#/"><img class="logo-Profile" src=./assets/Profile.svg alt="arrow"></a>
        </div>
    </footer>
    `
  );
  return template;
}

export function menuHam() {
    const nav = document.querySelector("#hamburger_menu button");
    const menuppal = document.querySelector(".menuppal");
    nav.addEventListener("click", (e) => {
      homeListener(nav);
      menuPrincipal(menuppal);
    });
}