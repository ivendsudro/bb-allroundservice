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
            <a href="tel:+49123456789" className={styles.phoneNumber}>0123 / 456 789 0</a>
          </div>
        </div>
      </div>
    </section>
  );
}
