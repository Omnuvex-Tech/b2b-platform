import { NavbarWrapper } from "../components/Navbar/navbar-wrapper";
import { CatalogWrapper } from "../components/Catalog/catalog-wrapper";
import { FooterWrapper } from "../components/Footer/footer-wrapper";

export default function CatalogPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavbarWrapper />
      <CatalogWrapper />
      <FooterWrapper />
    </div>
  );
}