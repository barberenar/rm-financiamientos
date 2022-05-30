import React from "react";

export default function Cuadro(resultado) {
  let banpro3= Number((resultado.city * 8)/92)+Number(resultado.city);
   return (
     console.log(resultado.city),
     console.log(banpro3),
     (
       <div className="Cuadro">
         <div className="row d-flex justify-content-center">
           <div className="col card-header">Plazo</div>
           <div className="col card-header">-</div>
           <div className="col card-header">Banpro</div>
           <div className="col card-header">Lafise (Bancentro)</div>
           <div className="col card-header">Ficohsa</div>
           <div className="col card-header">Bac</div>
         </div>
         <div className="row d-flex justify-content-center">
           <div className="col">3</div>
           <div className="col">Total</div>
           <div className="col">{banpro3.toFixed(2)}</div>
           <div className="col"></div>
           <div className="col">This column is centered</div>
           <div className="col">This column is centered</div>
         </div>
         <div className="row d-flex justify-content-center">
           <div className="col"></div>
           <div className="col">Cuota</div>
           <div className="col">This column is centered</div>
           <div className="col">This column is centered</div>
           <div className="col">This column is centered</div>
           <div className="col">This column is centered</div>
         </div>
       </div>
     )
   );
}