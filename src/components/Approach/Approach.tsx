import Reveal from "@/components/Reveal/Reveal";
import Section from "@/components/Section/Section";
import styles from "./Approach.module.css";

export default function Approach() {
  return (
    <Section
      id="approach"
      index="02"
      title="My Approach"
      className={styles.surface}
    >
      <Reveal className={styles.content}>
        <p className={styles.lede}>
          Every project starts with understanding the goal, audience, and
          overall concept.
        </p>
        <p className={styles.text}>
          I carefully combine creativity with functionality to create designs
          that not only look professional but also communicate the right message
          and achieve their purpose.
        </p>
        <p className={styles.text}>
          I pay close attention to details, consistency, and visual identity so
          that the final result feels complete and memorable.
        </p>
      </Reveal>
    </Section>
  );
}
