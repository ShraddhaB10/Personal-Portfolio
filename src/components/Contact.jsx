import { useInView } from "../hooks";
import styles from "./Contact.module.css";

const CONTACT_ITEMS = [
  {
    id: "email",
    icon: "✉️",
    label: "Email",
    getValue: (p) => p.email,
    getHref: (p) => `mailto:${p.email}`,
  },
  {
    id: "phone",
    icon: "📞",
    label: "Phone",
    getValue: (p) => p.phone,
    getHref: (p) => `tel:${p.phone.replace(/\D/g, "")}`,
  },
  {
    id: "linkedin",
    icon: "🔗",
    label: "LinkedIn",
    getValue: (p) => p.linkedin.replace("https://", ""),
    getHref: (p) => p.linkedin,
  },
];

export default function Contact({ profile }) {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className={styles.section}>
      <div className="section-inner">
        <span className={`section-label ${styles.label}`}>Get in Touch</span>
        <h2 className={`section-title ${styles.title}`}>Contact</h2>

        <div
          ref={ref}
          className={`${styles.row} reveal ${inView ? "visible" : ""}`}
        >
          {CONTACT_ITEMS.map(({ id, icon, label, getValue, getHref }) => (
            <a
              key={id}
              href={getHref(profile)}
              className={styles.item}
              target={id === "linkedin" ? "_blank" : undefined}
              rel={id === "linkedin" ? "noopener noreferrer" : undefined}
              aria-label={`${label}: ${getValue(profile)}`}
            >
              <div className={styles.iconBox} aria-hidden="true">{icon}</div>
              <div className={styles.text}>
                <span className={styles.itemLabel}>{label}</span>
                <span className={styles.itemValue}>{getValue(profile)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
