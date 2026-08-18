import { NavbarWrapper } from "../../components/Navbar/navbar-wrapper";
import { ProductDetailWrapper } from "../../components/ProductDetail/product-detail-wrapper";
import { FooterWrapper } from "../../components/Footer/footer-wrapper";

export default function ProductDetailPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavbarWrapper />
      <ProductDetailWrapper />
      <FooterWrapper />
    </div>
  );
}