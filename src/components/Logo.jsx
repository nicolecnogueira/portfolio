import React, { useState, useEffect } from 'react';
import styles from './Logo.module.css';

const fonts = [
  'Arial, sans-serif',
  '"Times New Roman", Times, serif',
  '"Courier New", Courier, monospace',
  'Georgia, serif',
  'Verdana, sans-serif'
];

function Logo() {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFontIndex(prevIndex => (prevIndex + 1) % fonts.length);
    }, 400);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span 
      className={styles.animatedText} 
      style={{ fontFamily: fonts[fontIndex] }}
    >
      Portfolio
    </span>
  );
}

export default Logo;