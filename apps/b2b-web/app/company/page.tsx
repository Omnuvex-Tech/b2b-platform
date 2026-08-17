import { NavbarWrapper } from "../components/Navbar/navbar-wrapper";
import { CompanyInfoWrapper } from "../components/CompanyInfo/company-info-wrapper";
import { FooterWrapper } from "../components/Footer/footer-wrapper";

export default function AccountPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavbarWrapper />
      <CompanyInfoWrapper />
      <FooterWrapper />
    </div>
  );
}