import React from 'react';
import styles from './Reviews.module.css';

export default function Reviews() {
  /**
   * HIER KANNST DU KUNDENBEWERTUNGEN HINZUFÜGEN
   * 1. customer: Name des Kunden oder der Firma (z.B. "Familie Müller")
   * 2. role: Ort oder Art des Kunden (z.B. "Privatkunde aus Lauf")
   * 3. text: Das eigentliche Zitat / Bewertung
   * 4. stars: Anzahl der Sterne (1 bis 5)
   */
  const testimonials = [
    {
      customer: "Max Mustermann",
      role: "Hausverwaltung Nürnberg",
      text: "Ein extrem zuverlässiger Partner für unsere Immobilien. B&B Allroundservice arbeitet schnell, sauber und immer transparent. Absolut empfehlenswert!",
      stars: 5,
    },
    {
      customer: "Familie Schmidt",
      role: "Privatkunden aus Röthenbach",
      text: "Der Garten sah nach dem Winter fürchterlich aus. Das Team hat innerhalb von zwei Tagen alles perfekt aufgeräumt und den Rasen saniert. Top!",
      stars: 5,
    },
    {
      customer: "Anna Keller",
      role: "Lauf an der Pegnitz",
      text: "Sehr netter Kontakt. Die Fensterreinigung in unserem Bürogebäude wird immer pünktlich und super gründlich erledigt.",
      stars: 5,
    },
  ];

  return (
    <section className={styles.section} id="bewertungen">
      <div className={`container`}>
        <div className={`${styles.header} reveal`}>
          <span className="badge badge-mint">Stimmen</span>
          <h2>Was unsere Kunden<br /><em>über uns sagen.</em></h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex} className={starIndex < t.stars ? styles.starFilled : styles.starEmpty}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.quote}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.customer.charAt(0)}
                </div>
                <div>
                  <strong className={styles.name}>{t.customer}</strong>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
