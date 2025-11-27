const 
//EJEMPLO PARA EL FRONTEND

baseUrl = "http://localhost:3000/api/"


async function getAllUsers(){
    const usersUrl = `${baseUrl}users/`
    const token = localStorage.getItem("access-token")
    if(!token) throw new Error("No se ha podido obtener el token del localStorage");
    try {
        const response = await fetch(usersUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            "auth-token": token}
        })
    } catch (error) {
        console.log("Error", error.message);
        
        
    }
}