import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import Section from "@/components/Section/Section";
import styles from "./Work.module.css";

const TELEGRAM_URL = "https://t.me/channelminerov";

export default function Work() {
  return (
    <Section id="work" index="04" title="My Work">
      <Reveal>
        <p className={styles.text}>
          You can explore my latest projects, experiments, and design work on my
          Telegram channel.
        </p>
        <div className={styles.row}>
          <Button href={TELEGRAM_URL}>View Telegram Channel</Button>
          <span className={styles.handle}>t.me/channelminerov</span>
        </div>
      </Reveal>
    </Section>
  );
}
