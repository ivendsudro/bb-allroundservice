'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './PainPoints.module.css';

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else { setCount(Math.floor(current)); }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function PainPoints() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.stat}>
          <span className={styles.number}><AnimatedNumber target={100} suffix="%" /></span>
          <span className={styles.label}>Zuverlässigkeit</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.number}><AnimatedNumber target={10} suffix="+" /></span>
          <span className={styles.label}>Jahre Erfahrung</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.number}><AnimatedNumber target={24} suffix="h" /></span>
          <span className={styles.label}>Reaktionszeit</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.number}><AnimatedNumber target={100} suffix="%" /></span>
          <span className={styles.label}>Familiengeführt</span>
        </div>
      </div>
    </section>
  );
}
