import React, { useState } from "react";
import { Welcome } from "../../molecules/Welcome/welcome";
import { About } from "../../molecules/about/about";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";
import styles from "./Portfolio.module.css";
import { Certifications, Skills } from "../../molecules/skills/Skill";
import { WorkExperience } from "../../molecules/work/WorkExperience";
import Breadcrumb from "../../molecules/navbar/Scrumbread";

export const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState("welcome");
  console.log(currentSection);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };
  return (
    <div className={styles.container}>
      <Breadcrumb
        selected={currentSection}
        handleSectionChange={handleSectionChange}></Breadcrumb>
      <Welcome data-section="welcome" id="welcome" />
      <About data-section="about" id="about" />
      <ProjectCard data-section="projects" id="projects"/>
      <Skills data-section="skills" id="skills"/>
      <Certifications data-section="certifications" id="certifications" />
      <WorkExperience data-section="workExperience" id="workExperience" />
    </div>
  );
};
