import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className="animate-fade-in">
          Ihr Zuhause in besten Händen –<br /> B&B Allroundservice erledigt das für Sie.
        </h1>
        <p className={`animate-fade-in ${styles.subline}`} style={{ animationDelay: '0.2s' }}>
          Von der <strong>Gebäudereinigung</strong> über handwerkliche <strong>Reparaturen</strong> bis zum Winterdienst: 
          Wir sind Ihr verlässlicher Partner in <strong>Lauf an der Pegnitz, Nürnberg</strong> und dem gesamten Nürnberger Land.
        </p>
        <div className={`animate-fade-in ${styles.actions}`} style={{ animationDelay: '0.4s' }}>
          <button className="btn btn-primary">Jetzt Angebot anfordern</button>
          <div className={styles.contactInfo}>
            <span className={styles.phoneIcon}>📞</span>
            <a href="tel:+4917624702350" className={styles.phoneNumber}>0176 2470 2350</a>
          </div>
        </div>
      </div>
    </section>
  );
}
