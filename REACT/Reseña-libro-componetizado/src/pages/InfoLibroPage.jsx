import React from "react";
import InfoLibroComponents from "../components/InfoLibroComponents";
import DondeComprarLibroComponent from "../components/DondeComrarLibroComponent";
import { ResenyaLibroComponent } from "../components/ResenyaLibroComponent";

const InfoLibroPage = () => {
  return (
    <>
      <div>
        <h1>Pagina de detalles de un libro</h1>
      </div>
      <hr />
      <InfoLibroComponents />
      <hr />
      <DondeComprarLibroComponent />
      <hr />
      <ResenyaLibroComponent />
    </>
  );
};

export default InfoLibroPage;
