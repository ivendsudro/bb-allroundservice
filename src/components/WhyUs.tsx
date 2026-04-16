'use client';
import React from 'react';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section className={styles.section} id="ueber-uns">
      <div className={`container ${styles.container}`}>
        <div className={`${styles.left} reveal`}>
          <span className="badge badge-mint">Über uns</span>
          <h2>Persönlich.<br />Zuverlässig.<br /><em>Immer für Sie da.</em></h2>
        </div>

        <div className={styles.right}>
          <div className={`${styles.block} reveal reveal-delay-1`}>
            <span className={styles.num}>01</span>
            <div>
              <h3>Familienunternehmen</h3>
              <p>Als familiengeführtes Unternehmen stehen wir persönlich für jede Arbeit ein. Bei uns sind Sie kein Ticket – Sie sind ein Nachbar.</p>
            </div>
          </div>
          <div className={`${styles.block} reveal reveal-delay-2`}>
            <span className={styles.num}>02</span>
            <div>
              <h3>Alles aus einer Hand</h3>
              <p>Kein Suchen nach mehreren Firmen. Reinigung, Reparaturen, Garten und Winterdienst – ein Anruf genügt.</p>
            </div>
          </div>
          <div className={`${styles.block} reveal reveal-delay-3`}>
            <span className={styles.num}>03</span>
            <div>
              <h3>Schnell & Flexibel</h3>
              <p>Kurze Wege, schnelle Reaktionszeiten. Wir sind in der Regel innerhalb von 24 Stunden für Sie da.</p>
            </div>
          </div>
          <div className={`${styles.block} reveal reveal-delay-4`}>
            <span className={styles.num}>04</span>
            <div>
              <h3>Fair & Transparent</h3>
              <p>Keine versteckten Kosten, keine bösen Überraschungen. Sie wissen vorher, was es kostet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
