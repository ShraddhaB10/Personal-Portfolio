import { useInView } from "../hooks";
import styles from "./Skills.module.css";

function SkillCard({ category, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className={styles.cardTitle}>{category.label}</h3>
      <ul className={styles.tags} role="list">
        {category.skills.map((skill) => (
          <li key={skill} className={styles.tag}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills({ skillCategories }) {
  return (
    <section id="skills" className={styles.section}>
      <div className="section-inner">
        <span className="section-label">Technical Expertise</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>

        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
