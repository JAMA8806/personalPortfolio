import * as React from "react";
import { useState } from "react";
import styles from "./Scrumbread.module.css";
import { DarkMode } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "./Menu";
import Switche from "../../atoms/icons/Switch";

export default function Breadcrumb({ handleSectionChange, selected }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <MenuIcon style={{ color: 'var(--cinder-color)'}}></MenuIcon>
      </div>
      <Menu
        handleSectionChange={handleSectionChange}
        selected={selected}
        toggleMenu={toggleMenu}
        open={menuOpen}
      ></Menu>
      <div className={styles.darkModeSwitch}>
        <Switche></Switche>
        <DarkMode style={{ color: 'var(--cinder-color)'}}></DarkMode>
      </div>
    </div>
  );
}
