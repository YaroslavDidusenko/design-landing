import Button from "@/components/Button/Button";
import styles from "./Hero.module.css";

const TELEGRAM_URL = "https://t.me/channelminerov";

export default function Hero() {
  return (
    <section id="about" aria-labelledby="hero-title" className={styles.hero}>
      <div className={styles.container}>
        <p className={`load-fade ${styles.kicker}`}>Designer — Portfolio</p>
        <h1 id="hero-title" className={`load-fade ${styles.title}`}>
          Hi, I&rsquo;m Alexey
        </h1>
        <p className={`load-fade ${styles.lede}`}>
          I&rsquo;m a designer focused on creating modern, professional, and
          visually engaging solutions that help brands and projects stand out.
        </p>
        <p className={`load-fade ${styles.sub}`}>
          For me, design is more than just making something look good. I focus
          on composition, typography, color, visual hierarchy, and details to
          make every element purposeful and effective.
        </p>
        <div className={`load-fade ${styles.action}`}>
          <Button href={TELEGRAM_URL}>View My Work</Button>
        </div>
      </div>
    </section>
  );
}
