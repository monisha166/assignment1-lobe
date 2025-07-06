'use client';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* Left Column */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <span>lobe</span>
            <Image src="/logo-icon.png" alt="Logo" width={20} height={20} />
          </div>
          <p>A product by Microsoft.</p>
          <p>All rights reserved.</p>
          <p>© Microsoft 2021</p>
        </div>

        {/* Middle Columns */}
        <div className={styles.linkGroups}>
          <div>
            <h4>About</h4>
            <ul>
              <li>Download</li>
              <li>Overview</li>
              <li>Examples</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4>General</h4>
            <ul>
              <li>Notice</li>
              <li>License</li>
              <li>Press Inquiry</li>
              <li>Press Images</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Help</li>
              <li>Tour</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className={styles.socials}>
          <Image src="/chat-icon.png" alt="Chat" width={30} height={30} />
          <Image src="/twitter-icon.png" alt="Twitter" width={30} height={30} />
          <Image src="/youtube-icon.png" alt="YouTube" width={30} height={30} />
        </div>
      </div>
    </footer>
  );
}