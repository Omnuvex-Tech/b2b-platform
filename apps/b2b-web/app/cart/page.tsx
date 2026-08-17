import { NavbarWrapper } from "../components/Navbar/navbar-wrapper";
import { CartWrapper } from "../components/Cart/cart-wrapper";
import { FooterWrapper } from "../components/Footer/footer-wrapper";

export default function CartPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavbarWrapper />
      <CartWrapper />
      <FooterWrapper />
    </div>
  );
}