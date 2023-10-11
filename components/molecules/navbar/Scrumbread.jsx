import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useState } from "react";
import styles from "./Scrumbread.module.css";

export default function Breadcrumb({ handleSectionChange, selected }) {
  
  function handleClick(event) {
    handleSectionChange(event);

    console.info("You clicked a breadcrumb.");
  }
  console.log(selected);
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          className={`${selected === "welcome" ? styles.selected : ""}`}
          underline="hover"
          color="inherit"
          href="/"
          onClick={() => handleClick("welcome")}>
          Welcome
        </Link>
        <Link
          className={`${selected === "about" ? styles.selected : ""}`}
          underline="hover"
          color="inherit"
          href=""
          onClick={() => handleClick("about")}>
          About Me
        </Link>
        <Link
          className={`${selected === "projects" ? styles.selected : ""}`}
          underline="hover"
          color="text.primary"
          href=""
          onClick={() => handleClick("projects")}
          aria-current="page">
          Projects
        </Link>
        <Link
          className={`${selected === "skills" ? styles.selected : ""}`}
          underline="hover"
          color="text.primary"
          href=""
          onClick={() => handleClick("skills")}
          aria-current="page">
          Skills
        </Link>
        <Link
          className={`${selected === "certifications" ? styles.selected : ""}`}
          underline="hover"
          color="text.primary"
          href=""
          onClick={() => handleClick("certifications")}
          aria-current="page">
          Certifications
        </Link>
        <Link
          className={`${selected === "workExperience" ? styles.selected : ""}`}
          underline="hover"
          color="text.primary"
          href=""
          onClick={() => handleClick("workExperience")}
          aria-current="page">
          Work Experience
        </Link>
      </Breadcrumbs>
    </div>
  );
}
