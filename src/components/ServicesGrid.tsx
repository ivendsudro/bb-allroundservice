'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ServicesGrid.module.css';

const services = [
  {
    title: 'Gebäude\u00ADreinigung',
    tag: '01',
    image: '/baer-reinigung.png',
    alt: 'B&B Bär bei der Gebäudereinigung',
    bgClass: styles.imgBg0,
    modalBg: 'linear-gradient(180deg, #ffffff 0%, #EBF5FF 60%, #DBEAFE 100%)',
    short: 'Büro · Treppe · Privathaushalt',
    desc: 'Wir reinigen Treppenhäuser, Büroräume und Privathaushalte – gründlich, zuverlässig und zu fairen Festpreisen.',
    details: 'Wir übernehmen die regelmäßige Unterhaltsreinigung, Fensterreinigung und Grundreinigung Ihrer Immobilie. Mit professionellem Equipment und geschultem Auge sorgen wir dafür, dass Ihr Objekt immer in bestem Glanz erstrahlt.',
    features: ['Unterhaltsreinigung', 'Fensterreinigung', 'Grundreinigung', 'Büroreinigung'],
  },
  {
    title: 'Hausmeister\u00ADservice',
    tag: '02',
    image: '/baer-hausmeister.png',
    alt: 'B&B Bär als Hausmeister mit Werkzeug',
    bgClass: styles.imgBg1,
    modalBg: 'linear-gradient(180deg, #ffffff 0%, #F1F5F9 60%, #E8ECF1 100%)',
    short: 'Handwerk · Montage · Instandhaltung',
    desc: 'Von der losen Schraube bis zur kompletten Instandhaltung – wir erledigen Handwerksarbeiten aller Art schnell und sauber.',
    details: 'Ein klemmendes Schloss? Eine kaputte Fußleiste? Löcher in der Wand? Wir machen das. Unser handwerkliches Geschick spart Ihnen teure Spezialfirmen für Kleinreparaturen am Haus.',
    features: ['Reparaturen', 'Montage', 'Wartung', 'Kontrolle'],
  },
  {
    title: 'Gartenpflege',
    tag: '03',
    image: '/baer-garten.png',
    alt: 'B&B Bär bei der Gartenpflege mit Rasentrimmer',
    bgClass: styles.imgBg2,
    modalBg: 'linear-gradient(180deg, #ffffff 0%, #ECFDF5 60%, #D1FAE5 100%)',
    short: 'Rasen · Hecke · Baumschnitt',
    desc: 'Rasenmähen, Heckenschnitt, Laubentfernung und Frühjahrsreinigung – Ihr Garten ist bei uns in guten Händen.',
    details: 'Rasenmähen, Hecken schneiden, Unkraut jäten oder die Vorbereitung für Sommer/Winter: Wir nehmen Ihnen die schwere Gartenarbeit ab.',
    features: ['Rasenmähen', 'Heckenschnitt', 'Laubentfernung', 'Baumschnitt'],
  },
  {
    title: 'Winterdienst',
    tag: '04',
    image: '/baer-winterdienst.png',
    alt: 'B&B Bär beim Schneeräumen im Winterdienst',
    bgClass: styles.imgBg3,
    modalBg: 'linear-gradient(180deg, #ffffff 0%, #F0F9FF 60%, #E0F2FE 100%)',
    short: 'Räumpflicht · Streuen · 24/7',
    desc: 'Wir übernehmen Ihre Räumpflicht – Schneeräumen und Streuen für sichere Wege, auch an Wochenenden und Feiertagen.',
    details: 'Früh morgens, wenn Sie noch schlafen, räumen wir bereits den Schnee. Sichere Gehwege und Zufahrten – wir übernehmen die Räum- und Streupflicht.',
    features: ['Schneeräumen', 'Streupflicht', 'Wochenende', 'Feiertage'],
  },
];

const featuredService = {
  title: 'Entrümpelung',
  tag: 'Top-Service',
  image: '/baer-entruempelung.png',
  alt: 'B&B Bär bei der Entrümpelung mit Umzugskartons',
  modalBg: 'linear-gradient(135deg, #f8fafc 0%, #e8ecf1 100%)',
  short: 'Haushaltsauflösung · Sperrmüll · Räumung',
  desc: 'Keller, Dachboden, Garage oder ganze Wohnung – wir entrümpeln schnell, diskret und umweltgerecht. Sie lehnen sich zurück, wir schaffen Platz.',
  details: 'Ob Haushaltsauflösung, Sperrmüllentsorgung oder Räumung nach Umzug – wir kümmern uns um alles. Von der Begutachtung über das fachgerechte Entsorgen bis hin zur besenreinen Übergabe.',
  features: ['Haushaltsauflösung', 'Sperrmüll', 'Kellerräumung', 'Besenreine Übergabe'],
};

