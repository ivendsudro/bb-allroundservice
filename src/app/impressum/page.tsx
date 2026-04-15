import React from 'react';
import Link from 'next/link';
import ContactFooter from '@/components/ContactFooter';
import styles from './page.module.css';

export const metadata = {
  title: 'Impressum | B&B Allroundservice',
  description: 'Impressum und rechtliche Angaben für B&B Allroundservice.',
};

export default function Impressum() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        <div className={styles.backLink}>
          <Link href="/">← Zurück zur Startseite</Link>
        </div>
        
        <h1 className={styles.title}>Impressum</h1>
        <div className={styles.content}>
          <section>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Behit Berisa<br />
              B&B Allroundservice<br />
              Bühler Straße 10<br />
              91245 Simmelsdorf
            </p>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4917624702350">0176 2470 2350</a><br />
              E-Mail: <a href="mailto:bballrounddienst@gmail.com">bballrounddienst@gmail.com</a>
            </p>
          </section>

          <section>
            <h2>Redaktionell verantwortlich</h2>
            <p>
              Behit Berisa<br />
              Bühler Straße 10<br />
              91245 Simmelsdorf
            </p>
          </section>
        </div>
      </div>
      <ContactFooter />
    </main>
  );
}
