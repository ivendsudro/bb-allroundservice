'use client';
import React, { useState } from 'react';
import styles from './ServicesGrid.module.css';

const services = [
  {
    title: 'Gebäude\u00ADreinigung',
    tag: '01',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
    short: 'Büro · Treppe · Privathaushalt',
    details: 'Wir übernehmen die regelmäßige Unterhaltsreinigung, Fensterreinigung und Grundreinigung Ihrer Immobilie. Mit professionellem Equipment und geschultem Auge sorgen wir dafür, dass Ihr Objekt immer in bestem Glanz erstrahlt.'
  },
  {
    title: 'Reparaturen',
    tag: '02',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    short: 'Handwerk · Montage · Instandhaltung',
    details: 'Ein klemmendes Schloss? Eine kaputte Fußleiste? Löcher in der Wand? Wir machen das. Unser handwerkliches Geschick spart Ihnen teure Spezialfirmen für Kleinreparaturen am Haus.'
  },
  {
    title: 'Gartenpflege',
    tag: '03',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    short: 'Rasen · Hecke · Baumschnitt',
    details: 'Rasenmähen, Hecken schneiden, Unkraut jäten oder die Vorbereitung für Sommer/Winter: Wir nehmen Ihnen die schwere Gartenarbeit ab.'
  },
  {
    title: 'Winterdienst',
    tag: '04',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=800&q=80',
    short: 'Räumpflicht · Streuen · 24/7',
    details: 'Früh morgens, wenn Sie noch schlafen, räumen wir bereits den Schnee. Sichere Gehwege und Zufahrten – wir übernehmen die Räum- und Streupflicht.'
  },
];

export default function ServicesGrid() {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <section className={styles.section} id="leistungen">
      <div className={`container`}>
        <div className={`${styles.header} reveal`}>
          <span className="badge badge-blue">Leistungen</span>
          <h2>Was wir<br /><em>für Sie tun.</em></h2>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`} onClick={() => setModal(i)}>
              <div className={styles.imgWrap}>
                <img src={s.image} alt={s.title} />
                <div className={styles.imgOverlay}>
                  <span className={styles.tag}>{s.tag}</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{s.title}</h3>
                <span className={styles.cardSub}>{s.short}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal !== null && (
        <div className={styles.backdrop} onClick={() => setModal(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setModal(null)}>✕</button>
            <span className={styles.modalTag}>{services[modal].tag}</span>
            <h2>{services[modal].title}</h2>
            <p>{services[modal].details}</p>
            <button className="btn btn-primary" onClick={() => {
              setModal(null);
              document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Anfrage starten →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
