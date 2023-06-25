import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Click the Increment, Decrement or Reset button and see the counter!</h1>
    </div>
  );
}
