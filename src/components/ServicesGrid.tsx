'use client';
import React, { useState } from 'react';
import styles from './ServicesGrid.module.css';

const services = [
  { title: 'Gebäudereinigung', icon: '✨', description: 'Strahlende Sauberkeit für Büro und Privathaushalt.', details: 'Wir übernehmen die regelmäßige Unterhaltsreinigung, Fensterreinigung und Grundreinigung Ihrer Immobilie. Mit professionellem Equipment und geschultem Auge sorgen wir dafür, dass Ihr Objekt immer in bestem Glanz erstrahlt.' },
  { title: 'Gartenpflege', icon: '🌿', description: 'Ihr grünes Paradies, professionell gepflegt.', details: 'Rasenmähen, Hecken schneiden, Unkraut jäten oder die Vorbereitung für Sommer/Winter: Wir nehmen Ihnen die schwere Gartenarbeit ab, damit Sie Ihre grüne Oase einfach nur genießen können.' },
  { title: 'Hausmeisterservice', icon: '🔧', description: 'Zuverlässig vor Ort, wenn Sie uns brauchen.', details: 'Unser Hausmeisterservice kümmert sich um die Kontrolle, Wartung und Pflege Ihres Gebäudes. Wir wechseln Leuchtmittel, prüfen die Haustechnik und sind direkter Ansprechpartner für Mieter und Eigentümer.' },
  { title: 'Entrümpelung', icon: '📦', description: 'Schnell und diskret Platz für Neues schaffen.', details: 'Ob Keller, Dachboden oder Wohnungsauflösung: Wir räumen zuverlässig, diskret und besenrein auf. Für eine fachgerechte Entsorgung nach den gesetzlichen Vorschriften bringen wir das Material sofort zum Recyclinghof.' },
  { title: 'Umzüge', icon: '🚚', description: 'Stressfrei und sicher ins neue Zuhause.', details: 'Wir packen an! Vom Transport schwerer Möbel bis zur Unterstützung beim Auf- und Abbau. Unser Umzugsservice ist kosteneffizient und sicher, damit Ihr Objekt unbeschädigt ankommt.' },
  { title: 'Winterdienst', icon: '❄️', description: 'Sichere Wege und Zufahrten bei Eis und Schnee.', details: 'Früh morgens, wenn Sie noch schlafen, räumen wir bereits den Schnee. Wir sorgen für sichere, gestreute Gehwege und Zufahrten und übernehmen die rechtliche Verantwortung der Räum- und Streupflicht.' },
  { title: 'Reparaturen & Kleinstbau', icon: '🔨', description: 'Das "Alles-aus-einer-Hand"-Prinzip für Ihr Haus.', details: 'Ein klemmendes Schloss? Eine kaputte Fußleiste? Löcher in der Wand? Wir machen das. Unser handwerkliches Geschick spart Ihnen teure Spezialfirmen für Kleinreparaturen am Haus.' },
];

export default function ServicesGrid() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section className={styles.section} id="leistungen">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Unser Allround-Portfolio</h2>
          <p>Ein Ansprechpartner für alle Aufgaben. Klicken Sie auf eine Leistung für mehr Infos.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`glass-panel ${styles.card}`} onClick={() => setActiveModal(index)}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.moreLink}>Mehr erfahren &rarr;</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {activeModal !== null && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModal(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveModal(null)}>×</button>
            <div className={styles.modalIcon}>{services[activeModal].icon}</div>
            <h2>{services[activeModal].title}</h2>
            <p className={styles.modalDesc}>{services[activeModal].details}</p>
            <button 
               className={`btn btn-primary ${styles.modalAction}`} 
               onClick={() => {
                 setActiveModal(null);
                 document.getElementById('kontakt')?.scrollIntoView({behavior: 'smooth'});
               }}
            >
               Anfragen
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
