"use client";

import styles from '../../styles/NotFound/NotFound.module.css';

export interface NotFoundProps {
  title: string;
  description: string;

  catalogButtonText: string;
  catalogHref: string;

  supportButtonText: string;
  supportHref: string;
}

export const NotFound = ({
  title,
  description,
  catalogButtonText,
  catalogHref,
  supportButtonText,
  supportHref,
}: NotFoundProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <a href={catalogHref} className={styles.primaryButton}>
            {catalogButtonText}
          </a>
          <a href={supportHref} className={styles.secondaryButton}>
            {supportButtonText}
          </a>
        </div>
      </div>
    </div>
  );
};