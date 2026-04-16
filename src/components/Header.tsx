'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand} onClick={() => go('hero')}>
          <span className={styles.mark}>B&B</span>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Allroundservice</span>
            <span className={styles.brandTag}>Nürnberger Land</span>
          </div>
        </div>

        <nav className={`${styles.nav} ${mobileOpen ? styles.open : ''}`}>
          <a onClick={() => go('leistungen')}>Leistungen</a>
          <a onClick={() => go('galerie')}>Projekte</a>
          <a onClick={() => go('ueber-uns')}>Über uns</a>
          <a onClick={() => go('kontakt')} className={`btn btn-primary ${styles.cta}`}>Anfrage starten</a>
        </nav>

        <button className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
