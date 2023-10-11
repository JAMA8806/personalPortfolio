import Menu from "./WorkMenu";
import { TarjetaTrabajo } from "./WorkCard.jsx";
import { workExperience } from "../../../services/WorkExperience/workExperience";
import { useEffect, useState } from "react";
import styles from "./workExperience.module.css";
const trabajos = workExperience;

export const WorkExperience = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("Option1");
  const [filteredWork, setFilteredWork] = useState([]);
  const handleOpcionClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };
  useEffect(() => {
    console.log(opcionSeleccionada);
    const trabajo = trabajos.filter(
      (work) => work.Option == opcionSeleccionada
    );
    setFilteredWork(trabajo[0]);
    console.log(trabajo);
  }, [opcionSeleccionada]);

  return (
    <div className={styles.workSection} id="workExperience">
      <h3 className={styles.title}>Work Experience</h3>
      <div className={styles.content}>
        <Menu
          className={styles.menu}
          handleOpcionClick={handleOpcionClick}
        />
        <div className={styles.card}>
          <TarjetaTrabajo trabajo={filteredWork}></TarjetaTrabajo>
        </div>
      </div>
    </div>
  );
};
