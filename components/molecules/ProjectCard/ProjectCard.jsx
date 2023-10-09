import { SvgIcon } from "@mui/material";
import { projectsDataBase } from "../../../services/projectsDataBase";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

export const ProjectCard = () => {
  const projDataBase = projectsDataBase;
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Projects</h3>
      <div className={styles.projectCardsContainer}>
        {projDataBase.map((project, index) => {
          const { Photo, Proyecto, Descripción, URL } = project;
          return (
            <Link
              className={styles.blur}
              key={index}
              href={URL}>
              <div className={styles.projectCard}>
                <img
                  src={Photo}
                  alt={`Photo of ${Proyecto}`}></img>

                <h3>{Proyecto}</h3>
                <p>{Descripción}</p>

                <img
                  src="/icons/goTo.svg"
                  alt="share-icon"
                  className={styles.icon}></img>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
