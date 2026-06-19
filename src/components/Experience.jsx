import { useInView } from "../hooks";
import styles from "./Experience.module.css";

function ExperienceCard({ job, index }) {
  const [ref, inView] = useInView();
  const isIntern = job.type === "Internship";

  return (
    <div
      ref={ref}
      className={`${styles.item} reveal ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline dot */}
      <div
        className={styles.dot}
        style={isIntern ? { background: "var(--gold)", boxShadow: "0 0 0 3px var(--gold)" } : undefined}
        aria-hidden="true"
      />

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.role}>{job.role}</h3>
            <p className={styles.period}>
              {job.period} · <span className={styles.type}>{job.type}</span>
            </p>
          </div>
          <span className={styles.companyBadge}>{job.company}</span>
        </div>

        <ul className={styles.highlights}>
          {job.highlights.map((h) => (
            <li key={h.title}>
              <strong className={styles.highlightTitle}>{h.title}</strong>
              {" — "}
              <span className={styles.highlightDesc}>{h.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience({ experience }) {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-inner">
        <span className="section-label">Career Journey</span>
        <h2 className="section-title">Work Experience</h2>

        <div className={styles.timeline} role="list">
          {experience.map((job, i) => (
            <ExperienceCard key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
