import React from "react";
import InfoLibroComponents from "../components/InfoLibroComponents";
import DondeComprarLibroComponent from "../components/DondeComprarLibroComponent";
import ResenyaLibroComponent from "../components/ResenyaLibroComponent";
import libro from "../data/infoFromApi";
import RecomendacionesLibroComponent from "../components/RecomendacionesLibroComponent";
import MasInfoLibroComponent from "../components/MasInfoLibroComponent";
import ResumenLibroComponent from "../components/ResumenLibroComponent";

const InfoLibroPage = () => {
  const numeroResenyas = libro.reviews.length;
  const resumenLibro = {
     titulo: 'Mi libro de React',
     autor: 'Alejandro García',
     anio: 2024,
     paginas: 320,
     genero: 'Tecnología'
   }
  
  return (
    <>
      <div>
        <h1>Pagina de detalles de un libro</h1>
      </div>
      <hr />
      <InfoLibroComponents
        
        infoLibro={libro.info}
      />
      <hr />

      <ResumenLibroComponent 
      resumen={resumenLibro}/>
      <hr />

      <DondeComprarLibroComponent
       
        listaTiendas={libro.tiendas}
      />

      <hr />
      <ResenyaLibroComponent
        
        reviewList={libro.reviews}
        numeroResenyas={numeroResenyas}
        tituloSeccion={"Opiniones de los lectores"}
      />
      <hr />
      <RecomendacionesLibroComponent
        ejemplo1={"Paso un parametro por props"}
        recomendaciones={libro.recomendaciones}
      />
      <hr />
      <MasInfoLibroComponent />
    </>
  );
};

export default InfoLibroPage;
