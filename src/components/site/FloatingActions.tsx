import { MessageCircle, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function FloatingActions() {
  const { t } = useI18n();
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:0924866899"
        aria-label="Call hotline"
        className="h-14 w-14 rounded-full bg-gradient-gold text-navy flex items-center justify-center shadow-gold-glow hover:scale-110 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://zalo.me/0924866899"
        target="_blank"
        rel="noreferrer"
        aria-label="Zalo"
        className="h-14 w-14 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-luxury hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 px-5 h-14 rounded-full glass-panel-strong text-ivory text-sm font-semibold hover:border-gold/50 transition-all"
      >
        {t("nav.cta")}
      </a>
    </div>
  );
}
