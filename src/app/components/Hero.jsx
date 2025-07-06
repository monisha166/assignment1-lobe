'use client';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>
        Lobe <span>Tour</span>
      </h1>
      <p className={styles.description}>
        Build your first machine learning model in ten <br /> minutes. No code or experience required.
      </p>
    </section>
  );
}

