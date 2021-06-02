<<<<<<< HEAD
import { reset, homeListener, menuPrincipal, renderPost } from "./Utils.js";
// import { signOut } from "../Firebase/Services.js";
=======
import { reset, homeListener, menuPrincipal } from "./Utils.js";
import { signOut } from "../Firebase/Services.js";

/*const renderEachPost = (templateElement) => {
    const timeline = templateElement.dataset.timeline;
    const timelineData = JSON.parse(timeline);
    timelineData.forEach((post) => {
        renderPost(post);
    });
};

export const renderPosts = async() => {
    const templateApp = document.querySelector("#template");
    const timeline = templateApp.dataset.timeline;

    if (timeline) {
        renderEachPost(templateApp);
    } else {
        setTimeout(() => {
            renderEachPost(templateApp);
        }, 3000);
    }
};*/
>>>>>>> 47e597556f6668ffbf80cfda1911cb70fa43dac9

const renderEachPost = (templateElement) => {
  const timeline = templateElement.dataset.timeline;
  const timelineData = JSON.parse(timeline);
  timelineData.forEach((post) => {
    renderPost(post);
  });
};

export const renderPosts = async () => {
  const templateApp = document.querySelector("#template");
  const timeline = templateApp.dataset.timeline;

  if (timeline) {
    renderEachPost(templateApp);
  } else {
    setTimeout(() => {
      renderEachPost(templateApp);
    }, 3000);
  }
};

export function Home() {
<<<<<<< HEAD
  reset();

  const template = document.createElement("div");
  template.setAttribute("id", "home");
  template.insertAdjacentHTML(
    "afterbegin",
    `<header class="headerHome">
=======
    reset();
    const template = document.createElement("div");
    template.setAttribute("id", "home");
    template.insertAdjacentHTML(
        "afterbegin",
        `<header class="headerHome">
>>>>>>> 47e597556f6668ffbf80cfda1911cb70fa43dac9
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
  <div id="render"></div>
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
    </footer>
    `
    );
    return template;
}

export function menu() {
    const nav = document.querySelector("#hamburger_menu button");
    const menuppal = document.querySelector(".menuppal");
    nav.addEventListener("click", (e) => {
        homeListener(nav);
        menuPrincipal(menuppal);
    });
}
<<<<<<< HEAD

/*db.collection("usersPost").onSnapshot()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                renderPost(doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}


/*<div class="btns-container-mobile">
          <button id="signOut" class="button_general">LogOut</button>
        </div>*/
=======
>>>>>>> 47e597556f6668ffbf80cfda1911cb70fa43dac9

export function userOut() {
    const logOut = document.querySelector("#signOut");
    logOut.addEventListener("click", (e) => {
        e.preventDefault();
        signOut();
    });
}