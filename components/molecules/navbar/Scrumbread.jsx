import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useState } from "react";
import styles from "./Scrumbread.module.css";
import { Switch } from "@mui/material";
import { DarkMode } from "@mui/icons-material";


export default function Breadcrumb({ handleSectionChange, selected }) {
  function handleClick(event) {
    handleSectionChange(event);
  }

  return (
    <div className={styles.scrumbread}>
      <Breadcrumbs aria-label="breadcrumb">
        <div
          className={`${selected === "welcome" ? styles.selected : ""}`}
          underline="hover"
          color="inherit"
          onClick={() => handleClick("welcome")}>
          Welcome
        </div>
        <div
          className={`${selected === "about" ? styles.selected : ""}`}
          underline="hover"
          color="inherit"
          onClick={() => handleClick("about")}>
          About Me
        </div>
        <div
          className={`${selected === "projects" ? styles.selected : ""}`}
          underline="hover"
          color="text.primary"
          onClick={() => handleClick("projects")}
          aria-current="page">
          Projects
        </div>
        <div
          className={`${selected === "skills" ? styles.selected : ""}`}
          underline="hover"
          color="text.primary"
          onClick={() => handleClick("skills")}
          aria-current="page">
          Skills
        </div>
        <div
          className={`${selected === "certifications" ? styles.selected : ""}`}
          underline="hover"
          color="text.primary"
          onClick={() => handleClick("certifications")}
          aria-current="page">
          Certifications
        </div>
        <div
          className={`${selected === "workExperience" ? styles.selected : ""}`}
          underline="hover"
          color="text.primary"
          onClick={() => handleClick("workExperience")}
          aria-current="page">
          Work Experience
        </div>
        <Link
          className={styles.cv}
          underline="hover"
          color="text.primary"
          href="https://drive.google.com/file/d/1tUSEL1D8GGe3iazT7OzQZ_XOfoH13RSF/view?usp=sharing"
          aria-current="page">
          Curriculum
        </Link>
      </Breadcrumbs>
      <div className={styles.darkModeSwitch}>
        <Switch></Switch>
        <DarkMode></DarkMode>
      </div>
    </div>
  );
}
