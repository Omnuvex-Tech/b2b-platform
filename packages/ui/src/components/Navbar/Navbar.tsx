"use client";

import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Navbar/Navbar.module.css';

export interface NavbarMenuItem {
  label: string;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

export interface NavbarProps {
  logoSrc: string;
  catalogIconSrc: string;
  cartIconSrc: string;
  chevronIconSrc: string;
  catalogText: string;
  cartText: string;
  accountText: string;
  menuItems: NavbarMenuItem[];
  onLogoClick?: () => void;
  onCatalogClick?: () => void;
  onCartClick?: () => void;
}

export const Navbar = ({
  logoSrc,
  catalogIconSrc,
  cartIconSrc,
  chevronIconSrc,
  catalogText,
  cartText,
  accountText,
  menuItems,
  onLogoClick,
  onCatalogClick,
  onCartClick,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <button type="button" onClick={onLogoClick} className={styles.logoButton}>
        <img src={logoSrc} alt="tvim" className={styles.logo} />
      </button>

      <nav className={styles.nav}>
        <button type="button" onClick={onCatalogClick} className={styles.navLink}>
          <img src={catalogIconSrc} alt="" className={styles.navIcon} />
          <span className={styles.navLinkText}>{catalogText}</span>
        </button>

        <button type="button" onClick={onCartClick} className={styles.navLink}>
          <img src={cartIconSrc} alt="" className={styles.navIcon} />
          <span className={styles.navLinkText}>{cartText}</span>
        </button>

        <div className={styles.dropdownWrapper} ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.accountButton}
            aria-expanded={isOpen}
          >
            <span>{accountText}</span>
            <img
              src={chevronIconSrc}
              alt=""
              className={`${styles.chevronIcon} ${isOpen ? styles.chevronIconOpen : ''}`}
            />
          </button>

          {isOpen && (
            <div className={styles.dropdown}>
              {menuItems.map((item, index) => {
                const isLast = index === menuItems.length - 1;
                return (
                  <div key={item.label}>
                    {isLast && menuItems.length > 1 && <div className={styles.divider} />}
                    <button
                      type="button"
                      onClick={() => {
                        item.onClick?.();
                        setIsOpen(false);
                      }}
                      className={`${styles.dropdownItem} ${
                        item.variant === 'danger' ? styles.dropdownItemDanger : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};