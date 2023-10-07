import PortfolioTemplate from '../../components/templates/portfolioTemplate'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <PortfolioTemplate></PortfolioTemplate>
    </main>
  )
}
