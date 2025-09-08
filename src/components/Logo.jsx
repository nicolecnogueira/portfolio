import React, { useState, useEffect } from 'react';
import styles from './Logo.module.css';

const fonts = [
  '"Inter", sans-serif',
  '"ZCOOL KuaiLe", sans-serif',
  '"Tilt Warp", sans-serif',
  '"Jersey 10", sans-serif',
  '"Gemunu Libre", sans-serif',
  '"Fraunces", serif',
  '"Workbench", sans-serif',
  '"Maragsa", serif'
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