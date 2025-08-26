import React from 'react';
import { useParams } from 'react-router-dom';
import { obras } from '../../data/obras';
import ObraCard from './ObraCard';
import styles from './ObraLista.module.css';

const slugify = (text) => text.toString().toLowerCase().replace(/\s+/g, '-');

function ObraListaPorFerramenta() {
  const { toolSlug } = useParams();

  const obrasFiltradas = obras.filter(obra =>
    obra.ferramentas.some(ferramenta => slugify(ferramenta) === toolSlug)
  );

  const nomeFerramenta = obras
    .flatMap(o => o.ferramentas)
    .find(f => slugify(f) === toolSlug);

  return (
    <div className={styles.listaContainer}>
      <div className={styles.gridObras}>
        {obrasFiltradas.length > 0 ? (
          obrasFiltradas.map((obra) => (
            <ObraCard key={obra.id} obra={obra} />
          ))
        ) : (
          <p>Nenhuma obra encontrada para esta ferramenta.</p>
        )}
      </div>
    </div>
  );
}

export default ObraListaPorFerramenta;