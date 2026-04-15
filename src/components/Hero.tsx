'use client';
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="start">
      {/* Background image */}
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
          alt="Professionelle Gebäudereinigung"
          className={styles.bgImg}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textCol}>
          <div className={styles.badge}>
            <span>✦</span> Ihr Allround-Partner im Nürnberger Land
          </div>
          <h1 className={styles.headline}>
            Saubere Räume.<br />
            <span className={styles.highlight}>Gepflegte Anlagen.</span><br />
            Alles aus einer Hand.
          </h1>
          <p className={styles.sub}>
            Von der Gebäudereinigung über Reparaturen bis zum Winterdienst – 
            wir kümmern uns um Ihr Zuhause und Ihre Immobilie in Lauf an der Pegnitz, 
            Nürnberg und dem gesamten Nürnberger Land.
          </p>
          <div className={styles.actions}>
            <button className="btn btn-primary btn-lg" onClick={() => scroll('kontakt')}>
              Kostenlos anfragen →
            </button>
            <a href="tel:+4917624702350" className="btn btn-secondary btn-lg">
              📞 0176 2470 2350
            </a>
          </div>
        </div>

        {/* Service highlights floating on right */}
        <div className={styles.serviceCards}>
          <div className={styles.serviceCard} onClick={() => scroll('leistungen')}>
            <div className={styles.scIcon}>🧹</div>
            <div>
              <strong>Gebäudereinigung</strong>
              <span>Büro, Treppe & Privathaushalt</span>
            </div>
          </div>
          <div className={styles.serviceCard} onClick={() => scroll('leistungen')}>
            <div className={styles.scIcon}>🔧</div>
            <div>
              <strong>Reparaturen</strong>
              <span>Fachgerecht & schnell</span>
            </div>
          </div>
          <div className={styles.serviceCard} onClick={() => scroll('leistungen')}>
            <div className={styles.scIcon}>🌿</div>
            <div>
              <strong>Gartenpflege</strong>
              <span>Schöner Garten das ganze Jahr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
