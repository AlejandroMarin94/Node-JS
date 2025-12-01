import { createUserLogged, logOut, showUsers } from "../utils/functions";
import { apiConfig } from "./apiConfig";

export async function loginUser(email, password) {
  try {
    const response = await fetch(apiConfig.loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) throw new Error("Error al realizar el login");
    const dataLoginreponse = await response.json();
    //data: returnUser, token, token_refresh
    if (dataLoginreponse.status === "Success") {
      localStorage.setItem("userData", JSON.stringify(dataLoginreponse.data));
      localStorage.setItem("token", dataLoginreponse.token);
      localStorage.setItem("token_refresh", dataLoginreponse.token_refresh);
    }
    console.log("Login normal. Data: ", dataLoginreponse);
    createUserLogged(dataLoginreponse.data.name, true);
  } catch (error) {
    console.log("Se ha producido un error: ", error);
  }
}

export async function tokenLoggin(token) {
  try {
    console.log("Auto login con Token");
    const response = await fetch(apiConfig.autoLoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    if (!response.ok) throw new Error("Error al realizar el login");
    const dataResponse = await response.json();
    if (dataResponse.status === "Success") {
      console.log("Login with token ok");
      localStorage.setItem("userData", JSON.stringify(dataResponse.data));
    }
    createUserLogged(dataResponse.data.name, false);
  } catch (error) {
    try {
      const token_refresh = localStorage.getItem("token_refresh");
      // Voy a regenerar mi token usando el token_refresh y despues
      // intento logear de nuevo con mi nuevo token.
      console.log("Auto login con regeneracion del token");
      if (!token_refresh) throw new Error("No se encuentra el token necesario");
      const response = await fetch(apiConfig.refreshtokenUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token_refresh,
        },
      });
      if (!response.ok) throw new Error("Error al realizxar el refresh token");
      const dataResponse = await response.json();
      if (dataResponse.status === "Success") {
        console.log("Token regenerado con exito.");
        localStorage.setItem("token", dataResponse.token);
        tokenLoggin(dataResponse.token, false);
      }
    } catch (error) {
      console.log(
        "Se ha producido un error al intentar logear con token: ",
        error.message
      );
      logOut();
    }
  }
}

export async function getAllusers() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(apiConfig.getAllUsersUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    if (!response.ok) throw new Error("Error al traer los usuarios");
    const dataResponse = await response.json();
   showUsers(dataResponse.data)
   
  } catch (error) {
    console.log("No se han encontrado los usuarios", error);
    
  }
}
