import React from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {
  const projects = [
    { title: 'Gebäudereinigung', desc: 'Professionelle Reinigung für Ihr Zuhause oder Bürogebäude.', placeholder: 'Vorher / Nachher Foto' },
    { title: 'Reparaturen', desc: 'Zuverlässige Reparaturdienste für Ihr Zuhause.', placeholder: 'Vorher / Nachher Foto' },
    { title: 'Gepflegte Gärten', desc: 'Gartenpflege vom Profi – das ganze Jahr über.', placeholder: 'Vorher / Nachher Foto' },
    { title: 'Entrümpelung', desc: 'Besenreine Räumung – schnell und diskret.', placeholder: 'Vorher / Nachher Foto' },
  ];

  return (
    <section className={styles.section} id="galerie">
      <div className="container">
        <div className={styles.header}>
          <div className="section-badge">📷 Unsere Projekte</div>
          <h2 className="section-title">Einblick in unsere Arbeit</h2>
          <p className="section-subtitle">
            Hier finden Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderInner}>
                  <span className={styles.placeholderIcon}>📸</span>
                  <span className={styles.placeholderText}>{p.placeholder}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
