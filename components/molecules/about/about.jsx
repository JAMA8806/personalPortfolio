import React from "react";
import styles from "./about.module.css";

export const About = () => {
  return (
    <div className={styles.sectionContainer} id="about">
      <div className={styles.imgContainer}>
        <img src="/images/profilePic.jpg"/>
      </div>
      <div className={styles.infoContainer}>
        <h3>My name is</h3>
        <h2>
          Julián <b>Martínez</b>
        </h2>
        <p>
          "I bring a diverse background, with a strong focus on Front-End
          Development. Although I work teaching english as a foreing language, I´ve been diving into the world of technologies like Html, CSS, JavaScript,
          React and Next.js. I also have hands-on expertise with SQL databases like PostgreSQL and  MySQL, enabling me to provide innovative and precise solutions."
        </p>
      </div>
    </div>
  );
};
