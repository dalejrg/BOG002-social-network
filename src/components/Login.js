export function Login() {

    const login = document.createElement("div")
        //console.log("soy filtro");
    login.innerHTML = `<h1> I'm Login </h1> 
    <div id="form-container">
            <h1 class="login-tittle">Login</h1>
            <div class="form">
              <form action=" " autocomplete="off">
                <div>
                  <label for="email">Email address</label>
                  <input type="email" required id="email"/>
                </div>  
                <div>
                  <label for="password">Password</label>
                  <input type="password" required id="password"/>
                </div> 
                <div class="button">
                  <button type="submit">Ingresar</button>
                </div>
              </form>
              <span>or register with</span>
              <div class="social">
              </div>
            </div>
          </div>`

    return login;
}