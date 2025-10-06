import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obras } from '../../data/obras';
import styles from './ObraDetail.module.css';

const slugify = (text) => text.toString().toLowerCase().replace(/\s+/g, '-');

function ObraDetail() {
  const { slug } = useParams();
  const [imagemAtualIndex, setImagemAtualIndex] = useState(0);
  const [imagemEmDestaque, setImagemEmDestaque] = useState(null);

  const obra = obras.find((o) => o.slug === slug);

  if (!obra) {
    return <div>Obra não encontrada!</div>;
  }
  
  const usarLayoutLadoALado = 
    obra.midias.final?.length === 1 && obra.midias.rascunho?.length > 0;

  const proximaImagem = () => {
    setImagemAtualIndex((prevIndex) => (prevIndex + 1) % obra.midias.final.length);
  };

  const imagemAnterior = () => {
    setImagemAtualIndex((prevIndex) => (prevIndex - 1 + obra.midias.final.length) % obra.midias.final.length);
  };
  
  const abrirDestaque = (imagemSrc) => {
    setImagemEmDestaque(imagemSrc);
  };

  const fecharDestaque = () => {
    setImagemEmDestaque(null);
  };

  return (
    <>
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
                <Link key={tool} to={`/tool/${slugify(tool)}`} className={styles.ferramentaTag}>
                    {tool}
                </Link>
            ))}
            </div>
            <p className={styles.descricao}>{obra.descricao}</p>
        </div>

        <div className={styles.mediaContainer}>
          {obra.categoria.includes('videoart') ? (
            (() => {
                const url = new URL(obra.videoUrl);
                const videoId = url.searchParams.get('v');
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                return (
                    <div className={styles.videoWrapper}>
                        <iframe
                            src={embedUrl}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={obra.titulo}
                        ></iframe>
                    </div>
                );
            })()
          ) : (
            <>
              {usarLayoutLadoALado ? (
                <div className={styles.layoutLadoALado}>
                  <div className={styles.mediaSection}>
                    <h2 className={styles.mediaSectionTitle}>Process</h2>
                    <div className={styles.galleryGrid}>
                      {obra.midias.rascunho.map((imagem, index) => (
                        <img 
                          key={index} 
                          src={imagem} 
                          alt={`${obra.titulo} - rascunho ${index + 1}`}
                          onClick={() => abrirDestaque(imagem)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.mediaSection}>
                    <h2 className={styles.mediaSectionTitle}>Final Version</h2>
                    <img 
                      src={obra.midias.final[0]} 
                      alt={`${obra.titulo} - imagem final`}
                      className={styles.imagemFinalUnica}
                      onClick={() => abrirDestaque(obra.midias.final[0])}
                    />
                  </div>
                </div>

              ) : (
                <>
                  {obra.midias.rascunho && obra.midias.rascunho.length > 0 && (
                    <div className={styles.mediaSection}>
                      <h2 className={styles.mediaSectionTitle}>Process</h2>
                      <div className={styles.galleryGrid}>
                        {obra.midias.rascunho.map((imagem, index) => (
                          <img 
                            key={index} 
                            src={imagem} 
                            alt={`${obra.titulo} - rascunho ${index + 1}`}
                            onClick={() => abrirDestaque(imagem)}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {obra.midias.final && obra.midias.final.length > 0 && (
                     <div className={styles.mediaSection}>
                        <h2 className={styles.mediaSectionTitle}>Final Version</h2>
                        <div className={styles.sliderContainer}>
                        <img 
                            key={imagemAtualIndex} 
                            src={obra.midias.final[imagemAtualIndex]} 
                            alt={`${obra.titulo} - imagem ${imagemAtualIndex + 1}`}
                            className={styles.sliderImage}
                            onClick={() => abrirDestaque(obra.midias.final[imagemAtualIndex])}
                        />
                        {obra.midias.final.length > 1 && (
                            <>
                            <button onClick={imagemAnterior} className={`${styles.navButton} ${styles.prev}`}>&#10094;</button>
                            <button onClick={proximaImagem} className={`${styles.navButton} ${styles.next}`}>&#10095;</button>
                            <div className={styles.imageCounter}>{imagemAtualIndex + 1} / {obra.midias.final.length}</div>
                            </>
                        )}
                        </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>

      {imagemEmDestaque && (
        <div className={styles.modalOverlay} onClick={fecharDestaque}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={fecharDestaque}>&times;</button>
            <img src={imagemEmDestaque} alt="Imagem em destaque" className={styles.modalImage} />
          </div>
        </div>
      )}
    </>
  );
}

export default ObraDetail;