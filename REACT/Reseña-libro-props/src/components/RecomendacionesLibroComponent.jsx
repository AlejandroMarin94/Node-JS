import React from "react";
import TarjetaRecomendacionesComponent from "./TarjetaRecomendacionesComponent";

const RecomendacionesLibroComponent = (props) => {
  const {recomendaciones } = props;
  console.log(recomendaciones);
  
  return (
    <div>
    <h3>Recomendaciones</h3>
    {
      recomendaciones.map((r)=>(
   <TarjetaRecomendacionesComponent key={r.id} recomendaciones={r} />
      ))
    }

   </div>
  );
};

export default RecomendacionesLibroComponent;
