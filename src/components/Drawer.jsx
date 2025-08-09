import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Drawer.module.css';

function Drawer({ navLinks, onClose }) {
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
              <Link to={link.url} onClick={onClose}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Drawer;