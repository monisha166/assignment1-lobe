'use client';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* Left: Logo */}
      <div className={styles.logo}>
        <span className={styles.logoText}>lobe</span>
        <Image src="/logo-icon.png" alt="Logo Icon" width={20} height={20} />
      </div>

      {/* Center: Menu Items */}
      <ul className={styles.links}>
        <li>Overview</li>
        <li>Examples</li>
        <li className={styles.active}>Tour</li>
        <li>Blog</li>
        <li>Help</li>
      </ul>

      {/* Right: Download Button */}
      <button className={styles.downloadBtn}>Download</button>
    </nav>
  );
}

