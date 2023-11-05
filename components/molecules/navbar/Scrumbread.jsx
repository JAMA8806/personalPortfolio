import * as React from "react";

import Link from "@mui/material/Link";
import { useState } from "react";
import styles from "./Scrumbread.module.css";
import { Switch } from "@mui/material";
import { DarkMode } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "./Menu";

export default function Breadcrumb({ handleSectionChange, selected }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <MenuIcon></MenuIcon>
      </div>
      <Menu
        handleSectionChange={handleSectionChange}
        selected={selected}
        toggleMenu={toggleMenu}
        open={menuOpen}
      ></Menu>
      <div className={styles.darkModeSwitch}>
        <Switch></Switch>
        <DarkMode></DarkMode>
      </div>
    </div>
  );
}
