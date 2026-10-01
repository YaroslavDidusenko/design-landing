import Reveal from "@/components/Reveal/Reveal";
import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  index,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={[styles.section, className].filter(Boolean).join(" ")}
    >
      <div className={styles.container}>
        <Reveal>
          <header className={styles.head}>
            <span className={styles.index} aria-hidden="true">
              {index}
            </span>
            <h2 id={`${id}-title`} className={styles.title}>
              {title}
            </h2>
            <span className={styles.rule} aria-hidden="true" />
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
