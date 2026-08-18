"use client";

import { useState } from 'react';
import { Cart, OrderSuccessModal, type CartItem } from '@repo/ui';

const INITIAL_ITEMS: CartItem[] = [
  { id: '1', name: 'Soudal F40 Grey', status: 'Stokda', imageSrc: '/images/Content-1.svg', price: '24 azn', quantity: 1, total: '7280 azn' },
  { id: '2', name: 'Knauf Alçıpan', status: 'Stokda', imageSrc: '/images/Content-2.svg', price: '38azn', quantity: 1, total: '7280 azn' },
  { id: '3', name: 'Knauf SD profil', status: 'Stokda', imageSrc: '/images/Content-3.svg', price: '20 azn', quantity: 1, total: '7280 azn' },
];

export const CartWrapper = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [note, setNote] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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

  const handleSubmit = () => {
    setIsSuccessModalOpen(true);
  };

  return (
    <>
      <Cart
        minusIconSrc="/images/Minus.svg"
        plusIconSrc="/images/Plus.svg"
        trashIconSrc="/images/Trash2.svg"
        sendIconSrc="/images/Send.svg"
        title="Sifariş tələbi"
        subtitle={
          items.length > 0
            ? `${items.length} məhsul Menecer təsdiqi tələb olunur`
            : 'Səbətinizdə hazırda məhsul yoxdur'
        }
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
        onSubmit={handleSubmit}
        emptyCartIconSrc="/images/ShoppingCart.svg"
        emptyTitle="Səbətiniz boşdur"
        emptySubtitle="Sifariş vermək üçün kataloqdan məhsul əlavə edin"
        emptyButtonText="Kataloqa qayıt"
        emptyButtonHref="/catalog"
      />

      <OrderSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        checkIconSrc="/images/CircleCheckBig.svg"
        title="Sifariş tələbiniz göndərildi!"
        subtitle="Menecer 1-2 saat ərzində sizinlə əlaqə saxlayacaq"
        requestNumberLabel="Tələb №"
        requestNumberValue="2026-0144"
        productCountLabel="Məhsul sayı"
        productCountValue={`${items.length} SKU 460 ədəd`}
        totalLabel="Yekun məbləğ"
        totalValue="4 032.00 azn"
        statusLabel="Status"
        statusValue="Menecer təsdiqi gözləyir"
        whatsappText="WhatsApp yazın"
        whatsappHref="https://wa.me/994000000000"
        catalogButtonText="Kataloqa qayıt"
        onCatalogClick={() => (window.location.href = '/catalog')}
        viewOrderButtonText="Tələbə bax"
        onViewOrderClick={() => (window.location.href = '/orders/2026-0144')}
      />
    </>
  );
};