import Reveal from "@/components/Reveal/Reveal";
import Section from "@/components/Section/Section";
import styles from "./Services.module.css";

const services = [
  "Social media design",
  "Thumbnails and covers",
  "Banners and advertising creatives",
  "Telegram channel design",
  "Logos and visual identities",
  "UI/UX design",
  "Website and landing page design",
  "Visual concepts and creative direction",
  "Image editing and retouching",
  "Promotional materials",
];

export default function Services() {
  return (
    <Section id="services" index="01" title="What I Do">
      <Reveal>
        <ul className={styles.list}>
          {services.map((service, i) => (
            <li key={service} className={styles.item}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.name}>{service}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
