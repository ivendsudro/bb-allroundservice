'use client';
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
          alt="Professionelle Gebäudereinigung"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Familienunternehmen aus Simmelsdorf
        </div>

        <h1 className={styles.headline}>
          Wir machen das<br />
          <span className={styles.outline}>für Sie.</span>
        </h1>

        <p className={styles.sub}>
          Gebäudereinigung · Reparaturen · Gartenpflege · Winterdienst<br />
          <strong>Ihr Allround-Partner im Nürnberger Land.</strong>
        </p>

        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={() => go('kontakt')}>
            Kostenloses Angebot →
          </button>
          <a href="tel:+4917624702350" className={`btn btn-white`}>
            📞 0176 2470 2350
          </a>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span>Entdecken</span>
        </div>
      </div>
    </section>
  );
}
