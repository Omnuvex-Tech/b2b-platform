"use client";

import { OrderDetail, type OrderLineItem } from '@repo/ui';

const ITEMS: OrderLineItem[] = [
    { no: 1, name: 'Knauf Alçıpan', unit: 'Ədəd', qty: 12, price: '8.40 azn', total: '7280 azn' },
    { no: 2, name: 'Knauf CD Profil', unit: 'Ədəd', qty: 12, price: '8.40 azn', total: '7280 azn' },
    { no: 3, name: 'Knauf UD Profil', unit: 'Ədəd', qty: 12, price: '8.40 azn', total: '7280 azn' },
    { no: 4, name: 'Knauf Şpaklyovka', unit: 'Ədəd', qty: 12, price: '8.40 azn', total: '7280 azn' },
    { no: 5, name: 'Knauf Alçıpan', unit: 'Ədəd', qty: 12, price: '8.40 azn', total: '7280 azn' },
    { no: 6, name: 'Knauf UD Profil', unit: 'Ədəd', qty: 12, price: '8.40 azn', total: '7280 azn' },
    { no: 7, name: 'Knauf Alçıpan', unit: 'Ədəd', qty: 12, price: '8.40 azn', total: '7280 azn' },
];

export const OrderDetailWrapper = () => {
    return (
        <OrderDetail
            chevronIconSrc="/images/ChevronRight.svg"
            pdfIconSrc="/images/pdfimg.svg"
            downloadIconSrc="/images/Download.svg"
            sortIconSrc="/images/ArrowUpDown.svg"
            breadcrumbItems={[
                { label: 'Mənim kabinetim', href: '/account' },
                { label: 'Sifariş 3082' },
            ]}
            orderNumberLabel="Sifariş №74083"
            orderCode="2026-0143"
            orderDate="15 may 2026"
            managerName="Menecer Kamil"
            whatsappLabel="WhatsApp ilə əlaqə"
            whatsappHref="https://wa.me/994000000000"
            statusLabel="Təklif göndərilib"
            pdfFileName="Kommersiya təklifi №2026-013.pdf"
            pdfDate="15 may 2026"
            downloadLabel="Yüklə"
            onDownload={() => console.log('download pdf')}
            tableNoLabel="№"
            tableNameLabel="Malın adı"
            tableUnitLabel="Ölçü vahidi"
            tableQtyLabel="Miqdar"
            tablePriceLabel="Qiymət"
            tableTotalLabel="Məbləğ"
            onSort={(field) => console.log('sort by', field)}
            items={ITEMS}
            subtotalLabel="Əsas məbləğ"
            subtotalValue="1 346.00"
            tableVatLabel="ƏDV"
            tableVatValue="242.28"
            tableYekunLabel="YEKUN"
            tableYekunValue="1 588.28"
        />
    );
};