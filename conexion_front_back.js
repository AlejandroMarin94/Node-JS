async function callApi(method, url, data = null) {
  try {
    return await makeAuthorizedRequest(method, url, data);
  } catch (error) {
    if (error.status === 401) {
      try {
        await refreshToken();
        return await makeAuthorizedRequest(method, url, data);
      } catch (refreshError) {
        throw refreshError;
      }
    }
    throw error;
  }
}

async function makeAuthorizedRequest(method, url, data = null) {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("Token no existe");
  const headers = { "Content-Type": "application/json", "auth-token": token };
  const response = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  });
  if (!response.ok) {
    const error = new Error("Error en la peticiÃ³n");
    error.status = response.status;
    throw error;
  }
  return response.json();
}

async function refreshToken() {
  const refresh = localStorage.getItem("refresh_token");
  if (!refresh) throw new Error("Token de resfresco no existe");
  const urlLogin = apiConfig.baseUrl;
  try {
    const renoveTokens = await fetch(urlLogin, {
      method: "GET",
      headers: { "Content-Type": "application/json", "auth-token": refresh },
    });
    const dataTokens = await renoveTokens.json();
    if (dataTokens) {
      // SAVE DATA TO LOCAL STORAGE
      localStorage.setItem("token", dataTokens.token);
      localStorage.setItem("token_refresh", dataTokens.token_refresh);
    }
  } catch (error) {
    if (error.status === 401) {
      console.error(error.message);
    }
  }
}

// Codigo de ejemplo para entender la similitud con la forma de hacerlo en una funcion para cada peticion
const url = "http://localhost:3000/api/user/"
const newUser = { name: "Alejandro", lastName: "GarcÃ­a"}
const dataDesdeAPI = peticionApiAutentificada("POST", url, newUser)

/**
 *
 * @param {*} method //GET, POST, PUT, PATCH, DELETE
 * @param {*} url // Url de nuestro endpoint apra la API
 * @param {*} data // Body de la peticion, podrÃ¡ ir o no
 */
async function peticionApiAutentificada(methodAPI, urlAPI, dataAPI = null) {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) throw new Error("Token no existe");
    // 1. Peticion  fetch a la api
    const response = await fetch(urlAPI, {
      method: methodAPI,
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: dataAPI ? JSON.stringify(dataAPI) : null,
    });
    if (!response.ok) {
      const error = new Error("Error en la peticiÃ³n");
      error.status = response.status;
      throw error;
    }
    return await response.json()
  } catch (error) {
    console.log(error.status, error.message);
  }
}