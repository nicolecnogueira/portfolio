import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { obras } from '../../data/obras';
import styles from './ObraDetail.module.css';

function ObraDetail() {
  const { slug } = useParams();

  const obra = obras.find((o) => o.slug === slug);

  if (!obra) {
    return <div>Obra não encontrada!</div>;
  }

  return (
    <div className={styles.detalheContainer}>
      <div className={styles.mediaContainer}>
        {obra.tipo === 'imagem' ? (
          <img src={obra.midia} alt={obra.titulo} />
        ) : (
          <video src={obra.midia} autoPlay loop muted controls />
        )}
      </div>
      <div className={styles.infoContainer}>
        <h1>{obra.titulo}</h1>
        <h2>{obra.subtitulo}</h2>
        <p className={styles.ano}>{obra.ano}</p>
        <p className={styles.descricao}>{obra.descricao}</p>
        <div className={styles.ferramentas}>
          <strong>Ferramentas:</strong>
          <ul>
            {obra.ferramentas.map(tool => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
        <Link to="/" className={styles.backLink}>Voltar para o início</Link>
      </div>
    </div>
  );
}

export default ObraDetail;