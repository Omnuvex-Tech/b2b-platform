"use client";

import styles from '../../styles/Cart/Cart.module.css';

export interface CartItem {
  id: string;
  name: string;
  status: string;
  imageSrc: string;
  price: string;
  quantity: number;
  total: string;
}

export interface CartProps {
  minusIconSrc: string;
  plusIconSrc: string;
  trashIconSrc: string;
  sendIconSrc: string;

  title: string;
  subtitle: string;

  productLabel: string;
  priceLabel: string;
  quantityLabel: string;
  totalLabel: string;

  items: CartItem[];
  onQuantityDecrease?: (id: string) => void;
  onQuantityIncrease?: (id: string) => void;
  onRemoveItem?: (id: string) => void;

  noteLabel: string;
  notePlaceholder: string;
  noteValue: string;
  onNoteChange?: (value: string) => void;

  productCountLabel: string;
  productCount: number;
  skuLabel: string;
  skuCount: number;
  totalSummaryLabel: string;
  totalSummaryValue: string;

  submitButtonText: string;
  submitHintText: string;
  onSubmit?: () => void;

  // Empty state
  emptyCartIconSrc?: string;
  emptyTitle?: string;
  emptySubtitle?: string;
  emptyButtonText?: string;
  emptyButtonHref?: string;
}

export const Cart = ({
  minusIconSrc,
  plusIconSrc,
  trashIconSrc,
  sendIconSrc,
  title,
  subtitle,
  productLabel,
  priceLabel,
  quantityLabel,
  totalLabel,
  items,
  onQuantityDecrease,
  onQuantityIncrease,
  onRemoveItem,
  noteLabel,
  notePlaceholder,
  noteValue,
  onNoteChange,
  productCountLabel,
  productCount,
  skuLabel,
  skuCount,
  totalSummaryLabel,
  totalSummaryValue,
  submitButtonText,
  submitHintText,
  onSubmit,
  emptyCartIconSrc,
  emptyTitle = "Səbətiniz boşdur",
  emptySubtitle = "Sifariş vermək üçün kataloqdan məhsul əlavə edin",
  emptyButtonText = "Kataloqa qayıt",
  emptyButtonHref = "/catalog",
}: CartProps) => {
  const isEmpty = items.length === 0;

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{title}</h1>
        <p className={styles.pageSubtitle}>{subtitle}</p>
      </div>

      {isEmpty ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIconWrapper}>
            {emptyCartIconSrc ? (
              <img src={emptyCartIconSrc} alt="" className={styles.emptyIcon} />
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.emptyIcon}
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            )}
          </div>
          <p className={styles.emptyTitle}>{emptyTitle}</p>
          <p className={styles.emptySubtitle}>{emptySubtitle}</p>
          <a href={emptyButtonHref} className={styles.emptyButton}>
            {emptyButtonText}
          </a>
        </div>
      ) : (
        <>
          <div className={styles.tableCard}>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <colgroup>
                  <col style={{ width: '34%' }} />
                  <col style={{ width: '16%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '48px' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className={styles.thProduct}>{productLabel}</th>
                    <th className={styles.th}>{priceLabel}</th>
                    <th className={styles.quantityLabel}>{quantityLabel}</th>
                    <th className={styles.thTotal}>{totalLabel}</th>
                    <th className={styles.thAction} aria-hidden="true" />
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className={styles.row}>
                      <td className={styles.tdProduct}>
                        <div className={styles.productCell}>
                          <img src={item.imageSrc} alt="" className={styles.productImage} />
                          <div>
                            <p className={styles.productName}>{item.name}</p>
                            <p className={styles.productStatus}>{item.status}</p>
                          </div>
                        </div>
                      </td>
                      <td className={styles.td}>{item.price}</td>
                      <td className={styles.td}>
                        <div className={styles.stepper}>
                          <button
                            type="button"
                            onClick={() => onQuantityDecrease?.(item.id)}
                            className={styles.stepperButton}
                            aria-label="Azalt"
                          >
                            <img src={minusIconSrc} alt="" className={styles.stepperIcon} />
                          </button>
                          <span className={styles.stepperValue}>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onQuantityIncrease?.(item.id)}
                            className={styles.stepperButton}
                            aria-label="Artır"
                          >
                            <img src={plusIconSrc} alt="" className={styles.stepperIcon} />
                          </button>
                        </div>
                      </td>
                      <td className={styles.tdTotal}>{item.total}</td>
                      <td className={styles.tdAction}>
                        <button
                          type="button"
                          onClick={() => onRemoveItem?.(item.id)}
                          className={styles.deleteButton}
                          aria-label="Sil"
                        >
                          <img src={trashIconSrc} alt="" className={styles.deleteIcon} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.noteCard}>
              <p className={styles.noteLabel}>{noteLabel}</p>
              <textarea
                value={noteValue}
                onChange={(e) => onNoteChange?.(e.target.value)}
                placeholder={notePlaceholder}
                className={styles.noteTextarea}
              />
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>{productCountLabel}</span>
                <span className={styles.summaryValue}>{productCount}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>{skuLabel}</span>
                <span className={styles.summaryValue}>{skuCount}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>{totalSummaryLabel}</span>
                <span className={styles.summaryValueBold}>{totalSummaryValue}</span>
              </div>

              <button type="button" onClick={onSubmit} className={styles.submitButton}>
                <span>{submitButtonText}</span>
                <img src={sendIconSrc} alt="" className={styles.submitIcon} />
              </button>

              <p className={styles.submitHint}>{submitHintText}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};