import styles from "./Footer.module.css";

export default function Footer({ profile }) {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>{profile.name}</span>
      {" · "}
      {profile.title}
      {" · "}
      {profile.location}
    </footer>
  );
}
