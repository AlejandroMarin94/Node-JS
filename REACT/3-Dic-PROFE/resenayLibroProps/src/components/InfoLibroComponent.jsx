import React from 'react'


//Siempre que creo un componente en reactJS, en el parentesis de la función, realmente, tengo un parámetro que normalmente no aparece por defecto que contiene las propiedades que se le pasan desde el padre. Y nosotros, en este componente la podemos llamar como queramos. Por conveniencia se suelen llamar props.
//Cuando se nos envían las props desde el padre, vienen como propieades de un objeto.

/*
Idea a modo de chuletilla
    Propieades: 
        prop1: string
        infoLibro: Object
*/
const InfoLibroComponent = (props) => {

    console.log('props', props)

    //Destructuring de propiades de un objeto JSON
    const {
        prop1,
        infoLibro
    } = props

  return (
    <div>
        <h2>Información del libro</h2>
        <div>
            <p>
                Title: {infoLibro.title}
            </p>
            <p>
                ISBN: {infoLibro.ISBN}
            </p>
            <p>
                Autor: {infoLibro.author}
            </p>
            <p>
                Descripción: {infoLibro.description}
            </p>
        </div>
    </div>
  )
}

export default InfoLibroComponent