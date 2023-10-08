import React from "react";
import { Welcome } from "../../molecules/Welcome/welcome";
import { About } from "../../molecules/about/about";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";
import styles from "./Portfolio.module.css"
import UncontrolledExample from "../../molecules/ProjectCard/Slider";

export const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Welcome></Welcome>
      <About></About>
      <ProjectCard></ProjectCard>
      <About></About>
    </div>
  );
};
