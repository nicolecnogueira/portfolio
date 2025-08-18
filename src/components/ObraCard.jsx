import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ObraCard.module.css';

function ObraCard({ obra }) {
  return (
    <Link to={`/obras/${obra.slug}`} className={styles.cardLink}>
      <div className={styles.cardContainer}>
        <img src={obra.midias.final[0]} alt={obra.titulo} className={styles.cardImage} />
        <div className={styles.cardOverlay}>
          <h3 className={styles.cardTitle}>{obra.titulo}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ObraCard;