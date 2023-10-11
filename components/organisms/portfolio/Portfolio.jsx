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
      {currentSection === "welcome" && <Welcome />}
      {currentSection === "about" && <About />}
      {currentSection === "projects" && <ProjectCard />}
      {currentSection === "skills" && <Skills />}
      {currentSection === "certifications" && <Certifications />}
      {currentSection === "workExperience" && <WorkExperience />}
    </div>
  );
};
