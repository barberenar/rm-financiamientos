import "./App.css";
import React from "react";
import Calculadora from "./Calculadora";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-4">
          Cálculo de Facturación con Tarjetas y Credex
        </h1>
      </header>

      <Calculadora defaultCity={0} />
    </div>
  );
}
