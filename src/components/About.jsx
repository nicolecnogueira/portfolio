import React from 'react';
import styles from './About.module.css';

function About() {
  const marqueeText = "who am I born in Brazil where I'm at visual poetry ";
  const lineCount = 15;
  const marqueeLines = Array.from({ length: lineCount }).map((_, index) => (
    <div key={index} className={styles.marqueeLine}>
      <span>{marqueeText.repeat(4)}</span>
    </div>
  ));

  return (
    <section className={styles.aboutContainer}>
      <div className={styles.marqueeBackground}>
        {marqueeLines}
      </div>

      <div className={styles.contentCard}>
        <p>
          Hello, I'm a Lisbon-based multimedia artist with roots in Brazil.
        </p>
        <p>
          I blend visual art, design, and concept to build works that question, feel, and shift.
        </p>
        <p>
          Inspired by modern brazilian art, literature, and the world's urgencies, social, political, environmental.
        </p>
        <p>
          I explore identity, transformation, and culture across mediums like illustration, photography, video and beyond.
        </p>
      </div>
    </section>
  );
}

export default About;