export default function ServicesGrid() {
  const [modal, setModal] = useState<number | null>(null);
  const [featuredModal, setFeaturedModal] = useState(false);

  // Get the currently selected service for modal
  const activeService = modal !== null ? services[modal] : null;

  return (
    <section className={styles.section} id="leistungen">
      <div className={`container`}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className="badge badge-blue">Leistungen</span>
          <h2>Was wir<br /><em>für Sie tun.</em></h2>
          <p className={styles.subtitle}>
            Fünf Kernleistungen, ein Ansprechpartner. Wir kümmern uns um alles rund um Ihre Immobilie&nbsp;–&nbsp;zuverlässig und zu fairen Preisen.
          </p>
        </div>

        {/* Featured Service – Entrümpelung */}
        <button
          type="button"
          className={`${styles.featured} reveal`}
          onClick={() => setFeaturedModal(true)}
          aria-label={`Top-Service: ${featuredService.title} – Details anzeigen`}
        >
          <div className={styles.featuredInner}>
            <div className={styles.featuredContent}>
              <span className={styles.featuredTag}>{featuredService.tag}</span>
              <h3>{featuredService.title}</h3>
              <p className={styles.featuredDesc}>{featuredService.desc}</p>
              <button className={styles.featuredBtn}>
                Mehr erfahren <span>→</span>
              </button>
            </div>
            <div className={styles.featuredImgWrap}>
              <Image
                src={featuredService.image}
                alt={featuredService.alt}
                width={500}
                height={500}
                style={{ width: 'auto', height: '100%', maxHeight: '380px' }}
                priority
              />
            </div>
          </div>
        </button>

        {/* Service Grid – 2×2 */}
        <div className={styles.grid}>
          {services.map((s, i) => (
            <button
              key={i}
              className={`${styles.card} reveal reveal-delay-${i + 1}`}
              onClick={() => setModal(i)}
              type="button"
              aria-label={`${s.title} – Details anzeigen`}
            >
              <div className={`${styles.imgWrap} ${s.bgClass}`}>
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={400}
                  height={400}
                  style={{ width: 'auto', height: '100%', maxHeight: '280px', objectFit: 'contain' }}
                />
                <div className={styles.imgOverlay}>
                  <span className={styles.tag}>{s.tag}</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{s.title}</h3>
                <span className={styles.cardSub}>{s.short}</span>
                <div className={styles.cardChips} aria-hidden="true">
                  {s.features.slice(0, 3).map((f, j) => (
                    <span key={j} className={styles.cardChip}>{f}</span>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.cardLink}>Details ansehen</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal – Regular Services */}
      {activeService && (
        <div className={styles.backdrop} onClick={() => setModal(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setModal(null)}>✕</button>
            <div className={styles.modalImgWrap} style={{ background: activeService.modalBg }}>
              <Image
                src={activeService.image}
                alt={activeService.alt}
                width={300}
                height={300}
                style={{ width: 'auto', height: '100%', maxHeight: '220px', objectFit: 'contain' }}
              />
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalTag}>{activeService.tag} — {activeService.short}</span>
              <h2>{activeService.title}</h2>
              <p className={styles.modalDetails}>{activeService.details}</p>
              <div className={styles.modalFeatures}>
                {activeService.features.map((f, j) => (
                  <span key={j} className={styles.modalFeatureTag}>{f}</span>
                ))}
              </div>
              <button className="btn btn-primary" onClick={() => {
                setModal(null);
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Anfrage starten →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal – Featured (Entrümpelung) */}
      {featuredModal && (
        <div className={styles.backdrop} onClick={() => setFeaturedModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setFeaturedModal(false)}>✕</button>
            <div className={styles.modalImgWrap} style={{ background: featuredService.modalBg }}>
              <Image
                src={featuredService.image}
                alt={featuredService.alt}
                width={300}
                height={300}
                style={{ width: 'auto', height: '100%', maxHeight: '220px', objectFit: 'contain' }}
              />
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalTag}>{featuredService.tag} — {featuredService.short}</span>
              <h2>{featuredService.title}</h2>
              <p className={styles.modalDetails}>{featuredService.details}</p>
              <div className={styles.modalFeatures}>
                {featuredService.features.map((f, j) => (
                  <span key={j} className={styles.modalFeatureTag}>{f}</span>
                ))}
              </div>
              <button className="btn btn-primary" onClick={() => {
                setFeaturedModal(false);
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Anfrage starten →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
