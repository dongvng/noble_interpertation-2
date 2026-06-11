import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const steps = ["proc.s1", "proc.s2", "proc.s3", "proc.s4"];

export function Process() {
  const { t } = useI18n();
  return (
    <section className="relative py-32 bg-gradient-navy-deep overflow-hidden">
      <div className="container-lux">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="eyebrow mb-4">{t("proc.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.05]">
            {t("proc.title")}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent hidden md:block" />
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <div className="relative h-24 w-24 flex items-center justify-center flex-shrink-0">
                    <div className="absolute inset-0 rounded-full border border-gold/40" />
                    <div className="absolute inset-2 rounded-full bg-navy" />
                    <span className="relative font-display text-2xl font-bold text-gradient-gold">0{i + 1}</span>
                  </div>
                  <div className="md:mt-6">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-ivory mb-2">{t(`${s}.t`)}</h3>
                    <p className="text-sm text-ivory/65 leading-relaxed max-w-xs">{t(`${s}.d`)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
