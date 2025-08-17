import React from 'react';
import { obras } from '../../data/obras';
import ObraCard from '../ObraCard';
import styles from './ObraLista.module.css';

function ObraLista({ categoria }) {
  const obrasFiltradas = obras.filter(
    (obra) => obra.categoria.includes(categoria)
  );

  return (
    <div className={styles.listaContainer}>
      <div className={styles.gridObras}>
        {obrasFiltradas.map((obra) => (
          <ObraCard key={obra.id} obra={obra} />
        ))}
      </div>
    </div>
  );
}

export default ObraLista;