  import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
  import styles from './GifHome.module.css';

  const GifHome = () => {
    const phrase = "dj solta o solitário para todos os apaixonadxs";
    const [lines, setLines] = useState([]);
    const [charIndex, setCharIndex] = useState(0);
    const [fontSize, setFontSize] = useState(16);

    const containerRef = useRef(null);
    const sizerRef = useRef(null);

    useLayoutEffect(() => {
      const updateLayout = () => {
        if (!containerRef.current || !sizerRef.current) return;

        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        sizerRef.current.style.fontSize = '1px';
        const textWidthAt1px = sizerRef.current.scrollWidth;
        const newFontSize = containerWidth / textWidthAt1px;
        setFontSize(newFontSize);

        sizerRef.current.style.fontSize = `${newFontSize}px`;
        const lineHeight = sizerRef.current.clientHeight;
        const maxLines = lineHeight > 0 ? Math.floor(containerHeight / lineHeight) : 0;
        
        setLines(Array(maxLines).fill(''));
      };

      updateLayout();
      window.addEventListener('resize', updateLayout);
      return () => window.removeEventListener('resize', updateLayout);
    }, [phrase]);

    useEffect(() => {
      const typeInterval = 60;
      const timer = setTimeout(() => {
        setCharIndex(prevIndex => (prevIndex + 1) % (phrase.length + 1));
      }, typeInterval);
      return () => clearTimeout(timer);
    }, [charIndex, phrase.length]);

    useEffect(() => {
      const currentText = phrase.substring(0, charIndex);
      setLines(prevLines => prevLines.map(() => currentText));
    }, [charIndex, phrase, lines.length]);

    const textContent = lines.join('\n');

    return (
      <div className={styles.container} ref={containerRef}>
        <pre ref={sizerRef} className={styles.sizer}>{phrase}</pre>

        {/* Camada branca de fundo */}
        <pre
          className={`${styles.glitchText} ${styles.baseLayer}`}
          style={{ fontSize: `${fontSize}px` }}
        >
          {textContent}
        </pre>

        {/* Camada colorida por cima */}
        <pre
          className={`${styles.glitchText} ${styles.colorLayer}`}
          style={{ fontSize: `${fontSize}px` }}
        >
          {textContent}
        </pre>
      </div>
    );
  };

  export default GifHome;
