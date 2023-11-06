"use client";
import { useContext } from "react";
import PortfolioTemplate from "../../components/templates/portfolioTemplate";
import styles from "./page.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {

  const {theme} = useContext(ThemeContext)
  
  console.log(theme);

  return (
      <main className={`${styles.main} ${theme} `}>
        <PortfolioTemplate></PortfolioTemplate>
      </main>
    
  );
}
