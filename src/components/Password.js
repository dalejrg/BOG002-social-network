import { reset } from "./Utils.js";
import { recover } from "../Firebase/Services.js";

export function Password() {
  reset();
  const templateForgot = document.createElement("div");
  templateForgot.setAttribute("class", "bg-recover");
  templateForgot.innerHTML = ` 
  <div class="container">
    <a href="#/"><img class="back" src=./assets/back.svg alt="arrow"></a>
    <h1 class="register-tittle"> Recover Password </h1>
  </div>
    <div id="form-container">
    <div class="form">
        <p class="recover">Enter your email address to recover your password</p>
              <form action=" " autocomplete="off" id="formRegister">
                <div class="form_styles">
                  <label for="email">Email address</label>
                  <input type="email"  id="email"/>
                  <div class="input__indicator"></div>
                </div> 
                <div class="button">
                  <button id="recoveryPassword" class="button_general">Recover Password</button>
                </div>
              </form>
            </div>`;
  //   templateForgot.insertAdjacentHTML(
  //     "afterbegin",
  //     `
  //             <div id="textRecover">
  //             <h1> Recover Your Password </h1>
  //             </div>
  //             <p> Enter your email address to recover your password. </p>
  //             <input type="email" id="recoveryEmail" placeholder="Email Address">
  //             <button id="recoveryPassword" class"button_general"> Recover Password </button>
  //             <a href="#/login"> Sign In </a>
  //         </div>`
  //   );
  return templateForgot;
}

export function recoverPassword() {
  const btnRecovery = document.querySelector("#recoveryPassword");
  btnRecovery.addEventListener("click", (e) => {
    e.preventDefault();
    const recoveryEmail = document.querySelector("#recoveryEmail").value;
    recover(recoveryEmail);
  });
}
