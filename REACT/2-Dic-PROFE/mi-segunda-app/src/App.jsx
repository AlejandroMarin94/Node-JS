import "./App.css";
import CabeceraTiendaComponent from "./components/CabeceraTiendaComponent";

/*
  Para pintar variables o constantes de JS en nuestro código HTML en un archivo JSX(ReactJS) vamos a utilizar las {} (llaves).
  Para todo lo que tengamos que escribir como Javascript dentro del código HTML, este contenido debe estar 'rodeado' entre {...}


  IMPORTANTE: React en el HTML solo entiende o más HTML(bien estructurado, es decir, con un único padre) o texto.


  Funciones de autoretorno en Javascript aquellas que están entre paréntesis ()
  const myFn = () => (10)
  const myFn2 = () => { return 10}
*/

function App() {
  //const tituloTienda = "Mi tienda personal.";
  // Ejercicio 8
  const tituloTienda = "Librería React de Alejandro";

  //data es un constante de Javascript
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
    // Ejercicio 5
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
      <div>
        {/*<h1>{tituloTienda}</h1>*/}
        <CabeceraTiendaComponent/>
      </div>
      <div>
        {
          //Por cada elemento del array, gracias al map, ReactJS nos va a pintar lo que pongamos a la derecha de la flecha (=> ...)
          data.map((e) => (
            <div>
              <p>Title: {e.title}</p>
              <p>Descr: {e.description}</p>
              <p>Price: {e.price}</p>
              {/* Ejercicio 7 */}
              <p>Precio total (con IVA): {e.price + e.IVA}</p>
              {/* Ejercicio 6 */}
              <p>Premium: {e.premium ? 'Sí' : 'No'}</p>
              <hr />
            </div>
          ))

          // Dejamos el ejemplo por aquí de cuando usar las llaves para hacer el retorno.
          // data.map(e => {
          // const precioBruto = e.price + e.IVA
          // return <div>
          //     <p>Title: {e.title}</p>
          //     <p>Descr: {e.description}</p>
          //     <p>Price: {precioBruto}</p>
          //     <hr />
          //   </div>
          // })
        }
      </div>
    </>
  );
}

export default App;
