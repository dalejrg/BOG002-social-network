//import { sendMessages } from "../Firebase/Storage.js";
import { reset } from "./Utils.js"

export function Chat() {
    reset();
    const templateChat = document.createElement("div");
    const userMessage = document.querySelector('#userMessage');
    const destinataryMessage = document.querySelector('#destinataryMessage');
    //const preview = userMessage.innerHTML;
    //const preview2 = destinataryMessage.innerHTML;
    templateChat.setAttribute("id", "home");
    templateChat.insertAdjacentHTML(
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
    <div id="container" class="chating">
        <label id="labelChat"><a href="#/home">
        <button id="btnArrow"><img id="arrow" src = "./assets/post-arrow.svg"></button></a> Chat </label>
    <div class="chats">
    <div class="containerChats">
    <div class="messagePride">#Community Pride.</div>
        <main id="protectedContent">

        </main>
    </div>    
    </div>
    <form class="inputSend" id="formSend">
        <div class= "wrapChat">
        <input type="text" placeholder = "Write your message" class= "inputChat" id="inputMessage">
        <input type="submit" class="sendChat" id="btnSend" value="Send">
        </div>
    </form>
    </div>
    <footer class="navBar">
        <div>
          <a href="#/home"><img class="logo-Home" src=./assets/Home.svg alt="arrow"></a>
        </div>
        <div>
          <a href="#/post"><img class="logo-Post" src=./assets/Post.svg alt="arrow"></a>
        </div>
        <div>
          <a href="#/chat"><img class="logo-Profile" id="chatLogo" src=./assets/inbox.svg alt="arrow"></a>
        </div>
    </footer>`
    );
    return templateChat;
}

export function menuHam() {
    const nav = document.querySelector("#hamburger_menu button");
    const menuppal = document.querySelector(".menuppal");
    nav.addEventListener("click", (e) => {
        homeListener(nav);
        menuPrincipal(menuppal);
    });
}

