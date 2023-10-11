import React from 'react'
import { Portfolio } from '../organisms/portfolio/Portfolio'
import styles from "./portfolioTemplate.module.css"
const PortfolioTemplate = () => {
  return (
    <div className={styles.container}>
        <Portfolio/>
    </div>
  )
}

export default PortfolioTemplate