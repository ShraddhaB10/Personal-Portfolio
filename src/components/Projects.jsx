import { useInView } from "../hooks";
import styles from "./Projects.module.css";

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.icon} aria-hidden="true">{project.icon}</div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.stack}>{project.stack.join(" · ")}</p>
      <p className={styles.description}>{project.description}</p>
    </div>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-inner">
        <span className="section-label">Selected Work</span>
        <h2 className="section-title">Projects</h2>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
