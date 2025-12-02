import "./App.css";
import CabeceraTiendaComponent from "./components/CabeceraTiendaComponent";
/*
RECORDATORIO FUNCIONES ARROW
const myFn =()=>10;
const myFn2 =()=> {return 10}
*/

function App() {
  const shoptitle = "La primera libreria de Alejandro de ReactJS";
  const data = [
    {
      id: 1,
      title: "Libro 1",
      description: "Descripcion del libro 1",
      price: 10,
      IVA: 2,
      premium: true,
    },
    {
      id: 2,
      title: "Libro 2",
      description: "Descripcion del libro 2",
      price: 15,
      IVA: 2,
      premium: false,
    },
    {
      id: 3,
      title: "Libro 3",
      description: "Descripcion del libro 3",
      price: 20,
      IVA: 2,
      premium: true,
    },
    {
      id: 4,
      title: "Libro 4",
      description: "Descripcion del libro 4",
      price: 20,
      IVA: 4,
      premium: false,
    },
  ];

  return (
    <>
  <CabeceraTiendaComponent/>
      
      <div>
        {data.map((elem, idx) => (
          <div key={idx}>
            <p>Ttile: {elem.title}</p>
            <p>Description {elem.description}</p>
            <p>Price {elem.price}</p>
            <p>Premium {elem.premium}</p>
            <p>Precio total con IVA {elem.price+elem.IVA}</p>
            <hr />
          </div>
        ))}
      </div>
      <hr />

      <hr />

      <div>
        {data.map((elem, idx) => {
          const precioConIva = elem.price + elem.IVA;
          return (
            <div key={idx}>
              <p>Ttile: {elem.title}</p>
              <p>Description {elem.description}</p>
              <p>Price with IVA {precioConIva}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
