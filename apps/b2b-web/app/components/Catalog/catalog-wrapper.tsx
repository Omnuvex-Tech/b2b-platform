"use client";

import { useState } from 'react';
import { Catalog, type CatalogBrand, type CatalogProduct } from '@repo/ui';

const BRANDS: CatalogBrand[] = [
  { id: 'all', label: 'Bütün məhsullar', count: 110 },
  { id: 'holcim', label: 'Holcim', count: 48 },
  { id: 'soudal', label: 'Soudal', count: 24 },
  { id: 'knauf', label: 'Knauf', count: 38 },
];

const PRODUCTS: CatalogProduct[] = Array.from({ length: 12 }).map((_, index) => ({
  id: `product-${index + 1}`,
  name: 'Soudal FC40 Grey',
  price: '8.40 m',
  imageSrc: `/images/Content-${(index % 7) + 1}.svg`,
  status: index % 3 === 1 ? 'on_order' : 'in_stock',
}));


export const CatalogWrapper = () => {
  const [activeBrandId, setActiveBrandId] = useState('all');
  const [inStockChecked, setInStockChecked] = useState(true);
  const [onOrderChecked, setOnOrderChecked] = useState(true);
  const [minPrice, setMinPrice] = useState('20');
  const [maxPrice, setMaxPrice] = useState('100');
  const [searchValue, setSearchValue] = useState('');

  const activeBrand = BRANDS.find((brand) => brand.id === activeBrandId);

  return (
    <Catalog
      searchIconSrc="/images/Vector.svg"
      cartIconSrc="/images/ShoppingCart.svg"
      brands={BRANDS}
      activeBrandId={activeBrandId}
      onBrandSelect={setActiveBrandId}
      inStockChecked={inStockChecked}
      onOrderChecked={onOrderChecked}
      onInStockChange={setInStockChecked}
      onOnOrderChange={setOnOrderChecked}
      minPrice={minPrice}
      maxPrice={maxPrice}
      onMinPriceChange={setMinPrice}
      onMaxPriceChange={setMaxPrice}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      totalCount={142}
      activeBrandLabel={activeBrand?.label === 'Bütün məhsullar' ? 'Bütün brendlər' : activeBrand?.label ?? ''}
      products={PRODUCTS}
      brandsHeading="Brendlər"
      statusHeading="Status"
      inStockLabel="Stokda var"
      onOrderLabel="Sifariş ilə"
      priceRangeHeading="Qiymət aralığı"
      minLabel="Min"
      maxLabel="Max"
      searchPlaceholder="Axtarın..."
      productsSuffix="məhsul"
      sortLabel="Populyarlığa görə"
      addToCartLabel="Səbətə"
      inStockBadgeLabel="Stokda"
      onOrderBadgeLabel="Sifariş ilə"
      resizeIconSrc="/images/Expand-line.svg"
    />
  );
};