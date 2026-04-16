import React from 'react';
import styles from './Marquee.module.css';

export default function Marquee() {
  const items = [
    'Gebäudereinigung', 'Reparaturen', 'Gartenpflege', 'Hausmeisterservice',
    'Winterdienst', 'Entrümpelung', 'Umzugshilfe', 'Fensterreinigung',
    'Gebäudereinigung', 'Reparaturen', 'Gartenpflege', 'Hausmeisterservice',
    'Winterdienst', 'Entrümpelung', 'Umzugshilfe', 'Fensterreinigung',
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
