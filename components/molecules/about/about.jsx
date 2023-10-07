import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export const About = () => {
  return (
    <div className={styles.sectionContainer}>
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
          Development. My experience includes military aviation electronics work,
          teaching English, and proficiency in SQL databases like PostgreSQL and  MySQL. I also have hands-on expertise with Front-End technologies like
          React and Next.js, enabling me to create innovative and precise
          solutions."
        </p>
      </div>
    </div>
  );
};
