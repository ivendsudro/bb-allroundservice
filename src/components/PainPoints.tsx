import React from 'react';
import styles from './PainPoints.module.css';

export default function PainPoints() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.headline}>Haben Sie Besseres zu tun?</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            Überquellende Gartenarbeit? Ein Umzug, der Ihnen den Schlaf raubt? Oder eine Immobilie, die Glanz verliert? 
          </p>
          <p className={styles.text}>
            <strong>Wir wissen, dass Ihre Zeit kostbar ist.</strong>
          </p>
          <p className={styles.text}>
            Während Sie sich auf das Wesentliche konzentrieren, erledigen wir den Rest – 
            <span className={styles.highlight}> konsequent, zügig und mit familiärer Sorgfalt.</span>
          </p>
        </div>
        <div className={styles.imageWrapper}>
           {/* Abstract shape or soft image representing peace of mind / time saved */}
           <div className={`glass-panel ${styles.decorativePanel}`}>
              <div className={styles.timeIcon}>⏳</div>
              <h3>Wir schenken Ihnen Zeit</h3>
              <p>Überlassen Sie uns die Arbeit.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
