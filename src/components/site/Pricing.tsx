import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

const tiers = [
  {
    nameKey: "price.p1.name",
    suitVi: "Cuộc họp doanh nghiệp nhỏ · Trao đổi nội bộ · Cuộc hẹn ngắn",
    suitEn: "Small business meetings · Internal communication · Short engagements",
    features: {
      vi: ["Phiên dịch nối tiếp", "Hỗ trợ giao tiếp doanh nghiệp", "Lịch trình linh hoạt", "Hỗ trợ trực tuyến hoặc trực tiếp"],
      en: ["Consecutive interpretation", "Business communication support", "Flexible scheduling", "Online or onsite delivery"],
    },
    featured: false,
  },
  {
    nameKey: "price.p2.name",
    suitVi: "Hội nghị · Tham quan nhà máy · Họp kỹ thuật · Hỗ trợ FDI",
    suitEn: "Conferences · Factory visits · Technical meetings · FDI support",
    features: {
      vi: ["Phiên dịch chuyên ngành", "Chuẩn bị thuật ngữ chuyên môn", "Phối hợp hội nghị", "Quy trình hỗ trợ doanh nghiệp", "Lịch trình ưu tiên"],
      en: ["Specialised interpreters", "Technical terminology prep", "Conference coordination", "Enterprise workflow", "Priority scheduling"],
    },
    featured: true,
  },
  {
    nameKey: "price.p3.name",
    suitVi: "Họp điều hành · Sự kiện ngoại giao · Đoàn quốc tế · Đàm phán cấp cao",
    suitEn: "Executive meetings · Diplomatic events · International delegations · Top-level negotiations",
    features: {
      vi: ["Phiên dịch cao cấp", "Chuẩn bị cấp điều hành", "Bảo mật & NDA", "Điều phối chuyên trách", "Triển khai khẩn cấp ưu tiên"],
      en: ["Senior interpreters", "Executive-level prep", "Confidentiality & NDA", "Dedicated coordination", "Priority emergency deployment"],
    },
    featured: false,
  },
];

export function Pricing() {
  const { t, lang } = useI18n();
  const L = lang as Lang;

  return (
    <section id="pricing" className="relative py-32 bg-gradient-navy-deep overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-orb-gold opacity-25" />
      <div className="container-lux relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="eyebrow mb-4">{t("price.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.05]">
            {t("price.title")}
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed">{t("price.sub")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.nameKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 lg:p-10 flex flex-col ${
                tier.featured
                  ? "bg-gradient-to-br from-navy-exec via-navy-slate to-navy-exec border border-gold/40 shadow-luxury lg:scale-[1.04] lg:-my-2"
                  : "glass-panel hover:border-gold/30 transition-colors duration-500"
              }`}
            >
              {tier.featured && (
                <>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-navy text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-gold-glow">
                    {t("price.popular")}
                  </div>
                  <div className="absolute -top-32 -right-32 w-80 h-80 glow-orb-gold opacity-50" />
                </>
              )}
              <div className="relative">
                <div className="eyebrow mb-3">0{i + 1} · Tier</div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-ivory mb-4">{t(tier.nameKey)}</h3>
                <p className="text-sm text-ivory/65 leading-relaxed mb-6 min-h-[3.5rem]">
                  {L === "vi" ? tier.suitVi : tier.suitEn}
                </p>

                <div className="border-t border-white/10 pt-6 mb-8">
                  <div className="text-xs uppercase tracking-wider text-gold mb-1">{t("price.from")}</div>
                  <div className="font-display text-3xl font-bold text-ivory">
                    {L === "vi" ? "Theo yêu cầu" : "On request"}
                  </div>
                </div>

                <ul className="space-y-3 mb-10">
                  {tier.features[L].map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-ivory/80">
                      <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-500 ${
                    tier.featured
                      ? "bg-gradient-gold text-navy hover:shadow-gold-glow"
                      : "border border-ivory/20 text-ivory hover:border-gold hover:text-gold"
                  }`}
                >
                  {t("price.cta")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-ivory/55 italic max-w-2xl mx-auto">{t("price.note")}</p>
      </div>
    </section>
  );
}
