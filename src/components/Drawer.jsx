import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Drawer.module.css';

const slugify = (text) => text.toString().toLowerCase().replace(/\s+/g, '-');

function Drawer({ navLinks, allTools, onClose }) {
  return (
    <div className={styles.drawerPanel} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Fechar menu">
        <span className={styles.xLine}></span>
        <span className={styles.xLine}></span>
      </button>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link to={link.url} onClick={onClose} className={styles.categoryLink}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.toolsSection}>
            <div className={styles.toolTagsContainer}>
                {allTools.map((tool) => (
                    <Link
                        key={tool}
                        to={`/tool/${slugify(tool)}`}
                        className={styles.toolTag}
                        onClick={onClose}
                    >
                        {tool}
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Drawer;