import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import Drawer from './Drawer';
import {obras} from '../data/obras';

function Header() {
  const navLinks = [
    { title: 'ABOUT', url: '/about' },
    { title: 'ILLUSTRATION', url: '/illustration' },
    { title: 'PHOTOGRAPHY', url: '/photography' },
    { title: 'VIDEOART', url: '/videoart' },
    { title: '3D MODELING', url: '/3d-modeling' },
    { title: 'GRAPHIC DESIGN', url: '/graphic-design' }
  ];

  const allTools = [...new Set(obras.flatMap(obra => obra.ferramentas))].sort();

  const fonts = [
    'Arial, sans-serif',
    '"Times New Roman", Times, serif',
    '"Courier New", Courier, monospace',
    'Georgia, serif',
    'Verdana, sans-serif'
  ];

  const [fontIndex, setFontIndex] = useState(0);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFontIndex(prevIndex => (prevIndex + 1) % fonts.length);
    }, 400);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <a href="/">
          <span style={{ fontFamily: fonts[fontIndex], transition: 'font-family 0.2s ease-in-out' }}>
            Portfolio
          </span>
        </a>
      </div>
      <nav className={styles.navigation}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.hamburgerMenu} onClick={toggleDrawer}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isDrawerOpen && <Drawer navLinks={navLinks} allTools={allTools} onClose={toggleDrawer} />}

    </header>
  );
}

export default Header;