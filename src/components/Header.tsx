'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo} onClick={(e) => smoothScroll(e, 'start')} style={{cursor: 'pointer'}}>
          B&B Allroundservice
        </div>
        <nav className={styles.nav}>
          <a href="#start" onClick={(e) => smoothScroll(e, 'start')}>Startseite</a>
          <a href="#leistungen" onClick={(e) => smoothScroll(e, 'leistungen')}>Dienstleistungen</a>
          <a href="#galerie" onClick={(e) => smoothScroll(e, 'galerie')}>Unsere Arbeit</a>
          <a href="#ueber-uns" onClick={(e) => smoothScroll(e, 'ueber-uns')}>Über uns</a>
          <a href="#kontakt" onClick={(e) => smoothScroll(e, 'kontakt')} className={styles.ctaButton}>Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
