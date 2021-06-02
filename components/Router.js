import { Loading } from "./Loading.js";
import { Landing, random } from "./Landing.js";
import { Register, addUser } from "./Register.js";
<<<<<<< HEAD
import { Home, menu, renderPosts } from "./Home.js";
import { Login, logInUser } from "./Login.js";
import { Post, menuHam, postFb } from "./Post.js";
=======
import { Home, menu, userOut } from "./Home.js";
import { Login, logInUser } from "./Login.js";
import { Post, menuHam, postFb, userOutPost } from "./Post.js";
>>>>>>> 47e597556f6668ffbf80cfda1911cb70fa43dac9
import { Password, recoverPassword } from "./Password.js";
import { getPost, sendMessages } from "../Firebase/Storage.js";
import { editProfile } from "./editProfile.js";
import { Chat } from "./Chat.js";




export function Router() {
<<<<<<< HEAD
  const { hash } = location;
  const root = document.querySelector("#template");
  switch (hash) {
    case "":
    case "#/":
      root.appendChild(Loading());
      break;
    case "#/landing":
      root.appendChild(Landing());
      random();
      break;
    case "#/register":
      root.appendChild(Register());
      addUser();
      break;
    case "#/login":
      root.appendChild(Login());
      logInUser();
      break;
    case "#/home":
      root.appendChild(Home());
      renderPosts();
      // userOut();
      menu();
      break;
    case "#/post":
      root.appendChild(Post());
      menuHam();
      postFb();
      break;
    default:
      break;
    case "#/password":
      root.appendChild(Password());
      recoverPassword();
      break;
  }
}
=======
    const { hash } = location;
    const root = document.querySelector("#template");
    switch (hash) {
        case "":
        case "#/":
            root.appendChild(Loading());
            break;
        case "#/landing":
            root.appendChild(Landing());
            random();
            break;
        case "#/register":
            root.appendChild(Register());
            addUser();
            break;
        case "#/login":
            root.appendChild(Login());
            logInUser();
            break;
        case "#/home":
            root.appendChild(Home());
            getPost();
            userOut();
            menu();
            break;
        case "#/post":
            root.appendChild(Post());
            menuHam();
            postFb();
            userOutPost();
            break;
        case "#/editprofile":
            root.appendChild(editProfile());
            menuHam();
            break;
        case "#/chat":
            root.appendChild(Chat());
            menuHam();
            sendMessages();
            break;
        default:
            break;
        case "#/password":
            root.appendChild(Password());
            recoverPassword();
            break;
    }
}
>>>>>>> 47e597556f6668ffbf80cfda1911cb70fa43dac9
