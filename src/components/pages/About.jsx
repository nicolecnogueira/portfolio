import React from 'react';
import styles from './About.module.css';

function About() {
  const marqueeText = [
    "who am I   born in Brazil   been in Portugal   lived in Italy   where do I begin ",
    "no fixed base   where am I   visual poetry   born in Brazil ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "no fixed base   where am I   visual poetry   born in Brazil ",
    "who am I   born in Brazil   been in Portugal   lived in Italy   where do I begin ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "who am I   born in Brazil   been in Portugal   lived in Italy   where do I begin ",
    "no fixed base   where am I   visual poetry   born in Brazil ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "who am I   born in Brazil   been in Portugal   lived in Italy   where do I begin ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "who am I   born in Brazil   been in Portugal   lived in Italy   where do I begin ",
    "no fixed base   where am I   visual poetry   born in Brazil ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "who am I   born in Brazil   been in Portugal   lived in Italy   where do I begin ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "who am I   born in Brazil   been in Portugal   lived in Italy   where do I begin ",
    "no fixed base   where am I   visual poetry   born in Brazil ",
    "where do I begin   in between places   where I’m at   visual poetry ",
    "born in Brazil   shaped by elsewhere   from here & nowhere    i’m in between ",
    "who am I   born in Brazil   been in Portugal   lived in Italy   where do I begin ",
  ];
  const marqueeLines = marqueeText.map((text, index) => (
    <div key={index} className={styles.marqueeLine}>
      <span>{text.repeat(5)}</span>
    </div>
  ));

  return (
    <section className={styles.aboutContainer}>
      <div className={styles.marqueeBackground}>
        {marqueeLines}
      </div>

      <div className={styles.contentCard}>
        <p>
          Hi, I’m Julia, a multimedia artist with roots in Brazil and no fixed coordinates (for now).
        </p>
        <p>
          I grew up in Brazil, moved to Portugal to study Multimedia Art at FBAUL, and spent some time living in Italy. These places, the people, the stories, and the chaos within them shaped how I see and make.
        </p>
        <p>
          I mix visual art, design, and concept to create works that question, feel, and shift.
        </p>
        <p>
          Heavily inspired by modern Brazilian art, literature, and the world’s urgencies — social, political, environmental.
        </p>
        <p>
          I drift between illustration, photography, and video, letting each idea find the form it needs.
        </p>
      </div>
    </section>
  );
}

export default About;