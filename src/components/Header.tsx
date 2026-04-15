'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand} onClick={() => scroll('start')}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>✦</span>
            <div>
              <span className={styles.logoName}>B&B Allroundservice</span>
              <span className={styles.logoSub}>Sauberkeit. Pflege. Service.</span>
            </div>
          </div>
        </div>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          <a onClick={() => scroll('start')}>Startseite</a>
          <a onClick={() => scroll('leistungen')}>Leistungen</a>
          <a onClick={() => scroll('galerie')}>Unsere Arbeit</a>
          <a onClick={() => scroll('ueber-uns')}>Über uns</a>
          <a onClick={() => scroll('kontakt')} className={`btn btn-primary ${styles.navCta}`}>
            Kontakt aufnehmen
          </a>
        </nav>

        <button className={styles.burger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
