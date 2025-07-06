'use client';
import styles from './VideoSection.module.css';
import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className={styles.container}>
      <div className={styles.videoWrapper}>
        <Image
          src="/video-thumbnail.jpg" // Save the screenshot image here
          alt="Lobe app preview"
          width={800}
          height={500}
          className={styles.videoImage}
        />
        <div className={styles.playButton}>
          <Image src="/play-button.png" alt="Play" width={60} height={60} />
        </div>
      </div>

      <h2 className={styles.heading}>Train your app <br /> with Lobe</h2>
      <button className={styles.downloadBtn}>Download</button>
    </section>
  );
}

