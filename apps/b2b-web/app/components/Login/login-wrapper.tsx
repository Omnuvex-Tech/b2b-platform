import { Login } from '@repo/ui';

export const LoginWrapper = () => {
  return (
    <Login
      logoSrc="/images/logo.svg"
      arrowSrc="/images/ArrowRight.svg"
      subtitle="Korporativ müştərilər üçün şəxsi kabinet."
      title="Xoş gəlmisiniz!"
      description="Kabinetinizə giriş üçün məlumatları daxil edin"
      emailLabel="E-mail"
      emailPlaceholder="tedaruk@qala.az"
      passwordLabel="Şifrə"
      passwordPlaceholder="********"
      forgotPasswordText="Şifrənizi unutmusunuz?"
      submitText="Daxil ol"
      noAccountText="Hesabınız yoxdur?"
      contactLinkText="Bizimlə əlaqə saxlayın"
      contactSuffixText="- müqavilə imzalandıqdan sonra hesab açılır"
      footerCopyright="2026 TVIM MMC"
      footerContactText="Bizimlə əlaqə saxlayın"
      footerPrivacyText="Məxfilik"


error={{
  message: 'E-mail və ya şifrə yanlışdır',
  variant: 'error',
  iconSrc: '/images/CircleAlert.svg',
}}

// error={{
//   message: 'Giriş mümkün olmadı. Yenidən cəhd edin',
//   variant: 'error',
//   iconSrc: '/images/WifiOff.svg',
// }}

// error={{
//   message: 'Hesabınız deaktivdir. Menecerinizlə əlaqə saxlayın',
//   variant: 'warning',
//   iconSrc: '/images/LockKeyhole.svg',
// }}

// error={{
//   message: 'Çox sayda uğursuz cəhd. 15 dəqiqə sonra yenidən sınayın',
//   variant: 'warning',
//   iconSrc: '/images/Clock3.svg',
// }}
    />
  );
};