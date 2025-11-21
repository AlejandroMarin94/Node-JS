import "./style.css";
import { showData } from "./utils/functions";

const form = document.querySelector("#loguearUser");

async function getData(email, pass) {
  try {
    const urlQuery = `http://localhost:3000/query?idUser=${email}&dataSend=${pass}`
    const url = "http://localhost:3000/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": "e9swr87swe0ewfewrfewfewfwe"
      },
      body: JSON.stringify({
        email,
        pass
      }),
    }
    const res = await fetch(url, options);
    if (!res.ok) throw new Error("Fallo al realizar la peticion");
    const response = await res.json();
    showData(response) 
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector("#emailInput");
  const passInput = document.querySelector("#passInput");

  const email = emailInput.value;
  const pass = passInput.value;

  getData(email, pass);
});
