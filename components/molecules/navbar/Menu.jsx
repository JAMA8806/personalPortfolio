import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import styles from "./Scrumbread.module.css";
import React, { useState } from 'react'

export const Menu = ({handleSectionChange, selected, toggleMenu, open}) => {
    function handleClick(event) {
        handleSectionChange(event)
        toggleMenu()
      }
      
  return (
    
    <div className={`${styles.breadCrumbContainer} ${open? styles.active : ''}`}>
        
          <div
            className={`${selected === "welcome" ? styles.selected : ""}`}
            underline="hover"
            color="inherit"
            onClick={() => handleClick("welcome")}
          >
            Welcome
          </div>
          <div
            className={`${selected === "about" ? styles.selected : ""}`}
            underline="hover"
            color="inherit"
            onClick={() => handleClick("about")}
          >
            About Me
          </div>
          <div
            className={`${selected === "projects" ? styles.selected : ""}`}
            underline="hover"
            color="text.primary"
            onClick={() => handleClick("projects")}
            aria-current="page"
          >
            Projects
          </div>
          <div
            className={`${selected === "skills" ? styles.selected : ""}`}
            underline="hover"
            color="text.primary"
            onClick={() => handleClick("skills")}
            aria-current="page"
          >
            Skills
          </div>
          <div
            className={`${
              selected === "certifications" ? styles.selected : ""
            }`}
            underline="hover"
            color="text.primary"
            onClick={() => handleClick("certifications")}
            aria-current="page"
          >
            Certifications
          </div>
          <div
            className={`${
              selected === "workExperience" ? styles.selected : ""
            }`}
            underline="hover"
            color="text.primary"
            onClick={() => handleClick("workExperience")}
            aria-current="page"
          >
            Work Experience
          </div>
          <Link
            className={styles.cv}
            underline="hover"
            color="text.primary"
            href="https://drive.google.com/file/d/1tUSEL1D8GGe3iazT7OzQZ_XOfoH13RSF/view?usp=sharing"
            aria-current="page"
          >
            Curriculum
          </Link>
        
      </div>
  )
}
