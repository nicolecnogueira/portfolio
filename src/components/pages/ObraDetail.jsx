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

      <div className={styles.infoContainer}>

        <div className={styles.header}>
          <h1>{obra.titulo}</h1>
          <div className={styles.metaInfo}>
            <span>{obra.ano}</span>
            <span>{obra.tecnica}</span>
          </div>
        </div>

        <div className={styles.ferramentas}>
        {obra.ferramentas.map((tool) => (
          <span key={tool} className={styles.ferramentaTag}>
            {tool}
          </span>
        ))}
      </div>

        <p className={styles.descricao}>{obra.descricao}</p>

      </div>

      <div className={styles.mediaContainer}>
        
        {obra.midias.rascunhos && obra.midias.rascunhos.length > 0 && (
            <div className={styles.mediaSection}>
                <h2 className={styles.mediaSectionTitle}>Rascunhos</h2>
                <div className={styles.galleryGrid}>
                    {obra.midias.rascunhos.map((imagem, index) => (
                        <img key={index} src={imagem} alt={`${obra.titulo} - rascunho ${index + 1}`} />
                    ))}
                </div>
            </div>
        )}

        <div className={styles.mediaSection}>
            <h2 className={styles.mediaSectionTitle}>Resultado Final</h2>
            <div className={styles.galleryGrid}>
                {obra.midias.final.map((imagem, index) => (
                    <img key={index} src={imagem} alt={`${obra.titulo} - imagem ${index + 1}`} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default ObraDetail;