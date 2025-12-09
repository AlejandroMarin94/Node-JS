import "./App.css";
import { useEffect } from "react";
import getUser from "./services/userFetch";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const aux = getUser();
    setUsers(aux);
  }, []);

  return (
    <>
      {!users ? (
        <div>Cargando datos de los usuarios</div>
      ) : (
        <>
          <h1>Usuarios</h1>
          {users.map((u) => (
            <li key={users.id}>{u.name}</li>
          ))}
        </>
      )}
    </>
  );
}

export default App;
