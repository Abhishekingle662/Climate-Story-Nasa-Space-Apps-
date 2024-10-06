import LandingPage from '../components/LandingPage';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <LandingPage />
      </div>
    </div>
  );
}
