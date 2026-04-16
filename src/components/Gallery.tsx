import React from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {
  /**
   * HIER KANNST DU DEINE BILDER EINTRAGEN:
   * 1. Lade deine Fotos (z.B. projekt1.jpg) in den Ordner `public`
   * 2. Trage bei `image:` den Namen ein (z.B. '/projekt1.jpg')
   * 3. Unter `comment:` kannst du einen kleinen Text/Kommentar zum Bild schreiben. 
   * ACHTUNG: Wenn `image` leer ist (''), wird farbiger Platzhalter angezeigt.
   */
  const items = [
    { 
      label: 'Gebäudereinigung', 
      area: 'Bürogebäude · Lauf a.d. Pegnitz',
      image: '', // z.B. '/mein-bild1.jpg'
      comment: 'Sehr starke Verschmutzung im Eingangsbereich komplett rückstandslos entfernt. Der Kunde war begeistert!'
    },
    { 
      label: 'Gartenarbeit', 
      area: 'Privatgarten · Simmelsdorf',
      image: '', 
      comment: 'Frühjahrsschnitt der Hecke und komplette Rasensanierung durchgeführt. 4 Wagenladungen Grünschnitt entsorgt.'
    },
    { 
      label: 'Entrümpelung', 
      area: 'Kellerräumung · Nürnberg',
      image: '', 
      comment: 'Einen 60qm großen Keller innerhalb von 6 Stunden besenrein übergeben. Fairer Festpreis!'
    },
    { 
      label: 'Reparaturen', 
      area: 'Mehrfamilienhaus · Röthenbach',
      image: '', 
      comment: 'Wände ausgebessert und neu gestrichen, sowie Schaniere der Brandschutztüren repariert.'
    },
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
              
              {/* Image Area */}
              <div className={styles.imageWrap}>
                {item.image ? (
                  <img src={item.image} alt={item.label} className={styles.img} />
                ) : (
                  <div className={styles.placeholder}>
                    <div className={styles.phInner}>
                      <span className={styles.phIcon}>📸</span>
                      <span className={styles.phText}>Hier Foto eintragen</span>
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
