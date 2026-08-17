"use client";

import { CompanyInfo } from '@repo/ui';

export const CompanyInfoWrapper = () => {
  const handleSaveContact = (data: {
    name: string;
    specialty: string;
    phone: string;
    email: string;
  }) => {
    console.log(data);
  };

  return (
    <CompanyInfo
      editIconSrc="/images/Icon-buttons.svg"
      saveIconSrc="/images/Check.svg"
      whatsappIconSrc="/images/Send.svg"
      pageTitle="Şirkət məlumatları"
      pageSubtitle="Şirkət rekvizitləri və əlaqə məlumatları"
      companyCardTitle="Şirkət məlumatları"
      companyNameLabel="Şirkətin adı"
      companyName="Qala Construction MMC"
      voenLabel="VÖEN"
      voen="1700123456"
      legalAddressLabel="Hüquqi ünvan"
      legalAddress="Bakı şəhəri, Nəsimi rayonu, Nizami küç. 203"
      contractDateLabel="Müqavilə tarixi"
      contractDate="12 iyul 2026"
      contactCardTitle="Əlaqə şəxsi"
      nameLabel="Ad"
      specialtyLabel="İxtisas"
      phoneLabel="Telefon"
      emailLabel="E-mail"
      contactName="Elşən Məmmədov"
      contactSpecialty="Təchizat müdiri"
      contactPhone="+994 50 403 02 40"
      contactEmail="tedaruk@qala.az"
      saveButtonText="Yadda saxla"
      onSaveContact={handleSaveContact}
      managerCardTitle="TVIM meneceriniz"
      salesManagerLabel="Satış meneceri"
      salesManagerName="Kamil Əliyev"
      contactNumberLabel="Əlaqə nömrəsi"
      managerPhone="050 123 45 67"
      whatsappButtonText="WhatsApp"
      onWhatsappClick={() => window.open('https://wa.me/994501234567', '_blank')}
    />
  );
};