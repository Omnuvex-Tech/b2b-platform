import { NotFound } from "@repo/ui";
import { NavbarWrapper } from "./components/Navbar/navbar-wrapper";
import { FooterWrapper } from "./components/Footer/footer-wrapper";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavbarWrapper />
      <NotFound
        title="Səhifə tapılmadı"
        description="Axtardığınız səhifə mövcud deyil və ya köçürülmüşdür. Zəhmət olmasa daxil etdiyiniz ünvanın düzgünlüyünü yoxlayın."
        catalogButtonText="Kataloqa qayıt"
        catalogHref="/catalog"
        supportButtonText="Dəstək ilə əlaqə"
        supportHref="/contact"
      />
      <FooterWrapper/>
    </div>
  );
}