import React from 'react';
import { obras } from '../../data/obras'; // Nosso "banco de dados"
import ObraCard from '../ObraCard'; // O card que acabamos de criar
import styles from './ObraLista.module.css';

// Este componente recebe a 'categoria' que queremos exibir
function ObraLista({ categoria }) {
  // Usamos .filter() para criar um novo array apenas com as obras da categoria certa
  const obrasFiltradas = obras.filter(
    (obra) => obra.categoria === categoria
  );

  return (
    <div className={styles.listaContainer}>
      <h1 className={styles.tituloCategoria}>{categoria.replace('-', ' ')}</h1>
      <div className={styles.gridObras}>
        {obrasFiltradas.map((obra) => (
          // Para cada obra filtrada, renderizamos um ObraCard
          <ObraCard key={obra.id} obra={obra} />
        ))}
      </div>
    </div>
  );
}

export default ObraLista;