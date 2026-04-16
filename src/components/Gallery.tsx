import React from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {
  const items = [
    { label: 'Gebäudereinigung', area: 'Bürogebäude · Lauf a.d. Pegnitz' },
    { label: 'Gartenarbeit', area: 'Privatgarten · Simmelsdorf' },
    { label: 'Entrümpelung', area: 'Kellerräumung · Nürnberg' },
    { label: 'Fassadenreinigung', area: 'Mehrfamilienhaus · Röthenbach' },
  ];

  return (
    <section className={styles.section} id="galerie">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="badge badge-blue">Projekte</span>
          <h2>Einblick in<br /><em>unsere Arbeit.</em></h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.placeholder}>
                <div className={styles.phInner}>
                  <span className={styles.phIcon}>📸</span>
                  <span className={styles.phText}>Ihr Foto hier</span>
                </div>
              </div>
              <div className={styles.meta}>
                <div>
                  <h3>{item.label}</h3>
                  <span className={styles.area}>{item.area}</span>
                </div>
                <span className={styles.arrow}>↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
