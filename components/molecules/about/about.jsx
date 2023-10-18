import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export const About = () => {
  return (
    <div className={styles.sectionContainer} id="about">
      <div className={styles.ImageContainer}>
        <Image src="/images/profilePic.jpg" alt='Profile-pic'/>
      </div>
      <div className={styles.infoContainer}>
        <h3>My name is</h3>
        <h2>
          Julián <b>Martínez</b>
        </h2>
        <p>
          I bring a diverse background, with a strong focus on Front-End
          Development. Although I work teaching english as a foreing language, I have been diving into the world of technologies like Html, CSS, JavaScript,
          React and Next.js. I also have hands-on expertise with SQL databases like PostgreSQL and  MySQL, enabling me to provide innovative and precise solutions.
        </p>
      </div>
    </div>
  );
};
