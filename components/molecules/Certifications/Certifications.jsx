import styles from "../skills/skills.module.css";
import skillsDatabase from "../../../services/skillsDB/skillsDataBase.js";
import certifications from "../../../services/certificationsDB/certifications";
import Link from "next/link";
import { Download, Link as LinkIcon } from "@mui/icons-material";
import { Image } from "react-bootstrap";

export const Certifications = () => {
    const cert = certifications;
    return (
      <div className={styles.containerCourses} id="certifications">
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
                  <Image
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