"use client";

import { useCallback, useEffect, useRef, useState, type ChangeEvent } from 'react';
import styles from '../../styles/Catalog/Catalog.module.css';

const MIN_SIDEBAR_WIDTH = 220;
const MAX_SIDEBAR_WIDTH = 400;
const DEFAULT_SIDEBAR_WIDTH = 260;

export interface CatalogBrand {
  id: string;
  label: string;
  count: number;
}

export interface CatalogProduct {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  status: 'in_stock' | 'on_order';
}

export interface CatalogProps {
  searchIconSrc: string;
  cartIconSrc: string;

  brands: CatalogBrand[];
  activeBrandId: string;
  onBrandSelect?: (id: string) => void;

  inStockChecked: boolean;
  onOrderChecked: boolean;
  onInStockChange?: (checked: boolean) => void;
  onOnOrderChange?: (checked: boolean) => void;

  minPrice: string;
  maxPrice: string;
  onMinPriceChange?: (value: string) => void;
  onMaxPriceChange?: (value: string) => void;

  searchValue: string;
  onSearchChange?: (value: string) => void;

  totalCount: number;
  activeBrandLabel: string;
  products: CatalogProduct[];
  onAddToCart?: (productId: string) => void;

  brandsHeading: string;
  statusHeading: string;
  inStockLabel: string;
  onOrderLabel: string;
  priceRangeHeading: string;
  minLabel: string;
  maxLabel: string;
  searchPlaceholder: string;
  productsSuffix: string;
  sortLabel: string;
  addToCartLabel: string;
  inStockBadgeLabel: string;
  onOrderBadgeLabel: string;
  resizeIconSrc: string;
}

export const Catalog = ({
  searchIconSrc,
  cartIconSrc,
  resizeIconSrc,
  brands,
  activeBrandId,
  onBrandSelect,
  inStockChecked,
  onOrderChecked,
  onInStockChange,
  onOnOrderChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  searchValue,
  onSearchChange,
  totalCount,
  activeBrandLabel,
  products,
  onAddToCart,
  brandsHeading,
  statusHeading,
  inStockLabel,
  onOrderLabel,
  priceRangeHeading,
  minLabel,
  maxLabel,
  searchPlaceholder,
  productsSuffix,
  sortLabel,
  addToCartLabel,
  inStockBadgeLabel,
  onOrderBadgeLabel,
}: CatalogProps) => {
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);
  const dragStartRef = useRef<{ startX: number; startWidth: number } | null>(null);

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      dragStartRef.current = { startX: e.clientX, startWidth: sidebarWidth };
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    },
    [sidebarWidth]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragStartRef.current) return;
      const delta = e.clientX - dragStartRef.current.startX;
      const nextWidth = dragStartRef.current.startWidth + delta;
      const clamped = Math.min(Math.max(nextWidth, MIN_SIDEBAR_WIDTH), MAX_SIDEBAR_WIDTH);
      setSidebarWidth(clamped);
    };
    const handleMouseUp = () => {
      dragStartRef.current = null;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar} style={{ width: sidebarWidth }}>
        <div className={styles.sidebarSection}>
          <p className={styles.sidebarHeading}>{brandsHeading}</p>
          <div className={styles.brandList}>
            {brands.map((brand) => (
              <button
                key={brand.id}
                type="button"
                onClick={() => onBrandSelect?.(brand.id)}
                className={`${styles.brandItem} ${
                  brand.id === activeBrandId ? styles.brandItemActive : ''
                }`}
              >
                <span className={styles.brandLabel}>{brand.label}</span>
                <span className={styles.brandCount}>{brand.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.sidebarSection}>
          <p className={styles.sidebarHeading}>{statusHeading}</p>
          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={inStockChecked}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onInStockChange?.(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxLabel}>{inStockLabel}</span>
          </label>
          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={onOrderChecked}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onOnOrderChange?.(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxLabel}>{onOrderLabel}</span>
          </label>
        </div>

        <div className={styles.divider} />

        <div className={styles.sidebarSection}>
          <p className={styles.sidebarHeading}>{priceRangeHeading}</p>
          <div className={styles.priceRange}>
            <div className={styles.priceField}>
              <label htmlFor="min-price" className={styles.priceLabel}>{minLabel}</label>
              <input
                id="min-price"
                type="number"
                value={minPrice}
                onChange={(e) => onMinPriceChange?.(e.target.value)}
                className={styles.priceInput}
              />
            </div>
            <div className={styles.priceField}>
              <label htmlFor="max-price" className={styles.priceLabel}>{maxLabel}</label>
              <input
                id="max-price"
                type="number"
                value={maxPrice}
                onChange={(e) => onMaxPriceChange?.(e.target.value)}
                className={styles.priceInput}
              />
            </div>
          </div>
        </div>
      </aside>

    <div
  className={styles.resizeHandle}
  onMouseDown={handleResizeStart}
  role="separator"
  aria-orientation="vertical"
>
  <img src={resizeIconSrc} alt="" className={styles.resizeIcon} />
</div>

      <main className={styles.main}>
        <div className={styles.searchBar}>
          <img src={searchIconSrc} alt="" className={styles.searchIcon} />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.toolbar}>
          <p className={styles.resultsCount}>
            {totalCount} {productsSuffix} • {activeBrandLabel}
          </p>
          <button type="button" className={styles.sortButton}>
            {sortLabel}
          </button>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
         <div key={product.id} className={styles.card}>
  <div className={styles.cardImageWrapper}>
    <img src={product.imageSrc} alt={product.name} className={styles.cardImage} />
  </div>
  <div className={styles.cardBody}>
    <div className={styles.cardTitleRow}>
      <p className={styles.cardName}>{product.name}</p>
      <span
        className={`${styles.badge} ${
          product.status === 'in_stock' ? styles.badgeInStock : styles.badgeOnOrder
        }`}
      >
        {product.status === 'in_stock' ? inStockBadgeLabel : onOrderBadgeLabel}
      </span>
    </div>
    <p className={styles.cardPrice}>{product.price}</p>
    <button
      type="button"
      onClick={() => onAddToCart?.(product.id)}
      className={styles.addToCartButton}
    >
      <img src={cartIconSrc} alt="" className={styles.cartIcon} />
      <span>{addToCartLabel}</span>
    </button>
  </div>
</div>
          ))}
        </div>
      </main>
    </div>
  );
};