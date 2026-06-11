import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import portrait from "@/assets/team-interpreter.jpg";

export function Team() {
  const { t, lang } = useI18n();
  return (
    <section className="relative py-32 bg-navy">
      <div className="container-lux">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 to-transparent rounded-[2rem] blur-2xl opacity-60" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-luxury">
              <img src={portrait} alt="Senior interpreter" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-panel-strong rounded-2xl p-5">
                <div className="text-xs tracking-[0.24em] text-gold uppercase mb-2">In session</div>
                <div className="font-display text-ivory text-lg">Live interpretation · Lotte Center Hanoi</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="eyebrow mb-4">{t("team.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.05] mb-8">
              {t("team.title")}
            </h2>
            <p className="text-lg text-ivory/75 leading-relaxed mb-10 max-w-xl">{t("team.desc")}</p>

            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {[
                { v: "15+", vi: "Năm kinh nghiệm", en: "Years experience" },
                { v: "12", vi: "Ngôn ngữ", en: "Languages" },
                { v: "98%", vi: "Hài lòng khách hàng", en: "Client satisfaction" },
                { v: "ISO", vi: "Quy trình chuẩn", en: "Quality framework" },
              ].map((s) => (
                <div key={s.v} className="bg-navy-exec p-6">
                  <div className="font-display text-3xl font-bold text-gradient-gold">{s.v}</div>
                  <div className="text-xs text-ivory/60 mt-1 uppercase tracking-wider">
                    {lang === "vi" ? s.vi : s.en}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
