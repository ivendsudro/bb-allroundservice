'use client';
import React, { useState } from 'react';
import styles from './ServicesGrid.module.css';

const services = [
  {
    title: 'Gebäudereinigung',
    icon: '🧹',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80',
    description: 'Saubere Räume für Ihr Wohlbefinden und Hygiene.',
    details: 'Wir übernehmen die regelmäßige Unterhaltsreinigung, Fensterreinigung und Grundreinigung Ihrer Immobilie. Mit professionellem Equipment und geschultem Auge sorgen wir dafür, dass Ihr Objekt immer in bestem Glanz erstrahlt.'
  },
  {
    title: 'Reparaturen',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    description: 'Fachgerechte Reparaturen für Ihr Zuhause und Garten.',
    details: 'Ein klemmendes Schloss? Eine kaputte Fußleiste? Löcher in der Wand? Wir machen das. Unser handwerkliches Geschick spart Ihnen teure Spezialfirmen für Kleinreparaturen am Haus.'
  },
  {
    title: 'Gartenpflege',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=600&q=80',
    description: 'Schöner Garten das ganze Jahr.',
    details: 'Rasenmähen, Hecken schneiden, Unkraut jäten oder die Vorbereitung für Sommer/Winter: Wir nehmen Ihnen die schwere Gartenarbeit ab, damit Sie Ihre grüne Oase einfach nur genießen können.'
  },
  {
    title: 'Hausmeisterservice',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    description: 'Zuverlässig vor Ort, wenn Sie uns brauchen.',
    details: 'Unser Hausmeisterservice kümmert sich um die Kontrolle, Wartung und Pflege Ihres Gebäudes. Wir wechseln Leuchtmittel, prüfen die Haustechnik und sind direkter Ansprechpartner für Mieter und Eigentümer.'
  },
  {
    title: 'Entrümpelung & Umzug',
    icon: '📦',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    description: 'Schnell und diskret Platz für Neues schaffen.',
    details: 'Ob Keller, Dachboden oder Wohnungsauflösung: Wir räumen zuverlässig, diskret und besenrein auf. Für eine fachgerechte Entsorgung bringen wir das Material sofort zum Recyclinghof.'
  },
  {
    title: 'Winterdienst',
    icon: '❄️',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=600&q=80',
    description: 'Sichere Wege bei Eis und Schnee.',
    details: 'Früh morgens, wenn Sie noch schlafen, räumen wir bereits den Schnee. Wir sorgen für sichere, gestreute Gehwege und Zufahrten und übernehmen die Räum- und Streupflicht.'
  },
];

export default function ServicesGrid() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section className={styles.section} id="leistungen">
      <div className={`container`}>
        <div className={styles.header}>
          <div className="section-badge">✦ Unsere Dienstleistungen</div>
          <h2 className="section-title">Vielfältige Services für<br />Privatkunden und Firmen</h2>
          <p className="section-subtitle">
            Reinigung, Reparaturen und Gartenpflege aus einer Hand – zuverlässig und professionell.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card} onClick={() => setActiveModal(i)}>
              <div className={styles.cardImage}>
                <img src={s.image} alt={s.title} />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardIcon}>{s.icon}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <span className={styles.cardLink}>Mehr erfahren →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal !== null && (
        <div className={styles.backdrop} onClick={() => setActiveModal(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setActiveModal(null)}>✕</button>
            <div className={styles.modalHeader}>
              <span className={styles.modalIcon}>{services[activeModal].icon}</span>
              <h2>{services[activeModal].title}</h2>
            </div>
            <p className={styles.modalText}>{services[activeModal].details}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setActiveModal(null);
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Jetzt anfragen →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
