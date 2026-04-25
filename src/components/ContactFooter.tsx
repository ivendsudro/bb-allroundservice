import React from 'react';
import styles from './ContactFooter.module.css';

export default function ContactFooter() {
  return (
    <footer id="kontakt">
      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaInner}`}>
          <div className="reveal">
            <h2>Bereit für ein<br /><em>sauberes Ergebnis?</em></h2>
            <p>Kontaktieren Sie uns jetzt – kostenlos und unverbindlich.</p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          {/* Left: Quick Contact */}
          <div className="reveal">
            <span className="badge badge-blue">Kontakt</span>
            <h2 className={styles.contactHeading}>Sprechen wir<br />darüber.</h2>

            <div className={styles.links}>
              <a href="tel:+4917624702350" className={styles.linkCard}>
                <span className={styles.linkIcon}>📞</span>
                <div>
                  <span className={styles.linkLabel}>Anrufen</span>
                  <span className={styles.linkValue}>0176 2470 2350</span>
                </div>
                <span className={styles.linkArrow}>→</span>
              </a>
              <a href="https://wa.me/4917624702350" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
                <span className={styles.linkIcon}>💬</span>
                <div>
                  <span className={styles.linkLabel}>WhatsApp</span>
                  <span className={styles.linkValue}>Chat starten</span>
                </div>
                <span className={styles.linkArrow}>→</span>
              </a>
              <a href="mailto:bballrounddienst@gmail.com" className={styles.linkCard}>
                <span className={styles.linkIcon}>✉️</span>
                <div>
                  <span className={styles.linkLabel}>E-Mail</span>
                  <span className={styles.linkValue}>bballrounddienst@gmail.com</span>
                </div>
                <span className={styles.linkArrow}>→</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`${styles.formWrap} reveal reveal-delay-2`}>
            <h3>Anfrage senden</h3>
            <form action="https://formsubmit.co/bballrounddienst@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="Neue Anfrage über B&B Website!" />
              <input type="hidden" name="_template" value="table" />

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>Name*</label>
                  <input type="text" name="Name" placeholder="Ihr Name" required />
                </div>
                <div className={styles.field}>
                  <label>Telefon*</label>
                  <input type="tel" name="Telefon" placeholder="0176..." required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>Firma (Optional)</label>
                  <input type="text" name="Firma" placeholder="Firmenname" />
                </div>
                <div className={styles.field}>
                  <label>E-Mail (Optional)</label>
                  <input type="email" name="Email" placeholder="beispiel@mail.de" />
                </div>
              </div>

              <div className={styles.field}>
                <label>Leistung*</label>
                <select name="Leistung" required defaultValue="">
                  <option value="" disabled>Bitte wählen...</option>
                  <option value="reinigung">Gebäudereinigung</option>
                  <option value="garten">Gartenpflege</option>
                  <option value="reparatur">Reparaturen</option>
                  <option value="hausmeister">Hausmeisterservice</option>
                  <option value="winterdienst">Winterdienst</option>
                  <option value="entruempelung">Entrümpelung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Nachricht</label>
                <textarea name="Nachricht" placeholder="Beschreiben Sie kurz Ihr Anliegen..." rows={3}></textarea>
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Anfrage absenden →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.bottomBrand}>
            <strong>B&B Service</strong>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <p className={styles.bottomAreas}>
            <strong>B&B Service · 91245 Simmelsdorf</strong><br />
            Lauf a.d. Pegnitz · Nürnberg · Röthenbach · Schnaittach · Hersbruck · Schwaig · Simmelsdorf
          </p>
          <div className={styles.bottomLinks}>
            <a href="/impressum">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
