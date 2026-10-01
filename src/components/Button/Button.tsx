import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
};

export default function Button({ href, children, variant = "dark" }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
