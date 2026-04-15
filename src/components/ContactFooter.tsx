import React from 'react';
import styles from './ContactFooter.module.css';

export default function ContactFooter() {
  return (
    <footer className={styles.footer} id="kontakt">
      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          {/* Left: Info */}
          <div className={styles.infoCol}>
            <div className="section-badge" style={{ background: 'rgba(0,85,255,0.1)' }}>✉️ Kontakt</div>
            <h2 className="section-title">Lassen Sie uns<br/>sprechen.</h2>
            <p className={styles.infoText}>
              Beschreiben Sie kurz Ihr Anliegen oder rufen Sie uns direkt an. 
              Wir melden uns umgehend bei Ihnen.
            </p>
            
            <div className={styles.contactCards}>
              <a href="tel:+4917624702350" className={styles.contactCard}>
                <span className={styles.ccIcon}>📞</span>
                <div>
                  <span className={styles.ccLabel}>Telefon</span>
                  <span className={styles.ccValue}>0176 2470 2350</span>
                </div>
              </a>
              <a href="https://wa.me/4917624702350" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <span className={styles.ccIcon}>💬</span>
                <div>
                  <span className={styles.ccLabel}>WhatsApp</span>
                  <span className={styles.ccValue}>Direkt schreiben</span>
                </div>
              </a>
              <a href="mailto:bballrounddienst@gmail.com" className={styles.contactCard}>
                <span className={styles.ccIcon}>✉️</span>
                <div>
                  <span className={styles.ccLabel}>E-Mail</span>
                  <span className={styles.ccValue}>bballrounddienst@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3>Kostenlos & unverbindlich anfragen</h3>
              <form action="https://formsubmit.co/bballrounddienst@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Neue Anfrage über B&B Website!" />
                <input type="hidden" name="_template" value="table" />
                
                <div className={styles.formGroup}>
                  <label>Ihr Name</label>
                  <input type="text" name="Name" placeholder="Max Mustermann" required className={styles.input} />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Telefon</label>
                    <input type="tel" name="Telefon" placeholder="0176..." required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>E-Mail</label>
                    <input type="email" name="Email" placeholder="max@beispiel.de" className={styles.input} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Gewünschte Leistung</label>
                  <select className={styles.input} name="Leistung" required defaultValue="">
                    <option value="" disabled>Bitte wählen...</option>
                    <option value="reinigung">Gebäudereinigung</option>
                    <option value="garten">Gartenpflege</option>
                    <option value="hausmeister">Hausmeisterservice</option>
                    <option value="reparatur">Reparaturen</option>
                    <option value="entruempelung">Entrümpelung / Umzug</option>
                    <option value="winterdienst">Winterdienst</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Nachricht (optional)</label>
                  <textarea name="Nachricht" placeholder="Beschreiben Sie kurz Ihr Anliegen..." rows={3} className={styles.input}></textarea>
                </div>
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  Unverbindlich anfragen →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <div>
            <strong className={styles.brandName}>B&B Allroundservice</strong>
            <span className={styles.copy}>© {new Date().getFullYear()} Alle Rechte vorbehalten.</span>
          </div>
          <p className={styles.areas}>
            Einsatzgebiete: Lauf a.d. Pegnitz · Nürnberg · Röthenbach · Schnaittach · Hersbruck · Schwaig · Simmelsdorf
          </p>
          <div className={styles.legal}>
            <a href="/impressum">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
