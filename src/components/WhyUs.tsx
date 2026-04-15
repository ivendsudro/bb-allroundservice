import React from 'react';
import styles from './WhyUs.module.css';

const reasons = [
  {
    number: '01',
    title: 'Familiäre Werte',
    description: 'Wir begegnen Ihnen auf Augenhöhe. Ehrlichkeit, Transparenz und ein persönliches Miteinander stehen bei uns an erster Stelle.',
  },
  {
    number: '02',
    title: 'Blitzschnelle Umsetzung',
    description: 'Wo andere noch planen, packen wir schon an. Wir wissen, dass manche Aufgaben keinen Aufschub dulden.',
  },
  {
    number: '03',
    title: 'Alles aus einer Hand',
    description: 'Sparen Sie sich die mühsame Koordination von 5 verschiedenen Firmen. Wir lösen Ihre Probleme ganzheitlich.',
  }
];

export default function WhyUs() {
  return (
    <section className={styles.section} id="ueber-uns">
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <h2>Warum B&B Allroundservice?</h2>
          <p className={styles.intro}>
            Wir sind nicht nur ein Dienstleister, sondern Ihr Partner vor Ort im Nürnberger Land. 
            Mit Hand, Herz und Verstand sorgen wir dafür, dass Sie sich entspannt zurücklehnen können.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.number}>{reason.number}</div>
              <div className={styles.content}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
