import styles from "./skills.module.css";
import skillsDatabase from "../../../services/skillsDB/skillsDataBase.js";
import certifications from "../../../services/certificationsDB/certifications";
import Link from "next/link";
import { Download, Link as LinkIcon } from "@mui/icons-material";
import { Image } from "react-bootstrap";

export const Skills = () => {
  const skData = skillsDatabase;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Learning Path</h3>
        <h2>
          Education and <b>Skills</b>
        </h2>
      </div>
      <div className={styles.secondaryContainer}>
        <div className={styles.educationContainer}>
          <div className={styles.eduCard}>
            <img
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
            <img
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
            <img
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
            <img
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
                  <img
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

export const Certifications = () => {
  const cert = certifications;
  return (
    <div className={styles.container}>
      <h3 className={styles.h3Cert}>
        Courses and <strong>Certifications</strong>
      </h3>
      <div className={styles.certificationsContainer}>
        {cert.map((cert, index) => {
          const { image, url, name, Instituto, year } = cert;
          return (
            <Link
              href={url}
              key={index}>
              <div className={styles.certCard}>
                <img
                  src={image}
                  alt={name}
                  className={styles.certIcon}
                />
                <div className={styles.certCardInfo}>
                  <p>
                    <strong>{name}</strong>
                  </p>
                  <p>{Instituto}</p>
                  <p>
                    <strong>{year}</strong>
                  </p>
                  <div className={styles.iconsCont}>
                    <Download></Download>
                    <LinkIcon></LinkIcon>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.langCont}>
        <h3>Languages</h3>
        <div className={styles.lang}>
          <div className={styles.langCard}>
            <Image
            className={styles.certIcon}
              src="/icons/col.png"
              alt="colombia"
              
            />
            <h2>Español</h2>
            <p>Nativo</p>
          </div>
          <div className={styles.langCard}>
            <Image
            className={styles.certIcon}
              src="/icons/english.png"
              alt="english"
            />
            <h2>English</h2>
            <p>C1 - Advanced</p>
          </div>

          <div className={styles.langCard}>
            <Image
            className={styles.certIcon}
              src="/icons/frances.png"
              alt="french"
            />
            <h2>Français</h2>
            <p>A1 - Débutant</p>
          </div>
        </div>
      </div>
    </div>
  );
};
