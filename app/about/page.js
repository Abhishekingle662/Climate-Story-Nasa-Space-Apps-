// app/about/page.js
import Link from 'next/link'; // Import Link component
import styles from './about.module.css'; // Add custom styling

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <p>We are committed to providing insights into climate change through innovative technology.</p>
      </header>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          At Climate Story, we are dedicated to raising awareness about climate change and helping everyone understand its impact.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Partners</h2>
        <p>
          We collaborate with top organizations including NASA, Space Apps Challenge, and various scientific communities.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Get Involved</h2>
        <p>
          You can make a difference by getting involved in our initiatives, learning more, and sharing our stories with others.
        </p>
      </section>

      {/* Back to Home button */}
      <Link href="/">
        <button className={styles.backButton}>Go Back to Home!</button>
      </Link>
    </div>
  );
}
