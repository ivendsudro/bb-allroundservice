import React from 'react';
import styles from './ContactFooter.module.css';

export default function ContactFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.formWrapper}>
            <div className={`glass-panel ${styles.formPanel}`}>
              <h2>In 60 Sekunden zum Angebot</h2>
              <p>Beschreiben Sie kurz Ihr Anliegen. Wir melden uns umgehend bei Ihnen.</p>
              
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Ihr Name" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <input type="tel" placeholder="Telefonnummer" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <select className={styles.input} required defaultValue="">
                    <option value="" disabled>Gewünschte Leistung wählen</option>
                    <option value="reinigung">Gebäudereinigung</option>
                    <option value="garten">Gartenpflege</option>
                    <option value="hausmeister">Hausmeisterservice</option>
                    <option value="entruempelung">Entrümpelung / Umzug</option>
                    <option value="sonstiges">Sonstiges / Anfrage</option>
                  </select>
                </div>
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  Unverbindlich anfragen
                </button>
              </form>
            </div>
          </div>
          
          <div className={styles.infoWrapper}>
             <h2>Lassen Sie uns sprechen.</h2>
             <p className={styles.infoText}>
               Bevorzugen Sie den direkten Weg? Rufen Sie uns an oder schreiben Sie uns unkompliziert per WhatsApp.
             </p>
             
             <div className={styles.contactLinks}>
                <a href="tel:+4917624702350" className={styles.contactCard}>
                  <span className={styles.icon}>📞</span>
                  <div>
                    <span className={styles.label}>Rufen Sie uns an</span>
                    <span className={styles.value}>0176 2470 2350</span>
                  </div>
                </a>
                
                <a href="https://wa.me/4917624702350" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                  <span className={styles.icon}>💬</span>
                  <div>
                    <span className={styles.label}>WhatsApp Chat</span>
                    <span className={styles.value}>Direkt schreiben</span>
                  </div>
                </a>

                <a href="mailto:bballrounddienst@gmail.com" className={styles.contactCard}>
                  <span className={styles.icon}>✉️</span>
                  <div>
                    <span className={styles.label}>Email senden</span>
                    <span className={styles.value}>bballrounddienst@gmail.com</span>
                  </div>
                </a>
             </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomFooter}>
        <div className="container">
          <div className={styles.bottomFlex}>
            <div className={styles.brand}>
              <strong>B&B Allroundservice</strong>
              <span>© {new Date().getFullYear()} Alle Rechte vorbehalten.</span>
              <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7 }}>
                Einsatzgebiete: Lauf an der Pegnitz, Nürnberg, Röthenbach, Schnaittach, Hersbruck, Schwaig und das gesamte Nürnberger Land.
              </p>
            </div>
            <div className={styles.legalLinks}>
              <a href="/impressum">Impressum</a>
              <a href="#">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
