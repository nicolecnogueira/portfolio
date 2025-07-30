import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  const navLinks = [
    { title: 'ABOUT', url: '#about' },
    { title: 'ILLUSTRATION', url: '#illustration' },
    { title: 'PHOTOGRAPHY', url: '#photography' },
    { title: 'VIDEOART', url: '#videoart' },
    { title: '3D MODELING', url: '#3d-modeling' },
    { title: 'GRAFIC DESIGN', url: '#grafic-design' }
  ];

  const fonts = [
    'Arial, sans-serif',
    '"Times New Roman", Times, serif',
    '"Courier New", Courier, monospace',
    'Georgia, serif',
    'Verdana, sans-serif'
  ];

  const [fontIndex, setFontIndex] = useState(0);

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
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;