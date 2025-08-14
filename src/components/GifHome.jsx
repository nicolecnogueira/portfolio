  import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
  import styles from './GifHome.module.css';

  const GifHome = () => {
    const phrase = "dj solta o solitário para todos os apaixonadxs";
    const [lines, setLines] = useState([]);
    const [charIndex, setCharIndex] = useState(0);
    const [fontSize, setFontSize] = useState(16);
    const [showFinalText, setShowFinalText] = useState(false);

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
      if (charIndex < phrase.length) {
      const timer = setTimeout(() => {
        setCharIndex(prevIndex => prevIndex + 1);
      }, typeInterval);
      return () => clearTimeout(timer);
    } else {
      setShowFinalText(true);
      const holdTimer = setTimeout(() => {
        setShowFinalText(false);
        setCharIndex(0);
      }, 1000);
      return () => clearTimeout(holdTimer);
    }
    }, [charIndex, phrase.length]);

    useEffect(() => {
      const currentText = phrase.substring(0, charIndex);
      setLines(prevLines => prevLines.map(() => currentText));
    }, [charIndex, phrase, lines.length]);

    const textContent = lines.join('\n');

    return (
      <div className={styles.container} ref={containerRef}>
        <pre ref={sizerRef} className={styles.sizer}>{phrase}</pre>

        {!showFinalText && (
        <pre
          className={`${styles.glitchText} ${styles.baseLayer}`}
          style={{ fontSize: `${fontSize}px` }}
        >
          {textContent}
        </pre>
      )}

      {showFinalText && (
        <pre
          className={styles.finalText}
          style={{ fontSize: `${fontSize}px` }}
        >
          {textContent}
        </pre>
      )}
      <svg style={{ display: 'none' }}>
        <filter id="wave">
          <feTurbulence 
            id="turbulence" 
            type="turbulence" 
            baseFrequency="0.01 0.2" 
            numOctaves="1" 
            result="noise" 
            seed="0" 
          >
            <animate 
              attributeName="seed"
              from="0"
              to="100"
              dur="4s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="10" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>
      </div>
    );
  };

  export default GifHome;
