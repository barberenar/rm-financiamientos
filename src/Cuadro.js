import React from "react";

export default function Cuadro(resultado) {
  let totalbanpro3= Number((resultado.city * 8)/92)+Number(resultado.city);
  let totalbanpro6 = Number((resultado.city * 11) / 89) + Number(resultado.city);
  let totalbanpro9 = Number((resultado.city * 14) / 86) + Number(resultado.city);
  let totalbanpro12 = Number((resultado.city * 15) / 85) + Number(resultado.city);
  let totalbanpro18 = Number((resultado.city * 17) / 83) + Number(resultado.city);
    
  let totalficohsa3 = Number((resultado.city * 7) / 93) + Number(resultado.city);
  let totalficohsa6 = Number((resultado.city * 9) / 91) + Number(resultado.city);
  let totalficohsa9 = Number((resultado.city * 11.5) / 88.5) + Number(resultado.city);
  let totalficohsa12 = Number((resultado.city * 13.5) / 86.5) + Number(resultado.city);
  let totalficohsa18 = Number((resultado.city * 17.5) / 82.5) + Number(resultado.city);
  let totalficohsa24 = Number((resultado.city * 20) / 80) + Number(resultado.city);

  let totalbac3 = Number((resultado.city * 7.5) / 92.5) + Number(resultado.city);
  let totalbac6 = Number((resultado.city * 10) / 90) + Number(resultado.city);
  let totalbac9 = Number((resultado.city * 13.5) / 86.5) + Number(resultado.city);
  let totalbac12 = Number((resultado.city * 16) / 84) + Number(resultado.city);

  let totallafise3 = Number((resultado.city * 7.5) / 92.5) + Number(resultado.city);
  let totallafise6 = Number((resultado.city * 11.5) / 88.5) + Number(resultado.city);
  let totallafise9 = Number((resultado.city * 15) / 85) + Number(resultado.city);
  let totallafise12 = Number((resultado.city * 17) / 83) + Number(resultado.city);
 
  let  banpro3 =   totalbanpro3/3;
  let  banpro6 =   totalbanpro6/6;
  let  banpro9 =   totalbanpro9/9;
  let  banpro12 =  totalbanpro12/12;
  let  banpro18 =  totalbanpro18/18;
 
  let  ficohsa3 =  totalficohsa3/3;
  let  ficohsa6 =  totalficohsa6/6;
  let  ficohsa9 =  totalficohsa9/9;
  let  ficohsa12 = totalficohsa12/12;
  let  ficohsa18 = totalficohsa18/18;
  let  ficohsa24 = totalficohsa24/24;
 
  let  bac3 =      totalbac3/3;
  let  bac6 =      totalbac6/6;
  let  bac9 =      totalbac9/9;
  let  bac12 =     totalbac12/12;
 
  let  lafise3 =   totallafise3/3;
  let  lafise6 =   totallafise6/6;
  let  lafise9 =   totallafise9/9;
  let  lafise12 =  totallafise12/12;
 
   return (
     console.log(resultado.city),
     console.log(banpro3),
     (
       <div className="Cuadro">
         <div className="row d-flex justify-content-center">
           <div className="col-2 card-header fw-bold">Plazo</div>
           <div className="col-2 card-header">-</div>
           <div className="col-2 card-header fw-bold">Banpro</div>
           <div className="col-2 card-header fw-bold">Ficohsa</div>
           <div className="col-2 card-header fw-bold">Bac</div>
           <div className="col-2 card-header fw-bold">Lafise</div>
         </div>
         <div className="row d-flex justify-content-center mt-2">
           <div className="col-2 fw-bold">3</div>
           <div className="col-2 fw-bold">Total</div>
           <div className="col-2">{totalbanpro3.toFixed(2)}</div>
           <div className="col-2">{totalficohsa3.toFixed(2)}</div>
           <div className="col-2">{totalbac3.toFixed(2)}</div>
           <div className="col-2">{totallafise3.toFixed(2)}</div>
         </div>
         <div className="row d-flex justify-content-center  mb-3 border-bottom">
           <div className="col-2"></div>
           <div className="col-2 fw-bold">Cuota</div>
           <div className="col-2">{banpro3.toFixed(2)}</div>
           <div className="col-2">{ficohsa3.toFixed(2)}</div>
           <div className="col-2">{bac3.toFixed(2)}</div>
           <div className="col-2">{lafise3.toFixed(2)}</div>
         </div>
         <div className="row d-flex justify-content-center mt-2">
           <div className="col-2 fw-bold">6</div>
           <div className="col-2 fw-bold">Total</div>
           <div className="col-2">{totalbanpro6.toFixed(2)}</div>
           <div className="col-2">{totalficohsa6.toFixed(2)}</div>
           <div className="col-2">{totalbac6.toFixed(2)}</div>
           <div className="col-2">{totallafise6.toFixed(2)}</div>
         </div>
         <div className="row d-flex justify-content-center  mb-3 border-bottom">
           <div className="col-2"></div>
           <div className="col-2 fw-bold">Cuota</div>
           <div className="col-2">{banpro6.toFixed(2)}</div>
           <div className="col-2">{ficohsa6.toFixed(2)}</div>
           <div className="col-2">{bac6.toFixed(2)}</div>
           <div className="col-2">{lafise6.toFixed(2)}</div>
         </div>
         <div className="row d-flex justify-content-center mt-2">
           <div className="col-2 fw-bold">9</div>
           <div className="col-2 fw-bold">Total</div>
           <div className="col-2">{totalbanpro9.toFixed(2)}</div>
           <div className="col-2">{totalficohsa9.toFixed(2)}</div>
           <div className="col-2">{totalbac9.toFixed(2)}</div>
           <div className="col-2">{totallafise9.toFixed(2)}</div>
         </div>
         <div className="row d-flex justify-content-center  mb-3 border-bottom">
           <div className="col-2"></div>
           <div className="col-2 fw-bold">Cuota</div>
           <div className="col-2">{banpro9.toFixed(2)}</div>
           <div className="col-2">{ficohsa9.toFixed(2)}</div>
           <div className="col-2">{bac9.toFixed(2)}</div>
           <div className="col-2">{lafise9.toFixed(2)}</div>
         </div>
         <div className="row d-flex justify-content-center mt-2">
           <div className="col-2 fw-bold">12</div>
           <div className="col-2 fw-bold">Total</div>
           <div className="col-2">{totalbanpro12.toFixed(2)}</div>
           <div className="col-2">{totalficohsa12.toFixed(2)}</div>
           <div className="col-2">{totalbac12.toFixed(2)}</div>
           <div className="col-2">{totallafise12.toFixed(2)}</div>
         </div>
         <div className="row d-flex justify-content-center  mb-3 border-bottom">
           <div className="col-2"></div>
           <div className="col-2 fw-bold">Cuota</div>
           <div className="col-2">{banpro12.toFixed(2)}</div>
           <div className="col-2">{ficohsa12.toFixed(2)}</div>
           <div className="col-2">{bac12.toFixed(2)}</div>
           <div className="col-2">{lafise12.toFixed(2)}</div>
         </div>
         <div className="row d-flex justify-content-center mt-2">
           <div className="col-2 fw-bold">18</div>
           <div className="col-2 fw-bold">Total</div>
           <div className="col-2">{totalbanpro18.toFixed(2)}</div>
           <div className="col-2">{totalficohsa18.toFixed(2)}</div>
           <div className="col-2">-</div>
           <div className="col-2">-</div>
         </div>
         <div className="row d-flex justify-content-center  mb-3 border-bottom">
           <div className="col-2"></div>
           <div className="col-2 fw-bold">Cuota</div>
           <div className="col-2">{banpro18.toFixed(2)}</div>
           <div className="col-2">{ficohsa18.toFixed(2)}</div>
           <div className="col-2">-</div>
           <div className="col-2">-</div>
         </div>
         <div className="row d-flex justify-content-center mt-2">
           <div className="col-2 fw-bold">24</div>
           <div className="col-2 fw-bold">Total</div>
           <div className="col-2">-</div>
           <div className="col-2">{totalficohsa24.toFixed(2)}</div>
           <div className="col-2">-</div>
           <div className="col-2">-</div>
         </div>
         <div className="row d-flex justify-content-center  mb-3 border-bottom">
           <div className="col-2"></div>
           <div className="col-2 fw-bold">Cuota</div>
           <div className="col-2">-</div>
           <div className="col-2">{ficohsa24.toFixed(2)}</div>
           <div className="col-2">-</div>
           <div className="col-2">-</div>
         </div>
       </div>
     )
   );
}