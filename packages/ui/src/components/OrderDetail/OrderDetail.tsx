"use client";

import styles from '../../styles/OrderDetail/OrderDetail.module.css';

export interface OrderDetailBreadcrumbItem {
    label: string;
    href?: string;
}

export interface OrderLineItem {
    no: number;
    name: string;
    unit: string;
    qty: number;
    price: string;
    total: string;
}

export type OrderDetailSortField = 'name' | 'unit' | 'qty' | 'price' | 'total';

export interface OrderDetailProps {
    chevronIconSrc: string;
    pdfIconSrc: string;
    downloadIconSrc: string;
    sortIconSrc: string;
    breadcrumbItems: OrderDetailBreadcrumbItem[];
    orderNumberLabel: string;
    orderCode: string;
    orderDate: string;
    managerName: string;
    whatsappLabel: string;
    whatsappHref: string;
    statusLabel: string;
    pdfFileName: string;
    pdfDate: string;
    downloadLabel: string;
    onDownload?: () => void;
    tableNoLabel: string;
    tableNameLabel: string;
    tableUnitLabel: string;
    tableQtyLabel: string;
    tablePriceLabel: string;
    tableTotalLabel: string;
    onSort?: (field: OrderDetailSortField) => void;
    items: OrderLineItem[];
    subtotalLabel: string;
    subtotalValue: string;
    tableVatLabel: string;
    tableVatValue: string;
    tableYekunLabel: string;
    tableYekunValue: string;
}

export const OrderDetail = ({
    chevronIconSrc,
    pdfIconSrc,
    downloadIconSrc,
    sortIconSrc,
    breadcrumbItems,
    orderNumberLabel,
    orderCode,
    orderDate,
    managerName,
    whatsappLabel,
    whatsappHref,
    statusLabel,
    pdfFileName,
    pdfDate,
    downloadLabel,
    onDownload,
    tableNoLabel,
    tableNameLabel,
    tableUnitLabel,
    tableQtyLabel,
    tablePriceLabel,
    tableTotalLabel,
    onSort,
    items,
    subtotalLabel,
    subtotalValue,
    tableVatLabel,
    tableVatValue,
    tableYekunLabel,
    tableYekunValue,
}: OrderDetailProps) => {
    return (
        <div className={styles.page}>
            <div className={styles.breadcrumb}>
                {breadcrumbItems.map((item, index) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        {index > 0 && <img src={chevronIconSrc} alt="" className={styles.breadcrumbIcon} />}
                        {item.href ? (
                            <a href={item.href} className={styles.breadcrumbLink}>{item.label}</a>
                        ) : (
                            <span className={styles.breadcrumbCurrent}>{item.label}</span>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.infoCard}>
                <div className={styles.infoTopRow}>
                    <div>
                        <p className={styles.orderNumber}>{orderNumberLabel}</p>
                        <p className={styles.orderCode}>{orderCode}</p>
                        <div className={styles.orderMeta}>
                            <span>{orderDate} • {managerName}</span>
                            <a href={whatsappHref} className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
                                {whatsappLabel}
                            </a>
                        </div>
                    </div>
                    <span className={styles.statusBadge}>{statusLabel}</span>
                </div>

            </div>

            <div className={styles.pdfCard}>
                <div className={styles.pdfLeft}>
                    <div className={styles.pdfIconWrapper}>
                        <img src={pdfIconSrc} alt="" className={styles.pdfIcon} />
                    </div>
                    <div>
                        <p className={styles.pdfName}>{pdfFileName}</p>
                        <p className={styles.pdfDate}>{pdfDate}</p>
                    </div>
                </div>
                <button type="button" onClick={onDownload} className={styles.downloadButton}>
                    <img src={downloadIconSrc} alt="" className={styles.downloadIcon} />
                    <span>{downloadLabel}</span>
                </button>
            </div>

            <div className={styles.invoiceCard}>
                <table className={styles.invoiceTable}>
                    <thead>
                        <tr>
                            <th className={styles.colNo}>{tableNoLabel}</th>
                            <th className={styles.colName}>
                                <button type="button" onClick={() => onSort?.('name')} className={styles.sortHeaderLeft}>
                                    <span>{tableNameLabel}</span>
                                    <img src={sortIconSrc} alt="" className={styles.sortIcon} />
                                </button>
                            </th>
                            <th className={styles.colUnit}>{tableUnitLabel}</th>
                            <th className={styles.colQty}>
                                <button type="button" onClick={() => onSort?.('qty')} className={styles.sortHeader}>
                                    <span>{tableQtyLabel}</span>
                                    <img src={sortIconSrc} alt="" className={styles.sortIcon} />
                                </button>
                            </th>
                            <th className={styles.colPrice}>
                                <button type="button" onClick={() => onSort?.('price')} className={styles.sortHeader}>
                                    <span>{tablePriceLabel}</span>
                                    <img src={sortIconSrc} alt="" className={styles.sortIcon} />
                                </button>
                            </th>
                            <th className={styles.colTotal}>
                                <button type="button" onClick={() => onSort?.('total')} className={styles.sortHeader}>
                                    <span>{tableTotalLabel}</span>
                                    <img src={sortIconSrc} alt="" className={styles.sortIcon} />
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.no}>
                                <td className={styles.colNo}>{item.no}</td>
                                <td className={styles.colName}>{item.name}</td>
                                <td className={styles.colUnit}>{item.unit}</td>
                                <td className={styles.colQty}>{item.qty}</td>
                                <td className={styles.colPrice}>{item.price}</td>
                                <td className={styles.colTotal}>{item.total}</td>
                            </tr>
                        ))}

                        <tr>
                            <td colSpan={4} className={styles.subtotalBlankCell} />
                            <td className={styles.plainCell}>{subtotalLabel}</td>
                            <td className={styles.totalsValueCell}>{subtotalValue}</td>
                        </tr>
                        <tr>
                            <td colSpan={4} rowSpan={2} className={styles.wordsCell}></td>
                            <td className={styles.vatLabelCell}>{tableVatLabel}</td>
                            <td className={styles.vatYekunValueCell}>{tableVatValue}</td>
                        </tr>
                        <tr className={styles.yekunRow}>
                            <td className={styles.vatYekunLabelCell}>{tableYekunLabel}</td>
                            <td className={styles.vatYekunValueCell}>{tableYekunValue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};