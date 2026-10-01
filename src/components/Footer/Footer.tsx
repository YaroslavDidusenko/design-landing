import styles from "./Footer.module.css";

const TELEGRAM_URL = "https://t.me/channelminerov";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>© 2026 Alexey. All rights reserved.</p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Telegram
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
