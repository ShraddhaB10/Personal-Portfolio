import styles from "./Hero.module.css";

export default function Hero({ profile, stats }) {
  return (
    <section id="hero" className={styles.hero}>
      {/* Ambient glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.statusBadge}>{profile.status}</span>

        <h1 className={styles.headline}>
          Software Development<br />
          Engineer <em>&amp; Builder</em>
        </h1>

        <p className={styles.bio}>{profile.tagline}</p>

        <div className={styles.ctas}>
          <a href="#experience" className="btn btn-primary">View My Work</a>
          <a href="#contact"    className="btn btn-outline">Get in Touch</a>
        </div>

        {/* Stats row */}
        <div className={styles.statsRow} role="list">
          {stats.map(({ value, label }) => (
            <div key={label} className={styles.stat} role="listitem">
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
