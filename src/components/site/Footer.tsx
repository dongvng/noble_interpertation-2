import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo-noble.png";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const navLinks = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.services", href: "#services" },
    { key: "nav.industries", href: "#industries" },
    { key: "nav.pricing", href: "#pricing" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-charcoal border-t border-white/10 pt-20 pb-8">
      <div className="container-lux">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Noble" className="h-16 w-16" />
              <div>
                <div className="font-display font-semibold text-ivory text-xl">NOBLE</div>
                <div className="text-sm tracking-[0.28em] text-gold-soft uppercase">Interpretation</div>
              </div>
            </div>
            <p className="text-ivory/65 leading-relaxed max-w-md mb-6">{t("footer.tagline")}</p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full glass-panel flex items-center justify-center hover:bg-gradient-gold transition-all duration-500 group">
                  <Icon className="h-4 w-4 text-ivory/70 group-hover:text-navy transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base uppercase tracking-[0.2em] text-gold mb-5">{t("footer.nav")}</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <a href={l.href} className="text-ivory/70 hover:text-gold transition-colors text-sm">{t(l.key)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-base uppercase tracking-[0.2em] text-gold mb-5">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex gap-2"><Phone className="h-4 w-4 text-gold mt-0.5" /> 0924 866 899</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-gold mt-0.5" /> success@noble.edu.vn</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /> Lotte Center Hanoi, 54 Liễu Giai, Ba Đình, Hà Nội</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base uppercase tracking-[0.2em] text-gold mb-5">{t("footer.hours")}</h4>
            <p className="text-sm text-ivory/70 leading-relaxed">{t("footer.hours.value")}</p>
          </div>
        </div>

        <div className="gold-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-ivory/50">
          <div>© {year} Noble Interpretation. {t("footer.rights")}</div>
          <div className="font-display tracking-[0.3em] uppercase">Precision · Trust · Excellence</div>
        </div>
      </div>
    </footer>
  );
}
