'use client';
import React from 'react';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  const reasons = [
    {
      icon: '👨‍👩‍👦',
      title: 'Familienunternehmen',
      text: 'Als familiengeführtes Unternehmen stehen wir persönlich für Qualität und Zuverlässigkeit ein. Bei uns sind Sie kein Ticket – Sie sind ein Nachbar.'
    },
    {
      icon: '⚡',
      title: 'Schnell & Flexibel',
      text: 'Kurze Wege, schnelle Reaktionszeiten. Wir sind in der Regel innerhalb von 24 Stunden für Sie da – auch für kurzfristige Anfragen.'
    },
    {
      icon: '🤝',
      title: 'Alles aus einer Hand',
      text: 'Kein Suchen nach mehreren Firmen. Reinigung, Reparaturen, Garten und Winterdienst – ein Anruf genügt.'
    },
  ];

  return (
    <section className={styles.section} id="ueber-uns">
      <div className={`container ${styles.container}`}>
        <div className={styles.textCol}>
          <div className="section-badge">💪 Warum B&B?</div>
          <h2 className="section-title">
            Persönlich. Zuverlässig.<br/>
            <span className={styles.highlight}>Immer für Sie da.</span>
          </h2>
          <p className={styles.intro}>
            Wir sind Behit und sein Team – ein echtes Familienunternehmen aus Simmelsdorf. 
            Was uns antreibt? Die Überzeugung, dass guter Service persönlich sein muss. 
            Wir schenken Ihnen Zeit, indem wir Ihre Aufgaben mit Leidenschaft übernehmen.
          </p>
          <button className="btn btn-primary" onClick={() => {
            document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Jetzt kennenlernen →
          </button>
        </div>

        <div className={styles.cardsCol}>
          {reasons.map((r, i) => (
            <div key={i} className={styles.reasonCard}>
              <span className={styles.reasonIcon}>{r.icon}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
