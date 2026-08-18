"use client";

import styles from '../../styles/OrderSuccessModal/OrderSuccessModal.module.css';

export interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;

  checkIconSrc: string;

  title: string;
  subtitle: string;

  requestNumberLabel: string;
  requestNumberValue: string;
  productCountLabel: string;
  productCountValue: string;
  totalLabel: string;
  totalValue: string;
  statusLabel: string;
  statusValue: string;

  whatsappText: string;
  whatsappHref: string;

  catalogButtonText: string;
  onCatalogClick?: () => void;

  viewOrderButtonText: string;
  onViewOrderClick?: () => void;
}

export const OrderSuccessModal = ({
  isOpen,
  onClose,
  checkIconSrc,
  title,
  subtitle,
  requestNumberLabel,
  requestNumberValue,
  productCountLabel,
  productCountValue,
  totalLabel,
  totalValue,
  statusLabel,
  statusValue,
  whatsappText,
  whatsappHref,
  catalogButtonText,
  onCatalogClick,
  viewOrderButtonText,
  onViewOrderClick,
}: OrderSuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Bağla"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.iconWrapper}>
          <img src={checkIconSrc} alt="" className={styles.checkIcon} />
        </div>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.infoCard}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>{requestNumberLabel}</span>
            <span className={styles.infoValue}>{requestNumberValue}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>{productCountLabel}</span>
            <span className={styles.infoValue}>{productCountValue}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>{totalLabel}</span>
            <span className={styles.infoValue}>{totalValue}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>{statusLabel}</span>
            <span className={styles.statusBadge}>{statusValue}</span>
          </div>
        </div>

        <div className={styles.footerRow}>
          <a href={whatsappHref} className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
            {whatsappText}
          </a>
          <div className={styles.buttonGroup}>
            <button type="button" onClick={onCatalogClick} className={styles.secondaryButton}>
              {catalogButtonText}
            </button>
            <button type="button" onClick={onViewOrderClick} className={styles.primaryButton}>
              {viewOrderButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};