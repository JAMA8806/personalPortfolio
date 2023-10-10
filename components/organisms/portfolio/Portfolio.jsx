import React from "react";
import { Welcome } from "../../molecules/Welcome/welcome";
import { About } from "../../molecules/about/about";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";
import styles from "./Portfolio.module.css"
import { Certifications, Skills } from "../../molecules/skills/Skill";
import { WorkExperience } from "../../molecules/work/WorkExperience";


export const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Welcome></Welcome>
      <About></About>
      <ProjectCard></ProjectCard>
      <Skills></Skills>
      <Certifications></Certifications>
      <WorkExperience></WorkExperience>
      <About></About>
    </div>
  );
};