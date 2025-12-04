import React from 'react'

const RecomendacionesComponent = () => {

    const librosRecomendados = [
	{
    	ISBN: 'cfdea9bc-616a-4e4b-8e61-ea74d4c9a4d4',
    	author: 'Alejandro García',
    	title: 'Leyendas de Codespace',
    	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
	},
	{
    	ISBN: 'pdkea9bc-616a-4e4b-8e61-ea74d4c9a9i0',
    	author: 'Luis Lopez',
    	title: 'Ley y orden',
    	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
	},
	{
    	ISBN: 'cvmea9bc-616a-4e4b-8e61-ea74d4c9a243',
    	author: 'Pep Guardiola',
    	title: 'El de Codespace',
    	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
	},{
    	ISBN: 'koeda9bc-616a-4e4b-8e61-ea74d4c9a000',
    	author: 'Alejandro Garcia',
    	title: 'Codigo y Espace',
    	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?',
	}
]


  return (
    <div>
        <h2>Recomendaciones acordes a tus gustos</h2>
        {
            librosRecomendados.map((libro, idx) => (
                <div key={idx}>
                    <p>ISBN: {libro.ISBN} {idx}</p>
                    <p>Autor: {libro.author}</p>
                    <p>Título: {libro.title}</p>
                    <p>Descripción: {libro.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default RecomendacionesComponent