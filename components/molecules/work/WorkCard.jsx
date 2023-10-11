// components/TarjetaTrabajo.js
import React from 'react';
import styles from "./workExperience.module.css"

export const TarjetaTrabajo = ({ trabajo }) => {

  return (
    <div className={styles.cardInfo}>
      <h3>{trabajo.Empresa}</h3>
      <p>Year: {trabajo.Año}</p>
      <p>Position: {trabajo.Cargo}</p>
      <ul>
        <li>{trabajo.Tarea1}</li>
        <li>{trabajo.Tarea2}</li>
        <li>{trabajo.Tarea3}</li>
        <li>{trabajo.Tarea4}</li>
      </ul>
    </div>
  );
};


