import LandingPage from '../components/LandingPage';
import styles from './page.module.css';
import Navigation from '../components/Navigation'; // Import the Navigation component

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation /> {/* Include the navigation bar */}
      <div className={styles.content}>
        <LandingPage />
      </div>
    </div>
  );
}
