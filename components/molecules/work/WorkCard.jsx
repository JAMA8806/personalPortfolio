// components/TarjetaTrabajo.js
import React from 'react';

export const TarjetaTrabajo = ({ trabajo }) => {
    const workInfo = trabajo;
    console.log(workInfo);
    console.log(workInfo.Option);

  return (
    <div className="tarjeta-trabajo">
      <h3>{workInfo[0].Empresa}</h3>
      <p>Año: {workInfo[0].Año}</p>
      <p>Cargo: {workInfo[0].Cargo}</p>
      <ul>
        <li>{workInfo[0].Tarea1}</li>
        <li>{workInfo[0].Tarea2}</li>
        <li>{workInfo[0].Tarea3}</li>
        <li>{workInfo[0].Tarea4}</li>
      </ul>
    </div>
  );
};


