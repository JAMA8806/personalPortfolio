import styles from "./skills.module.css";
import skillsDatabase from "../../../services/skillsDB/skillsDataBase.js";
import certifications from "../../../services/certificationsDB/certifications";
import Link from "next/link";
import { Download, Link as LinkIcon } from "@mui/icons-material";
import { Image } from "react-bootstrap";

export const Skills = () => {
  const skData = skillsDatabase;
  return (
    <div className={styles.container} id="skills">
      <div className={styles.title}>
        <h3>Learning Path</h3>
        <h2>
          Education and <b>Skills</b>
        </h2>
      </div>
      <div className={styles.secondaryContainer}>
        <div className={styles.educationContainer}>
          <div className={styles.eduCard}>
            <Image
              src="/icons/devTools.jpg"
              alt="devTools academy"
              className={styles.edIcon}
            />
            <div className={styles.eduContent}>
              <p>
                <strong>DevTools Academy</strong>
              </p>
              <p>Bootcamp - FrontEnd </p>
              <p>
                <strong>2023</strong>
              </p>
            </div>
          </div>
          <div className={styles.eduCard}>
            <Image
              src="/icons/Platzi.jpg"
              alt="Platzi"
              className={styles.edIcon}
            />
            <div className={styles.eduContent}>
              <p>
                <strong>Platzi</strong>
              </p>
              <p>Courses - FrontEnd / SQL </p>
              <p>
                <strong>From 2020</strong>
              </p>
            </div>
          </div>
          <div className={styles.eduCard}>
            <Image
              src="/icons/cecar.jpeg"
              alt="Cecar"
              className={styles.edIcon}
            />
            <div className={styles.eduContent}>
              <p>
                <strong>CECAR</strong>
              </p>
              <p>Bachelor Degree - Teaching English as a Foreing Language </p>
              <p>
                <strong>2023</strong>
              </p>
            </div>
          </div>
          <div className={styles.eduCard}>
            <Image
              src="/icons/fac.png"
              alt="FAC"
              className={styles.edIcon}
            />
            <div className={styles.eduContent}>
              <p>
                <strong>Fuerza Aeroespacial Colombiana - ESUFA</strong>
              </p>
              <p>Technological Degree - Aeronautical Electronics Technology </p>
              <p>
                <strong>2023</strong>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.skillsColumn}>
          <p>
            For 3+ years, I have been continuously learning in the field of
            front-end and experimenting with new technologies and frameworks.
            Here you can see a summary of my skills.
          </p>
          <div className={styles.skillsContainer}>
            {skData.map((skill, index) => {
              const { name, icon, score } = skill;
              return (
                <div
                  key={index}
                  className={styles.skill}>
                  <Image
                    className={styles.icon}
                    src={`./icons/${name}.svg`}
                    alt={name}
                  />
                  <div className={styles.titleBarCont}>
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.barProgres}
                        style={{ width: 20 * score + "%" }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


