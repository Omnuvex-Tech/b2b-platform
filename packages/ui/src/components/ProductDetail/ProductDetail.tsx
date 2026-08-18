"use client";

import { useState } from 'react';
import styles from '../../styles/ProductDetail/ProductDetail.module.css';

export interface ProductDetailBreadcrumbItem {
    label: string;
    href?: string;
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface RelatedProduct {
    id: string;
    name: string;
    price: string;
    imageSrc: string;
    status: 'in_stock' | 'on_order';
    href: string;
}

export interface ProductDetailProps {
    chevronIconSrc: string;
    minusIconSrc: string;
    plusIconSrc: string;
    cartIconSrc: string;

    breadcrumbItems: ProductDetailBreadcrumbItem[];

    name: string;
    sku: string;
    inStock: boolean;
    stockLabel: string;
    price: string;

    images: string[];

    quantity: number;
    onQuantityDecrease?: () => void;
    onQuantityIncrease?: () => void;

    addToCartLabel: string;
    onAddToCart?: () => void;

    specsHeading: string;
    specs: ProductSpec[];
    description: string;

    relatedHeading: string;
    relatedProducts: RelatedProduct[];
    inStockBadgeLabel: string;
    onOrderBadgeLabel: string;
    addToCartShortLabel: string;
    onRelatedAddToCart?: (id: string) => void;
}

export const ProductDetail = ({
    chevronIconSrc,
    minusIconSrc,
    plusIconSrc,
    cartIconSrc,
    breadcrumbItems,
    name,
    sku,
    inStock,
    stockLabel,
    price,
    images,
    quantity,
    onQuantityDecrease,
    onQuantityIncrease,
    addToCartLabel,
    onAddToCart,
    specsHeading,
    specs,
    description,
    relatedHeading,
    relatedProducts,
    inStockBadgeLabel,
    onOrderBadgeLabel,
    addToCartShortLabel,
    onRelatedAddToCart,
}: ProductDetailProps) => {
    const [activeImage, setActiveImage] = useState(0);

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

            <div className={styles.card}>
                <div className={styles.topRow}>
                    <div className={styles.gallery}>
                        <div className={styles.mainImageWrapper}>
                            <img src={images[activeImage]} alt={name} className={styles.mainImage} />
                        </div>
                        <div className={styles.thumbnailRow}>
                            {images.map((img, index) => (
                                <button
                                    key={img + index}
                                    type="button"
                                    onClick={() => setActiveImage(index)}
                                    className={`${styles.thumbnailButton} ${index === activeImage ? styles.thumbnailButtonActive : ''
                                        }`}
                                >
                                    <img src={img} alt="" className={styles.thumbnailImage} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h1 className={styles.productName}>{name}</h1>
                        <p className={styles.sku}>{sku}</p>

                        {inStock && <span className={styles.stockBadge}>{stockLabel}</span>}

                        <p className={styles.price}>{price}</p>

                        <div className={styles.actionsRow}>
                            <div className={styles.stepper}>
                                <button
                                    type="button"
                                    onClick={onQuantityDecrease}
                                    className={styles.stepperButton}
                                    aria-label="Azalt"
                                >
                                    <img src={minusIconSrc} alt="" className={styles.stepperIcon} />
                                </button>
                                <span className={styles.stepperValue}>{quantity}</span>
                                <button
                                    type="button"
                                    onClick={onQuantityIncrease}
                                    className={styles.stepperButton}
                                    aria-label="Artır"
                                >
                                    <img src={plusIconSrc} alt="" className={styles.stepperIcon} />
                                </button>
                            </div>

                            <button type="button" onClick={onAddToCart} className={styles.addToCartButton}>
                                <img src={cartIconSrc} alt="" className={styles.addToCartIcon} />
                                <span>{addToCartLabel}</span>
                            </button>
                        </div>

                        <div className={styles.specsTable}>
                            <p className={styles.specsHeading}>{specsHeading}</p>
                            {specs.map((spec) => (
                                <div key={spec.label} className={styles.specRow}>
                                    <span className={styles.specLabel}>{spec.label}</span>
                                    <span className={styles.specValue}>{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className={styles.description}>{description}</p>
            </div>

            <h2 className={styles.relatedHeading}>{relatedHeading}</h2>
            <div className={styles.relatedGrid}>
                {relatedProducts.map((product) => (
                    <a key={product.id} href={product.href} className={styles.relatedCard}>
                        <div className={styles.relatedImageWrapper}>
                            <img src={product.imageSrc} alt={product.name} className={styles.relatedImage} />
                        </div>
                        <div className={styles.relatedBody}>
                            <div className={styles.relatedTitleRow}>
                                <p className={styles.relatedName}>{product.name}</p>
                                <span
                                    className={`${styles.relatedBadge} ${product.status === 'in_stock' ? styles.relatedBadgeInStock : styles.relatedBadgeOnOrder
                                        }`}
                                >
                                    {product.status === 'in_stock' ? inStockBadgeLabel : onOrderBadgeLabel}
                                </span>
                            </div>
                            <p className={styles.relatedPrice}>{product.price}</p>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onRelatedAddToCart?.(product.id);
                                }}
                                className={styles.relatedAddToCartButton}
                            >
                                <img src={cartIconSrc} alt="" className={styles.relatedCartIcon} />
                                <span>{addToCartShortLabel}</span>
                            </button>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};