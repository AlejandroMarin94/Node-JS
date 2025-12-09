import React from 'react';
import InfoLibroComponent from './components/InfoLibroComponent';
import DondeComprarLibroComponent from './components/DondeComprarLibroComponent';
import ResenyasLibroComponent from './components/ResenyasLibroComponent';
import RecomendacionesLibros from './components/RecomendacionesLibros';
import ResumenLibroComponent from './components/ResumenLibroComponent';

//Página del detalle de un libro
// Por lo general, e inicialmente, son las páginas las que suelen hacer las peticiones al back y luego distribuyen la información a través de propiedades entre sus componentes hijos.

/*
    Las propiedades pueden ser de naturaleza múltiple. Es decir, podrían ser: 
        * Texto
        * Numeros
        * Booleanos
        * Funciones
        * Componentes
        * Arrays
        * Objetos

*/
const InfoLibroPage = () => {
  //Respuesta del back hacia la información de un libro concreto puede tener el siguiente formato:
  const libro = {
    info: {
      ISBN: 'cfdea9bc-616a-4e4b-8e61-ea74d4c9a4d4',
      author: 'Alejandro García',
      title: 'Leyendas de Codespace',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
    },
    tiendas: [
      {
        id: 0,
        name: 'Deckow - Runolfsson',
        address: '111 Asa Radial',
      },
      {
        id: 1,
        name: 'Bernier - Swift',
        address: '0421 Feeney Station',
      },
    ],
    reviews: [
      {
        name: 'Eda',
        review:
          'Aliquam assumenda dignissimos eum quo ut similique sapiente. Et et tempore debitis praesentium pariatur ad eum. Autem a sed sit eos quasi assumenda. Consequatur sint suscipit eos eaque assumenda.',
        created_at: '2024-04-22T16:46:57.725Z',
      },
      {
        name: 'Morris',
        review:
          'Perspiciatis qui reiciendis quidem adipisci saepe nihil soluta. Repudiandae maxime ut id. Consequatur aut dolor totam voluptatem sunt ut veritatis. Voluptates minus enim quos.',
        created_at: '2024-03-13T18:32:11.309Z',
      },
      {
        name: 'Timmy',
        review:
          'Porro libero eaque quasi voluptates suscipit maxime officiis nesciunt. Possimus ea est qui fuga ea enim consequatur voluptatibus. Quas qui quisquam iusto. Sunt similique optio. Molestiae et aut iusto itaque dignissimos id doloremque sit error. Illum voluptatibus natus incidunt minus ratione quod et debitis debitis.',
        created_at: '2023-11-07T17:20:35.883Z',
      },
      {
        name: 'Maud',
        review:
          'Rerum autem omnis. Perspiciatis qui recusandae est ratione accusamus. Deleniti animi omnis dolorem maiores delectus eveniet et fugiat. Fugiat et sed sapiente voluptatum voluptatem quis et laborum.',
        created_at: '2024-06-27T15:13:02.845Z',
      },
      // Ejercicio 2
      {
        name: 'Picatoste',
        review:
          'Rerum autem omnis. Perspiciatis qui recusandae est ratione accusamus. Deleniti animi omnis dolorem maiores delectus eveniet et fugiat. Fugiat et sed sapiente voluptatum voluptatem quis et laborum.',
        created_at: '2024-06-27T15:13:02.845Z',
      },
    ],
    recomendaciones: [
      {
        ISBN: 'cfdea9bc-616a-4e4b-8e61-ea74d4c9a4d4',
        author: 'Cristian Romero',
        title: 'Leyendas de Codespace',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
        destacado: true,
      },
      {
        ISBN: 'pdkea9bc-616a-4e4b-8e61-ea74d4c9a9i0',
        author: 'Marina Escaño',
        title: 'Ley y orden',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
        destacado: false,
      },
      {
        ISBN: 'cvmea9bc-616a-4e4b-8e61-ea74d4c9a243',
        author: 'Samuel Zambrana',
        title: 'El de Codespace',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
        destacado: true,
      },
      {
        ISBN: 'koeda9bc-616a-4e4b-8e61-ea74d4c9a000',
        author: 'Alejandro Garcia',
        title: 'Codigo y Espace',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
        destacado: false,
      },
    ],
  };

  const resumenLibro = {
    titulo: 'Mi libro de React',
    autor: 'Alejandro García',
    anio: 2024,
    paginas: 320,
    genero: 'Tecnología',
  };

  const numeroResenyas = libro.reviews.length;

  return (
    <div>
      <div>
        <h1>Información del Libro</h1>
      </div>
      <hr />
      {
        //Vamos a enviarle una prop desde InfoLibroPage a InfoLibroComponent.
        // La forma correcta de pasar props en ReactJS es mediante {...} donde ... es el contenido de la prop
      }
      <InfoLibroComponent
        prop1={'Hola mundo desde el paso de props'}
        infoLibro={libro.info}
      />
      <hr />
      <ResumenLibroComponent resumen={resumenLibro} />
      <hr />
      <DondeComprarLibroComponent tiendas={libro.tiendas} />
      <hr />
      <ResenyasLibroComponent
        reviewList={libro.reviews}
        // Ejercicio 3 y 4
        numeroResenyas={numeroResenyas}
        tituloSeccion={'Opiniones de los lectores'}
      />
      <hr />
      <RecomendacionesLibros librosRecomendados={libro.recomendaciones} />
    </div>
  );
};

export default InfoLibroPage;
