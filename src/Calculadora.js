import React, { useState } from "react";
import Cuadro from "./Cuadro";

export default function Calculadora(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(city) {
      setReady(true); 
      console.log(city);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleResponse(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
 }

  if (ready) {
    return (
      <div className="Weather row m-5">

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            id="monto"
            placeholder="Monto a recibir"
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
          />

          {"  "}
          <button type="submit" className="btn btn-primary">
            Calcular
          </button>
        </form>
    

        <Cuadro city={city}/>
        
      </div>
    );
  } else {
    handleResponse(city);
    return "Loading...";
  }
}

