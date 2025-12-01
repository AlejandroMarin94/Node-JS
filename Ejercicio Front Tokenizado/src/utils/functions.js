import { getAllusers, loginUser } from "../apiFetch/api";

const appElement = document.querySelector("#app");

function createLoginPage() {
  const formElement = document.createElement("form");
  formElement.id = "form-element";

  const labelEmailElement = document.createElement("label");
  labelEmailElement.textContent = "Email";

  const inputEmailElement = document.createElement("input");
  inputEmailElement.type = "email";
  inputEmailElement.value = "alejandro.garcia@example.com"
  inputEmailElement.placeholder = "Introduzca su email";
  labelEmailElement.appendChild(inputEmailElement);

  const labelPasswordElement = document.createElement("label");
  labelPasswordElement.textContent = "Contraseña";

  const inputPasswordElement = document.createElement("input");
  inputPasswordElement.type = "password";
  inputPasswordElement.value = "1234"
  inputPasswordElement.placeholder = "Introduzca la contraseña";
  labelPasswordElement.appendChild(inputPasswordElement);

  const buttonOkElement = document.createElement("button");
  buttonOkElement.textContent = "Login";
  buttonOkElement.type = "submit";

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    loginUser(inputEmailElement.value, inputPasswordElement.value)
  });

  formElement.appendChild(labelEmailElement);
  formElement.appendChild(labelPasswordElement);
  formElement.appendChild(buttonOkElement);

  return formElement;
}

export function startLoginPage() {
  //const loginForm = createLoginPage()
  appElement.appendChild(createLoginPage());
}


export function createUserLogged(userName, alreadyLoggedNormal){

    if (alreadyLoggedNormal) {
        const loginElement = document.querySelector("#form-element")
        appElement.removeChild(loginElement)
    }

    const loggedElement = document.createElement("div")
    loggedElement.className = "logged-container"
    loggedElement.id = "logged-container"

    const textElement = document.createElement("p")
    textElement.textContent = `Bienvenido ${userName}`;

    const buttonLogout = document.createElement("button")
    buttonLogout.textContent = "LogOut"
    buttonLogout.className = "btn-logout"

    buttonLogout.addEventListener("click", () => {
        // Tengo que ahcer logout
        logOut()
    })


    const buttonGetUsers = document.createElement("button")
    buttonGetUsers.textContent = "GetUsers"
    buttonGetUsers.className = "btn-Users"

    const divUsers = document.createElement("div")
    divUsers.textContent = "PRUEBA"
    divUsers.className = "divUsers"

    


    buttonGetUsers.addEventListener("click",() =>{

      getAllusers()
    }) 



    loggedElement.appendChild(textElement)
    loggedElement.appendChild(buttonLogout)
    loggedElement.appendChild(buttonGetUsers)
    loggedElement.appendChild(divUsers)

    appElement.appendChild(loggedElement)

}

export function logOut() {
    localStorage.clear()
    location.reload()
}

export function showUsers(users){
  const ulElement= document.createElement("ul");
  users.forEach(user=>{
    const liElement = document.createElement("li");
    liElement.textContent = user.name

    ulElement.appendChild(liElement)
  })
appElement.appendChild(ulElement)
}

