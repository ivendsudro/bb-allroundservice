import React from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {
  // Placeholders that the user can replace
  const projects = [
    { title: "Gartenpflege", before: "https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&w=400&q=80" },
    { title: "Fassadenreinigung", before: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=400&q=80" },
    { title: "Treppenhaus Reinigung", before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <section className={styles.section} id="galerie">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Unsere Arbeit</h2>
          <p>Überzeugen Sie sich selbst. Ein kleiner Einblick in unsere Projekte (Vorher / Nachher).</p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <div className={styles.placeholder}>
                  <span>Dein Foto einsetzen</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>Platzhalter für Ihr Vorher/Nachher Beispiel</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
