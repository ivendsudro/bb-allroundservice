import React from 'react';
import styles from './ServicesGrid.module.css';

const services = [
  { title: 'Gebäudereinigung', icon: '✨', description: 'Strahlende Sauberkeit für Büro und Privathaushalt.' },
  { title: 'Gartenpflege', icon: '🌿', description: 'Ihr grünes Paradies, professionell gepflegt.' },
  { title: 'Hausmeisterservice', icon: '🔧', description: 'Zuverlässig vor Ort, wenn Sie uns brauchen.' },
  { title: 'Entrümpelung', icon: '📦', description: 'Schnell und diskret Platz für Neues schaffen.' },
  { title: 'Umzüge', icon: '🚚', description: 'Stressfrei und sicher ins neue Zuhause.' },
  { title: 'Winterdienst', icon: '❄️', description: 'Sichere Wege und Zufahrten bei Eis und Schnee.' },
  { title: 'Reparaturen & Kleinstbau', icon: '🔨', description: 'Das "Alles-aus-einer-Hand"-Prinzip für Ihr Haus.' },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Unser Allround-Portfolio</h2>
          <p>Ein Ansprechpartner für alle Aufgaben. Wir machen das.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
