import { motion } from "framer-motion";
import { Mic, FileText, Users, ArrowUpRight } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import interpretationImg from "@/assets/service-interpretation.jpg";
import translationImg from "@/assets/service-translation.jpg";
import eventImg from "@/assets/service-event.jpg";

const services = [
  {
    icon: Mic,
    image: interpretationImg,
    imageAlt: { vi: "Phiên dịch hội nghị quốc tế", en: "International conference interpretation" },
    titleKey: "svc.interp",
    descKey: "svc.interp.desc",
    featured: true,
    items: {
      vi: ["Phiên dịch cabin", "Phiên dịch nối tiếp", "Họp điều hành", "Phiên dịch nhà máy", "Hội nghị quốc tế", "Y tế · Pháp lý"],
      en: ["Simultaneous", "Consecutive", "Executive meetings", "Factory interpretation", "International conferences", "Medical · Legal"],
    },
  },
  {
    icon: FileText,
    image: translationImg,
    imageAlt: { vi: "Biên dịch tài liệu doanh nghiệp", en: "Corporate document translation" },
    titleKey: "svc.translation",
    descKey: "svc.translation.desc",
    featured: false,
    items: {
      vi: ["Pháp lý", "Kỹ thuật", "Hợp đồng doanh nghiệp", "Tài liệu sản xuất", "Tài liệu nội bộ"],
      en: ["Legal", "Technical", "Business contracts", "Manufacturing", "Corporate materials"],
    },
  },
  {
    icon: Users,
    image: eventImg,
    imageAlt: { vi: "Hỗ trợ sự kiện doanh nghiệp", en: "Corporate event support" },
    titleKey: "svc.event",
    descKey: "svc.event.desc",
    featured: false,
    items: {
      vi: ["Hỗ trợ hội nghị", "Điều phối sự kiện", "Kết nối B2B", "Hỗ trợ đoàn công tác", "Đồng hành quốc tế"],
      en: ["Conference support", "Event coordination", "B2B matching", "Delegation assistance", "International support"],
    },
  },
];

export function Services() {
  const { t, lang } = useI18n();

  return (
    <section id="services" className="relative py-32 bg-navy">
      <div className="container-lux">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="eyebrow mb-4">{t("svc.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.05]">
              {t("svc.title")}
            </h2>
          </motion.div>
          <div className="lg:col-span-5 lg:text-right">
            <div className="gold-divider w-full lg:ml-auto lg:w-2/3" />
          </div>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((s, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <motion.article
                key={s.titleKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={imageFirst ? "" : "lg:order-2"}>
                  <div
                    className={`relative overflow-hidden rounded-2xl lg:rounded-3xl aspect-[4/3] ${
                      s.featured ? "border border-gold/30 shadow-luxury" : "border border-white/8"
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.imageAlt[lang as Lang]}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {s.featured && (
                      <div className="absolute top-4 right-4 text-[10px] tracking-[0.28em] text-gold font-semibold uppercase border border-gold/40 rounded-full px-3 py-1 bg-navy/80 backdrop-blur-sm">
                        Flagship
                      </div>
                    )}
                  </div>
                </div>

                <div className={imageFirst ? "" : "lg:order-1"}>
                  <div
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 ${
                      s.featured ? "bg-gold text-navy" : "bg-white/5 text-gold border border-gold/30"
                    }`}
                  >
                    <s.icon className="h-6 w-6" />
                  </div>

                  <h3
                    className={`font-display font-bold text-ivory leading-tight ${
                      s.featured ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
                    }`}
                  >
                    {t(s.titleKey)}
                  </h3>
                  <p className="mt-5 text-ivory/70 leading-relaxed max-w-xl">{t(s.descKey)}</p>

                  <ul className={`mt-6 grid gap-2 ${s.featured ? "grid-cols-2" : "grid-cols-1"}`}>
                    {s.items[lang as Lang].map((it) => (
                      <li key={it} className="flex items-center gap-2 text-base text-ivory/75">
                        <span className="h-1 w-1 rounded-full bg-gold shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-4 transition-all group"
                  >
                    {t("svc.learn")}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
