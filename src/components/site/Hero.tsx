import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Headphones, Briefcase, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import hero from "@/assets/hero-conference.jpg";

export function Hero() {
  const { t, lang } = useI18n();

  const trust = [
    { icon: ShieldCheck, key: "trust.nda" },
    { icon: Headphones, key: "trust.support" },
    { icon: Briefcase, key: "trust.specialized" },
    { icon: MapPin, key: "trust.nationwide" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="International conference interpretation booth"
          className="w-full h-full object-cover scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] glow-orb-gold opacity-60 animate-float-slow" />
      <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] glow-orb-gold opacity-40" />

      <div className="container-lux relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-gold" />
              <span className="eyebrow">{t("hero.eyebrow")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-ivory leading-[1.02] tracking-[-0.03em] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              {t("hero.title1")}{" "}
              <span className="text-gradient-gold font-light">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg lg:text-xl text-gold-soft/90 font-light italic"
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-6 max-w-2xl text-base lg:text-lg text-ivory/70 leading-relaxed"
            >
              {t("hero.sub")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-navy font-semibold px-7 py-4 rounded-full hover:shadow-gold-glow transition-all duration-500"
              >
                {t("hero.cta1")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-ivory/25 text-ivory font-medium px-7 py-4 rounded-full hover:bg-white/5 hover:border-gold/50 transition-all duration-500"
              >
                {t("hero.cta2")}
              </a>
            </motion.div>
          </div>

          {/* Side glass panel with stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="glass-panel rounded-3xl p-8 shadow-luxury">
              <div className="eyebrow mb-6">Noble · 2026</div>
              <div className="space-y-6">
                {[
                  { v: "1,200+", l: { vi: "Dự án triển khai", en: "Projects delivered" } },
                  { v: "300+", l: { vi: "Phiên dịch chuyên gia", en: "Expert interpreters" } },
                  { v: "40+", l: { vi: "Ngành chuyên biệt", en: "Specialised sectors" } },
                ].map((s) => (
                  <div key={s.v} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <div className="font-display text-4xl font-bold text-gradient-gold">{s.v}</div>
                    <div className="text-sm text-ivory/60 mt-1">{lang === "vi" ? s.l.vi : s.l.en}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {trust.map((it) => (
            <div
              key={it.key}
              className="glass-panel rounded-2xl px-5 py-4 flex items-center gap-3 hover:border-gold/40 transition-colors duration-500"
            >
              <it.icon className="h-5 w-5 text-gold flex-shrink-0" />
              <span className="text-base text-ivory/85 font-medium">{t(it.key)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
