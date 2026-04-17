'use client';
import React, { useState, useRef } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface Props {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfterSlider({ before, after, alt }: Props) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && e.type !== 'click') return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleMove}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onClick={(e) => {
        setIsDragging(true);
        handleMove(e);
        setTimeout(() => setIsDragging(false), 50);
      }}
    >
      {/* Das "Nachher"-Bild liegt unten (wird rechts sichtbar) */}
      <img src={after} alt={`${alt} Nachher`} className={styles.image} draggable="false" />

      {/* Das "Vorher"-Bild liegt oben (wird durch clip-path beschnitten) */}
      <img
        src={before}
        alt={`${alt} Vorher`}
        className={`${styles.image} ${styles.imageBefore}`}
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        draggable="false"
      />

      {/* Labels */}
      <span className={styles.labelBefore}>Vorher</span>
      <span className={styles.labelAfter}>Nachher</span>

      {/* Slider Regler */}
      <div className={styles.slider} style={{ left: `${sliderPos}%` }}>
        <div className={styles.sliderLine} />
        <div className={styles.sliderButton}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L4 8M4 8L8 4M4 8H20M16 12L20 16M20 16L16 20M20 16H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
