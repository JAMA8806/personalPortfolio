import Menu from "./WorkMenu";
import { TarjetaTrabajo } from "./WorkCard.jsx";
import { workExperience } from "../../../services/WorkExperience/workExperience";
import { useEffect, useState } from "react";

const trabajos = workExperience;

export const WorkExperience = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("Option1");
  const [filteredWork, setFilteredWork] = useState([])  
  const handleOpcionClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };
  useEffect(() => {
    console.log(opcionSeleccionada);
    const trabajo = trabajos.filter(
      (work) => work.Option == opcionSeleccionada
    );
    setFilteredWork(trabajo[0])
    console.log(trabajo);
  }, [opcionSeleccionada]);

  return (
    <div>
      <h1>Mi Página</h1>
      <Menu handleOpcionClick={handleOpcionClick} />
      <div className="tarjetas-de-trabajo">
        <TarjetaTrabajo trabajo={filteredWork}></TarjetaTrabajo>
      </div>
    </div>
  );
};
