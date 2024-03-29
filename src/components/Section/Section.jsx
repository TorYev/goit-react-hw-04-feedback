import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};