"use client";

import { useState } from 'react';
import { Cart, type CartItem } from '@repo/ui';

const INITIAL_ITEMS: CartItem[] = [
  { id: '1', name: 'Soudal F40 Grey', status: 'Stokda', imageSrc: '/images/Content-1.svg', price: '24 azn', quantity: 1, total: '7280 azn' },
  { id: '2', name: 'Knauf Alçıpan', status: 'Stokda', imageSrc: '/images/Content-2.svg', price: '38azn', quantity: 1, total: '7280 azn' },
  { id: '3', name: 'Knauf SD profil', status: 'Stokda', imageSrc: '/images/Content-3.svg', price: '20 azn', quantity: 1, total: '7280 azn' },
];

export const CartWrapper = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [note, setNote] = useState('');

  const handleIncrease = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleDecrease = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Cart
      minusIconSrc="/images/Minus.svg"
      plusIconSrc="/images/Plus.svg"
      trashIconSrc="/images/Trash2.svg"
      sendIconSrc="/images/Send.svg"
      title="Sifariş tələbi"
      subtitle={`${items.length} məhsul Menecer təsdiqi tələb olunur`}
      productLabel="Məhsul"
      priceLabel="Qiymət"
      quantityLabel="Miqdar"
      totalLabel="Cəmi"
      items={items}
      onQuantityDecrease={handleDecrease}
      onQuantityIncrease={handleIncrease}
      onRemoveItem={handleRemove}
      noteLabel="Menecer üçün qeyd"
      notePlaceholder="Çatdırılma tarixi, xüsusi tələblər və s..."
      noteValue={note}
      onNoteChange={setNote}
      productCountLabel="Məhsul sayı"
      productCount={460}
      skuLabel="SKU"
      skuCount={items.length}
      totalSummaryLabel="Yekun"
      totalSummaryValue="4 032.00 m"
      submitButtonText="Sifariş tələbini göndər"
      submitHintText="Tələb menecerə göndəriləcək. Təsdiq alındıqdan sonra sifariş işlənəcək"
      onSubmit={() => console.log('submit', items, note)}
    />
  );
};