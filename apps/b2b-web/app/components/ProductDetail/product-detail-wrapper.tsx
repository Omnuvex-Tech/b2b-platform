"use client";

import { useState } from 'react';
import { ProductDetail, type RelatedProduct } from '@repo/ui';

const RELATED_PRODUCTS: RelatedProduct[] = Array.from({ length: 8 }).map((_, index) => ({
  id: `related-${index + 1}`,
  name: 'Soudal FC40 Grey',
  price: '8.40 m',
  imageSrc: `/images/Content-${(index % 7) + 1}.svg`,
  status: 'in_stock',
  href: `/product/related-${index + 1}`,
}));

export const ProductDetailWrapper = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductDetail
      chevronIconSrc="/images/ChevronRight.svg"
      minusIconSrc="/images/Minus.svg"
      plusIconSrc="/images/Plus.svg"
      cartIconSrc="/images/ShoppingCart.svg"
      breadcrumbItems={[
        { label: 'Kataloq', href: '/catalog' },
        { label: 'Bosch alətləri', href: '/catalog/bosch' },
        { label: 'Drel elektrikli' },
      ]}
      name="Drel batareyalı GSB 183-Lİ zərbəli"
      sku="SKU: BSH-GSB-183"
      inStock={true}
      stockLabel="Stokda"
      price="285.00 m"
      images={[
        '/images/Content-1.svg',
        '/images/Content-2.svg',
        '/images/Content-3.svg',
        '/images/Content-4.svg',
      ]}
      quantity={quantity}
      onQuantityDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
      onQuantityIncrease={() => setQuantity((q) => q + 1)}
      addToCartLabel="Səbətə əlavə et"
      onAddToCart={() => console.log('add to cart', quantity)}
        specsHeading="Xüsusiyyətlər"
      specs={[
        { label: 'Növ', value: '84693' },
        { label: 'Voltaj', value: '84693' },
        { label: 'Batareya tutumu', value: '84693' },
        { label: 'Zərbə tezliyi', value: '23714' },
        { label: 'Fırlanma momenti', value: '59280' },
        { label: 'Çəki', value: '47391' },
        { label: 'Zəmanət', value: '10582' },
      ]}
      description="Bosch HSS-CO 1 mm svarlı yüksək dəqiqlik təbii deşik açma işləri üçün hazırlanmış peşəkar qazma ucluğudur. Kobalt tərkibli HSS (HSS-CO) materialdan istehsal olunduğu üçün yüksək istiliyə və aşınmaya qarşı daha davamlıdır, bu isə onu sərt metallar, paslanmayan polad və ərintilər üzərində işləmək üçün ideal edir. Xüsusi itilənmiş ucu sayəsində materiala dəqiq daxil olur və minimal sürüşmə ilə stabil qazma təmin edir. Bu xüsusiyyətlər mikro və incə işlərdə maksimum dəqiqliklə əldə etməyə imkan yaradır."
      relatedHeading="Oxşar məhsullar"
      relatedProducts={RELATED_PRODUCTS}
      inStockBadgeLabel="Stokda"
      onOrderBadgeLabel="Sifariş ilə"
      addToCartShortLabel="Səbətə"
      onRelatedAddToCart={(id) => console.log('related add to cart', id)}
    />
  );
};