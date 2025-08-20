import React from 'react';
import { useParams } from 'react-router-dom';
import { obras } from '../data/obras';
import ObraCard from './ObraCard';
import styles from './ObraLista.module.css';

function ObraLista() {
  const { categoria } = useParams();
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