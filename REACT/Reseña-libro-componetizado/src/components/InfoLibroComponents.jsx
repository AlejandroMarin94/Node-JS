import React from "react";

function InfoLibroComponents() {
  const infolibro = {
    ISBN: "cfdea9bc-616a-4e4b-8e61-ea74d4c9a4d4",
    author: "Alejandro García",
    title: "Leyendas de Codespace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?",
  };
  return (
    <div>
      <h2>Informacion del libro</h2>
      <div>
        <p>Title: {infolibro.title}</p>
        <p>ISBN: {infolibro.ISBN}</p>
        <p>Autor: {infolibro.author}</p>
        <p>Description: {infolibro.description}</p>
      </div>
    </div>
  );
}

export default InfoLibroComponents;
