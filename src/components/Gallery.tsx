import React from 'react';
import styles from './Gallery.module.css';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function Gallery() {
  /**
   * HIER KANNST DU DEINE VORHER/NACHHER BILDER EINTRAGEN:
   * 1. Lade deine Fotos (z.B. garten_vorher.jpg und garten_nachher.jpg) in den Ordner `public`
   * 2. Trage bei `imageBefore:` und `imageAfter:` den Namen ein
   * 3. Unter `comment:` kannst du einen kleinen Text/Kommentar zum Projekt schreiben. 
   * ACHTUNG: Wenn du keine Bilder einträgst (beide leer ''), wird ein Platzhalter angezeigt.
   */
  const items = [
    {
      label: 'Heckenschnitt',
      area: 'Privatgarten · Lauf a.d. Pegnitz',
      imageBefore: '/heckenschnitt-vorher.jpg',
      imageAfter: '/heckenschnitt-nachher.jpg',
      comment: 'Präziser Formschnitt einer Thuja-Hecke. Alle Schnittreste wurden fachgerecht entsorgt.'
    },
    {
      label: 'Laubentfernung',
      area: 'Gewerbefläche · Happurg',
      imageBefore: '/laubentfernung-vorher.jpg',
      imageAfter: '/laubentfernung-nachher.jpg',
      comment: 'Gründliche Reinigung einer großen Pflasterfläche von Herbstlaub für maximale Sicherheit und Sauberkeit.'
    },
    {
      label: 'Entrümpelung',
      area: 'Wohnungsräumung · Kirchröttenbach',
      imageBefore: '/entruempelung-vorher.jpg',
      imageAfter: '/entruempelung-nachher.jpg',
      comment: 'Entrümpelung einer kompletten Wohnung. Besenrein übergeben.'
    },
    {
      label: 'Gebäudereinigung',
      area: 'Bürogebäude · Lauf a.d. Pegnitz',
      imageBefore: '',
      imageAfter: '',
      comment: 'Sehr starke Verschmutzung im Eingangsbereich komplett rückstandslos entfernt. Der Kunde war begeistert!'
    },
  ];

  return (
    <section className={styles.section} id="galerie">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="badge badge-blue">Projekte</span>
          <h2>Vorher & Nachher<br /><em>Unsere Ergebnisse.</em></h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>

              {/* Image Area - Either Slider or Placeholder */}
              <div className={styles.imageWrap}>
                {item.imageBefore && item.imageAfter ? (
                  <BeforeAfterSlider
                    before={item.imageBefore}
                    after={item.imageAfter}
                    alt={item.label}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <div className={styles.phInner}>
                      <span className={styles.phIcon}>↔️</span>
                      <span className={styles.phText}>Vorher/Nachher Bilder hier eintragen in code</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Area */}
              <div className={styles.content}>
                <div className={styles.meta}>
                  <div>
                    <h3>{item.label}</h3>
                    <span className={styles.area}>{item.area}</span>
                  </div>
                  <span className={styles.arrow}>↗</span>
                </div>

                {/* Comment Section */}
                <div className={styles.commentBox}>
                  <span className={styles.commentLabel}>Unser Kommentar:</span>
                  <p className={styles.commentText}>"{item.comment}"</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
