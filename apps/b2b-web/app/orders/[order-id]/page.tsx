import { NavbarWrapper } from "../../components/Navbar/navbar-wrapper";
import { OrderDetailWrapper } from "../../components/OrderDetail/order-detail-wrapper";
import { FooterWrapper } from "../../components/Footer/footer-wrapper";

export default function OrderDetailPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavbarWrapper />
      <OrderDetailWrapper />
      <FooterWrapper />
    </div>
  );
}