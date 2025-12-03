import React from "react";

function InfoLibroComponents(props) {

  const {infoLibro}=props
  
  return (
    <div>
      <h2>Informacion del libro</h2>
      <div>
        <p>Title: {infoLibro.title}</p>
        <p>ISBN: {infoLibro.ISBN}</p>
        <p>Autor: {infoLibro.author}</p>
        <p>Description: {infoLibro.description}</p>
      </div>
    </div>
  );
}

export default InfoLibroComponents;
