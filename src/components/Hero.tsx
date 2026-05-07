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
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <div className={styles.eyebrow}>
              <span className={styles.dot} />
              Familienunternehmen aus Simmelsdorf
            </div>

            <h1 className={styles.headline}>
              Wir machen das<br />
              <span className={styles.outline}>für Sie.</span>
            </h1>

            <p className={styles.sub}>
              <strong>Bärenstarke Betreuung rund um Haus und Garten.</strong><br />
              Professionelle Gebäudereinigung, Gartenpflege & Reparaturen im Nürnberger Land.
            </p>

            <div className={styles.actions}>
              <button className="btn btn-primary" onClick={() => go('kontakt')}>
                Kostenloses Angebot →
              </button>
              <a href="tel:+4917624702350" className={`btn btn-white`}>
                📞 0176 2470 2350
              </a>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              {/* Central Glowing Orb */}
              <div className={styles.centralGlow} />

              {/* Main Bear Image */}
              <img
                src="/hero-baer.png-removebg-preview.png"
                alt="B&B Service - Bärenstarke Betreuung rund um Haus und Garten"
                className={styles.heroImage}
              />

              {/* Floating Service Badges */}
              <div className={`${styles.floatingBadge} ${styles.badge1}`}>
                <span className={styles.badgeIcon}>✨</span>
                <span>Gebäudereinigung</span>
              </div>
              
              <div className={`${styles.floatingBadge} ${styles.badge2}`}>
                <span className={styles.badgeIcon}>📦</span>
                <span>Entrümpelung</span>
              </div>

              <div className={`${styles.floatingBadge} ${styles.badge3}`}>
                <span className={styles.badgeIcon}>🌿</span>
                <span>Gartenpflege</span>
              </div>

              <div className={`${styles.floatingBadge} ${styles.badge4}`}>
                <span className={styles.badgeIcon}>🛠️</span>
                <span>Hausmeisterservice</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span>Entdecken</span>
        </div>
      </div>
    </section>
  );
}
