import React from "react";
import InfoLibroComponents from "../components/InfoLibroComponents";
import DondeComprarLibroComponent from "../components/DondeComrarLibroComponent";
import ResenyaLibroComponent from "../components/ResenyaLibroComponent";
import libro from "../data/infoFromApi";
import RecomendacionesLibroComponent from "../components/RecomendacionesLibroComponent";
import MasInfoLibroComponent from "../components/MasInfoLibroComponent";

const InfoLibroPage = () => {
  const numeroResenyas = libro.reviews.length;
  return (
    <>
      <div>
        <h1>Pagina de detalles de un libro</h1>
      </div>
      <hr />
      <InfoLibroComponents
        ejemplo1={"Paso un parametro por props"}
        infoLibro={libro.info}
      />
      <hr />
      <DondeComprarLibroComponent
        ejemplo1={"Paso un parametro por props"}
        listaTiendas={libro.tiendas}
      />

      <hr />
      <ResenyaLibroComponent
        ejemplo1={"Paso un parametro por props"}
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
