import { projectsDataBase } from "../../../services/projectsDataBase";
import styles from "./ProjectCard.module.css";
import Link from "next/link";
import { Link as LinkIcon } from "@mui/icons-material";
import Image from "next/image";

export const ProjectCard = () => {
  const projDataBase = projectsDataBase;
  return (
    <div className={styles.container} id="projects">
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
                <Image
                  width={400}
                  height={200}
                  src={Photo}
                  alt={`Photo of ${Proyecto}`}></Image>

                <h3>{Proyecto}</h3>
                <p>{Descripción}</p>
                <LinkIcon className={styles.icon}></LinkIcon>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
