import Link from 'next/link';
import styles from './Navigation.module.css'; // Optional: Create a CSS file for styling

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {/* Add other links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
