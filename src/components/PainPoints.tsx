import React from 'react';
import styles from './PainPoints.module.css';

export default function PainPoints() {
  const stats = [
    { number: '500+', label: 'Zufriedene Kunden', icon: '😊' },
    { number: '10+', label: 'Jahre Erfahrung', icon: '🏆' },
    { number: '24h', label: 'Schnelle Reaktion', icon: '⚡' },
    { number: '100%', label: 'Familiengeführt', icon: '👨‍👩‍👦' },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{stat.icon}</span>
              <span className={styles.number}>{stat.number}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
