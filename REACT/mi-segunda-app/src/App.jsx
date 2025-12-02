import "./App.css";
/*
RECORDATORIO FUNCIONES ARROW
const myFn =()=>10;
const myFn2 =()=> {return 10}
*/

function App() {
  const shoptitle = "Mi primera libreria en reactJS";
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
  ];

  return (
    <>
      <div>
        <h1>{shoptitle}</h1>
      </div>
      <div>
        {data.map((elem, idx) => (
          <div key={idx}>
            <p>Ttile: {elem.title}</p>
            <p>Description {elem.description}</p>
            <p>Price {elem.price}</p>
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
