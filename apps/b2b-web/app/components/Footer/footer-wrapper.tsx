import { Footer } from '@repo/ui';

export const FooterWrapper = () => {
  return (
    <Footer
      logoSrc="/images/logo.svg"
      subtitle="Korporativ müştərilər üçün şəxsi kabinet"
      columns={[
        {
          heading: 'Platform',
          items: [
            { label: 'Kataloq', href: '/catalog' },
            { label: 'Səbət', href: '/cart' },
            { label: 'Mənim kabinetim', href: '/account' },
          ],
        },
        {
          heading: 'Əlaqə',
          items: [
            { label: '+994 50 123 24 42' },
            { label: 'tvim@tvim.az' },
            { label: 'Bakı, Nizami küçəsi' },
          ],
        },
      ]}
    />
  );
};