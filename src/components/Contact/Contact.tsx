import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";

const TELEGRAM_URL = "https://t.me/channelminerov";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={styles.contact}
    >
      <Reveal className={styles.container}>
        <p className={styles.kicker}>05 — Contact</p>
        <h2 id="contact-title" className={styles.title}>
          Let&rsquo;s Work Together
        </h2>
        <div className={styles.body}>
          <p className={styles.lede}>
            Looking for a designer for your brand, social media, website,
            advertising campaign, or visual identity?
          </p>
          <p className={styles.text}>
            Feel free to get in touch. Let&rsquo;s create something that makes
            your project stand out.
          </p>
        </div>
        <Button href={TELEGRAM_URL} variant="light">
          Contact Me
        </Button>
      </Reveal>
    </section>
  );
}
