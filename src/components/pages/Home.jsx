import React from 'react';
import styles from './Home.module.css';
import GifHome from '../GifHome';
import gifHome from '../../assets/gifHome.gif';
import { obras } from '../../data/obras';
import Logo from '../Logo';
import ObraCard from '../shared/ObraCard';
import { Link } from 'react-router-dom';

const slugify = (text) => text.toString().toLowerCase().replace(/\s+/g, '-');

function Home() {
  const latestWorks = obras.slice(-3).reverse();

  const allTools = [...new Set(obras.flatMap(obra => obra.ferramentas))].sort();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.gifSection}>
        <img src={gifHome} className={styles.gifImage} />
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.infoSection}>
        <span className={styles.myText}>my</span>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.tagsContainer}>
          {allTools.map(tool => (
            <Link
              key={tool}
              to={`/tool/${slugify(tool)}`}
              className={styles.tag}
            >
              {tool}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.latestWorkSection}>
        <h3 className={styles.latestWorkTitle}>latest work</h3>
        <div className={styles.latestWorkGrid}>
          {latestWorks.map(obra => (
            <ObraCard key={obra.id} obra={obra} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;