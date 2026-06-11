import { useI18n } from "@/lib/i18n";
import ipa from "@/assets/partners/ipa.png";
import iz from "@/assets/partners/iz-vietnam.png";
import iz2 from "@/assets/partners/iz-vietnam-2.png";
import fibic from "@/assets/partners/fibic.png";
import invest from "@/assets/partners/invest-vietnam.png";
import cross from "@/assets/partners/cross-connect.png";

const partners = [
  { src: ipa, alt: "IPA Vietnam" },
  { src: invest, alt: "Invest Vietnam" },
  { src: fibic, alt: "FIBIC" },
  { src: iz, alt: "IZ Vietnam" },
  { src: iz2, alt: "Vietnam Industrial Zone" },
  { src: cross, alt: "Cross Connect Club" },
];

// Repeat logos so wide viewports stay filled during the scroll
const stripLogos = [...partners, ...partners];

function PartnerStrip({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-16 pr-16"
      aria-hidden={ariaHidden || undefined}
    >
      {stripLogos.map((p, i) => (
        <div
          key={`${p.alt}-${i}`}
          className="flex h-20 w-44 shrink-0 items-center justify-center"
        >
          <img
            src={p.src}
            alt={ariaHidden ? "" : p.alt}
            className="max-h-24 max-w-full object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

export function Partners() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 bg-navy border-y border-white/5 overflow-hidden">
      <div className="container-lux">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-10 bg-gold/50" />
          <span className="eyebrow">{t("partners.title")}</span>
          <span className="h-px w-10 bg-gold/50" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-navy to-transparent pointer-events-none" />
        <div className="flex w-max animate-marquee pl-8">
          <PartnerStrip />
          <PartnerStrip ariaHidden />
        </div>
      </div>
    </section>
  );
}
