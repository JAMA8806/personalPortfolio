import React from "react";
import { Welcome } from "../../molecules/Welcome/welcome";
import { About } from "../../molecules/about/about";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";
import styles from "./Portfolio.module.css"
import { Skills } from "../../molecules/skills/Skill";


export const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Welcome></Welcome>
      <About></About>
      <ProjectCard></ProjectCard>
      <Skills></Skills>
      <About></About>
    </div>
  );
};