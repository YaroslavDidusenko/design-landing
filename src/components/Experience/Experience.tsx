import Reveal from "@/components/Reveal/Reveal";
import Section from "@/components/Section/Section";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience & Growth">
      <Reveal className={styles.content}>
        <p className={styles.lede}>
          I&rsquo;m constantly developing my skills, exploring modern design
          trends, and experimenting with new tools and creative approaches.
        </p>
        <p className={styles.text}>
          Every project gives me an opportunity to learn something new, improve
          my skills, and create something better than before.
        </p>
      </Reveal>
    </Section>
  );
}
