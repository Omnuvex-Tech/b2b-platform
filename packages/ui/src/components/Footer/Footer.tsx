import styles from '../../styles/Footer/Footer.module.css';

export interface FooterLinkColumn {
  heading: string;
  items: { label: string; href?: string }[];
}

export interface FooterProps {
  logoSrc: string;
  subtitle: string;
  columns: FooterLinkColumn[];
}

export const Footer = ({ logoSrc, subtitle, columns }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img src={logoSrc} alt="tvim" className={styles.logo} />
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.columns}>
        {columns.map((column) => (
          <div key={column.heading} className={styles.column}>
            <p className={styles.columnHeading}>{column.heading}</p>
            {column.items.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href} className={styles.columnLink}>
                  {item.label}
                </a>
              ) : (
                <p key={item.label} className={styles.columnItem}>
                  {item.label}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};