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
      <div className="Weather row m-5 d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="mb-5">
          <input
            type="search"
            id="monto"
            placeholder="Monto a recibir"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </form>

        <Cuadro city={city} />
      </div>
    );
  } else {
    handleResponse(city);
    return "Loading...";
  }
}

