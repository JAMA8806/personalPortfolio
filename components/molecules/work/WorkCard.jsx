// components/TarjetaTrabajo.js
import React from 'react';

export const TarjetaTrabajo = ({ trabajo }) => {
    const workInfo = trabajo;

  return (
    <div className="tarjeta-trabajo">
      <h3>{workInfo.Empresa}</h3>
      <p>Año: {workInfo.Año}</p>
      <p>Cargo: {workInfo.Cargo}</p>
      <ul>
        <li>{workInfo.Tarea1}</li>
        <li>{workInfo.Tarea2}</li>
        <li>{workInfo.Tarea3}</li>
        <li>{workInfo.Tarea4}</li>
      </ul>
    </div>
  );
};


