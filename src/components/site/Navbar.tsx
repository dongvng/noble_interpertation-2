import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo-noble.png";

const links = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.industries", href: "#industries" },
  { key: "nav.pricing", href: "#pricing" },
  { key: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel-strong border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container-lux flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="Noble Interpretation" className="h-11 w-11 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-ivory tracking-wide">NOBLE</div>
            <div className="text-[10px] tracking-[0.28em] text-gold-soft uppercase">Interpretation</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-sm font-medium text-ivory/80 hover:text-gold transition-colors duration-300 relative group"
            >
              {t(l.key)}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:0924866899" className="hidden md:flex items-center gap-2 text-xs text-ivory/70 hover:text-gold transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span className="font-medium">0924 866 899</span>
          </a>
          <div className="hidden md:flex items-center text-xs font-semibold border border-white/15 rounded-full overflow-hidden">
            {(["vi", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 transition-all ${
                  lang === l ? "bg-gold text-navy" : "text-ivory/70 hover:text-ivory"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-gradient-gold text-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-gold-glow transition-shadow duration-500"
          >
            {t("nav.cta")}
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-ivory p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-panel-strong border-t border-white/10"
          >
            <div className="container-lux py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-ivory/85 hover:text-gold py-2 border-b border-white/5"
                >
                  {t(l.key)}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                {(["vi", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full ${
                      lang === l ? "bg-gold text-navy" : "border border-white/15 text-ivory/70"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
                <a href="tel:0924866899" className="ml-auto text-sm text-gold font-medium">
                  0924 866 899
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
