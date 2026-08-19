"use client";

import { useRouter } from 'next/navigation';
import { Navbar } from '@repo/ui';

export const NavbarWrapper = () => {
  const router = useRouter();

  return (
    <Navbar
      logoSrc="/images/logo.svg"
      catalogIconSrc="/images/Hammer.svg"
      cartIconSrc="/images/ShoppingCart.svg"
      chevronIconSrc="/images/ChevronDown.svg"
      catalogText="Kataloq"
      cartText="Səbət"
      accountText="Mənim kabinetim"
      onLogoClick={() => router.push('/catalog')}
      onCatalogClick={() => router.push('/catalog')}
      onCartClick={() => router.push('/cart')}
      menuItems={[
        { label: 'Sifarişlərim', onClick: () => router.push('/orders') },
        { label: 'Şirkət məlumatları', onClick: () => router.push('/company') },
        { label: 'Çıxış', variant: 'danger', onClick: () => router.push('/login') },
      ]}
    />
  );
};