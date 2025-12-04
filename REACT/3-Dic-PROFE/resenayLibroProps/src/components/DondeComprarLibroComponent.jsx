import React from 'react'
import TiendaLibroComponent from './TiendaLibroComponent'

const DondeComprarLibroComponent = (props) => {

  const {
    tiendas
  } = props

  return (
    <div>
        <h2>Donde puedo comprar este libro?</h2>
        {
            tiendas.map((tienda, idx) => (
              /*
                <div key={idx}>
                    <p>Nombre tienda: {tienda.name}</p>
                    <p>Dirección tienda: {tienda.address}</p>
                    <hr />
                </div>
                Ejercciio 7
                */
               <TiendaLibroComponent key={idx} tienda={tienda}/>
            ))
        }
    </div>
  )
}

export default DondeComprarLibroComponent